import { Category } from "./category.model.js";
import { Product } from "./product.model.js";

Category.hasMany(Product, {
  foreignKey: "categoryId",
  as: "products",
  onDelete: "CASCADE",
});

Product.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

export { Category, Product };
export { sequelize } from "../config/database.js";
