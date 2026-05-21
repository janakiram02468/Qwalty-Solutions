import { Op, QueryTypes } from "sequelize";
import { Category } from "../models/index.js";
import { sequelize } from "../config/database.js";
import { AppError } from "../utils/AppError.js";
import { slugify } from "../utils/slug.js";

export class CategoryService {
  async list() {
    const categories = await Category.findAll({
      order: [["name", "ASC"]],
    });

    const countRows = await sequelize.query(
      `SELECT category_id AS "categoryId", COUNT(*)::int AS count FROM products GROUP BY category_id`,
      { type: QueryTypes.SELECT },
    );

    /** @type {Record<string, number>} */
    const countByCategory = {};
    for (const row of countRows) {
      const r = /** @type {{ categoryId: string; count: number }} */ (row);
      countByCategory[r.categoryId] = Number(r.count) || 0;
    }

    return categories.map((c) => ({
      ...c.get({ plain: true }),
      productCount: countByCategory[c.id] ?? 0,
    }));
  }

  async getById(id) {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new AppError(404, "Category not found");
    }
    return category;
  }

  /**
   * @param {{ name: string; slug?: string; description?: string | null }} payload
   */
  async create(payload) {
    if (!payload?.name || !String(payload.name).trim()) {
      throw new AppError(400, "name is required");
    }
    const slug = payload.slug?.trim() || slugify(payload.name);
    const existing = await Category.findOne({ where: { slug } });
    if (existing) {
      throw new AppError(409, "A category with this slug already exists");
    }
    return Category.create({
      name: payload.name.trim(),
      slug,
      description: payload.description ?? null,
    });
  }

  /**
   * @param {string} id
   * @param {{ name?: string; slug?: string; description?: string | null }} payload
   */
  async update(id, payload) {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new AppError(404, "Category not found");
    }

    const nextSlug =
      payload.slug !== undefined
        ? String(payload.slug).trim() || slugify(payload.name ?? category.name)
        : payload.name !== undefined
          ? slugify(payload.name)
          : category.slug;

    if (nextSlug !== category.slug) {
      const clash = await Category.findOne({
        where: { slug: nextSlug, id: { [Op.ne]: id } },
      });
      if (clash) {
        throw new AppError(409, "A category with this slug already exists");
      }
    }

    await category.update({
      ...(payload.name !== undefined && { name: payload.name.trim() }),
      ...(payload.slug !== undefined || payload.name !== undefined
        ? { slug: nextSlug }
        : {}),
      ...(payload.description !== undefined && {
        description: payload.description,
      }),
    });

    return category.reload();
  }

  async remove(id) {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new AppError(404, "Category not found");
    }
    await category.destroy();
    return { id };
  }
}

export const categoryService = new CategoryService();
