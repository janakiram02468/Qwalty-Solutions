import { Router } from "express";
import categoryRoutes from "./category.routes.js";
import productRoutes from "./product.routes.js";

const api = Router();

api.use("/categories", categoryRoutes);
api.use("/products", productRoutes);

export default api;
