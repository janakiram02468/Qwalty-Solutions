import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

function createSequelize() {
  if (process.env.DATABASE_URL) {
    return new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      logging: process.env.NODE_ENV === "development" ? console.log : false,
      dialectOptions:
        process.env.DB_SSL === "true"
          ? { ssl: { require: true, rejectUnauthorized: false } }
          : {},
    });
  }

  return new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD ?? "",
    {
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 5432,
      dialect: "postgres",
      logging: process.env.NODE_ENV === "development" ? console.log : false,
      dialectOptions:
        process.env.DB_SSL === "true"
          ? { ssl: { require: true, rejectUnauthorized: false } }
          : {},
    },
  );
}

export const sequelize = createSequelize();
