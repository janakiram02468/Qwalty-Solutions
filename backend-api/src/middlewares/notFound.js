/**
 * @type {import('express').RequestHandler}
 */
export function notFoundHandler(_req, res) {
  res.status(404).json({
    error: { message: "Resource not found" },
  });
}
