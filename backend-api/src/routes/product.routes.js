import { Router } from "express";
import { productController } from "../controllers/product.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(productController.list));
router.get("/:id", asyncHandler(productController.getById));
router.post("/", asyncHandler(productController.create));
router.put("/:id", asyncHandler(productController.update));
router.patch("/:id", asyncHandler(productController.update));
router.delete("/:id", asyncHandler(productController.remove));

export default router;
