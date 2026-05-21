import { categoryService } from "../services/category.service.js";

export class CategoryController {
  list = async (_req, res) => {
    const data = await categoryService.list();
    res.json({ data });
  };

  getById = async (req, res) => {
    const category = await categoryService.getById(req.params.id);
    res.json({ data: category });
  };

  create = async (req, res) => {
    const category = await categoryService.create(req.body);
    res.status(201).json({ data: category });
  };

  update = async (req, res) => {
    const category = await categoryService.update(req.params.id, req.body);
    res.json({ data: category });
  };

  remove = async (req, res) => {
    await categoryService.remove(req.params.id);
    res.status(204).send();
  };
}

export const categoryController = new CategoryController();
