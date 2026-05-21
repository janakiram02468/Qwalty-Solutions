import { Router } from "express";
import { categoryController } from "../controllers/category.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(categoryController.list));
router.get("/:id", asyncHandler(categoryController.getById));
router.post("/", asyncHandler(categoryController.create));
router.put("/:id", asyncHandler(categoryController.update));
router.patch("/:id", asyncHandler(categoryController.update));
router.delete("/:id", asyncHandler(categoryController.remove));

export default router;
