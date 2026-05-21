import { UniqueConstraintError, ValidationError } from "sequelize";
import { AppError } from "../utils/AppError.js";

/**
 * Central error handler — must be registered after all routes.
 * @type {import('express').ErrorRequestHandler}
 */
export function errorHandler(err, _req, res, _next) {
  if (err instanceof UniqueConstraintError) {
    return res.status(409).json({
      error: { message: "A record with this unique value already exists" },
    });
  }

  if (err instanceof ValidationError) {
    const first = err.errors?.[0]?.message ?? "Validation failed";
    return res.status(400).json({ error: { message: first } });
  }

  const statusCode =
    err instanceof AppError ? err.statusCode : err.statusCode || 500;
  const message =
    err instanceof AppError
      ? err.message
      : statusCode === 500
        ? "Internal server error"
        : err.message || "Something went wrong";

  if (statusCode === 500) {
    console.error(err);
  }

  const body = {
    error: {
      message,
      ...(process.env.NODE_ENV === "development" && err.stack
        ? { stack: err.stack }
        : {}),
    },
  };

  res.status(statusCode).json(body);
}
