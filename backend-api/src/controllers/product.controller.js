import { productService } from "../services/product.service.js";

export class ProductController {
  list = async (req, res) => {
    const result = await productService.list(req.query);
    res.json(result);
  };

  getById = async (req, res) => {
    const product = await productService.getById(req.params.id);
    res.json({ data: product });
  };

  create = async (req, res) => {
    const product = await productService.create(req.body);
    res.status(201).json({ data: product });
  };

  update = async (req, res) => {
    const product = await productService.update(req.params.id, req.body);
    res.json({ data: product });
  };

  remove = async (req, res) => {
    await productService.remove(req.params.id);
    res.status(204).send();
  };
}

export const productController = new ProductController();
