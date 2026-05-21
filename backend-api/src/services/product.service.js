import { Op } from "sequelize";
import { Category, Product } from "../models/index.js";
import { AppError } from "../utils/AppError.js";
import { parsePagination, paginationMeta } from "../utils/pagination.js";
import { slugify } from "../utils/slug.js";

export class ProductService {
  /**
   * @param {Record<string, unknown>} query
   */
  async list(query) {
    const { page, limit, offset } = parsePagination(query);
    const categoryId =
      typeof query.categoryId === "string" && query.categoryId.trim()
        ? query.categoryId.trim()
        : undefined;

    const where = categoryId ? { categoryId } : {};

    const [count, rows] = await Promise.all([
      Product.count({ where }),
      Product.findAll({
        where,
        limit,
        offset,
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: Category,
            as: "category",
            attributes: ["id", "name", "slug"],
          },
        ],
      }),
    ]);

    return {
      data: rows,
      meta: paginationMeta(count, page, limit),
    };
  }

  async getById(id) {
    const product = await Product.findByPk(id, {
      include: [{ model: Category, as: "category" }],
    });
    if (!product) {
      throw new AppError(404, "Product not found");
    }
    return product;
  }

  /**
   * @param {{
   *   name: string;
   *   slug?: string;
   *   description?: string | null;
   *   price: number | string;
   *   sku?: string | null;
   *   categoryId: string;
   * }} payload
   */
  async create(payload) {
    if (!payload?.name || !String(payload.name).trim()) {
      throw new AppError(400, "name is required");
    }
    if (payload.categoryId === undefined || payload.categoryId === null) {
      throw new AppError(400, "categoryId is required");
    }
    if (payload.price === undefined || payload.price === null || payload.price === "") {
      throw new AppError(400, "price is required");
    }
    const category = await Category.findByPk(payload.categoryId);
    if (!category) {
      throw new AppError(400, "Invalid categoryId: category does not exist");
    }

    const slug = payload.slug?.trim() || slugify(payload.name);
    const sku = payload.sku?.trim() || null;

    const existingSlug = await Product.findOne({ where: { slug } });
    if (existingSlug) {
      throw new AppError(409, "A product with this slug already exists");
    }
    if (sku) {
      const existingSku = await Product.findOne({ where: { sku } });
      if (existingSku) {
        throw new AppError(409, "A product with this SKU already exists");
      }
    }

    return Product.create({
      name: payload.name.trim(),
      slug,
      description: payload.description ?? null,
      price: payload.price,
      sku,
      categoryId: payload.categoryId,
    });
  }

  /**
   * @param {string} id
   * @param {{
   *   name?: string;
   *   slug?: string;
   *   description?: string | null;
   *   price?: number | string;
   *   sku?: string | null;
   *   categoryId?: string;
   * }} payload
   */
  async update(id, payload) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new AppError(404, "Product not found");
    }

    if (payload.categoryId && payload.categoryId !== product.categoryId) {
      const category = await Category.findByPk(payload.categoryId);
      if (!category) {
        throw new AppError(400, "Invalid categoryId: category does not exist");
      }
    }

    const nextSlug =
      payload.slug !== undefined
        ? String(payload.slug).trim() || slugify(payload.name ?? product.name)
        : payload.name !== undefined
          ? slugify(payload.name)
          : product.slug;

    if (nextSlug !== product.slug) {
      const clash = await Product.findOne({
        where: { slug: nextSlug, id: { [Op.ne]: id } },
      });
      if (clash) {
        throw new AppError(409, "A product with this slug already exists");
      }
    }

    const nextSku =
      payload.sku !== undefined
        ? payload.sku === null || payload.sku === ""
          ? null
          : String(payload.sku).trim()
        : product.sku;

    if (nextSku && nextSku !== product.sku) {
      const skuClash = await Product.findOne({
        where: { sku: nextSku, id: { [Op.ne]: id } },
      });
      if (skuClash) {
        throw new AppError(409, "A product with this SKU already exists");
      }
    }

    await product.update({
      ...(payload.name !== undefined && { name: payload.name.trim() }),
      ...(payload.slug !== undefined || payload.name !== undefined
        ? { slug: nextSlug }
        : {}),
      ...(payload.description !== undefined && {
        description: payload.description,
      }),
      ...(payload.price !== undefined && { price: payload.price }),
      ...(payload.sku !== undefined && { sku: nextSku }),
      ...(payload.categoryId !== undefined && {
        categoryId: payload.categoryId,
      }),
    });

    return product.reload({
      include: [{ model: Category, as: "category" }],
    });
  }

  async remove(id) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new AppError(404, "Product not found");
    }
    await product.destroy();
    return { id };
  }
}

export const productService = new ProductService();
