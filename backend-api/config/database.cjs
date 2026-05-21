require("dotenv").config();

const common = {
  dialect: "postgres",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
};

const buildFromEnv = () => ({
  ...common,
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "",
  dialectOptions:
    process.env.DB_SSL === "true"
      ? { ssl: { require: true, rejectUnauthorized: false } }
      : {},
});

module.exports = {
  development: process.env.DATABASE_URL
    ? { ...common, use_env_variable: "DATABASE_URL" }
    : buildFromEnv(),
  test: process.env.DATABASE_URL
    ? { ...common, use_env_variable: "DATABASE_URL" }
    : buildFromEnv(),
  production: process.env.DATABASE_URL
    ? { ...common, use_env_variable: "DATABASE_URL" }
    : buildFromEnv(),
};
