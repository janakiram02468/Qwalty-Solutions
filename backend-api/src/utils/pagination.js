const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 100;

/**
 * @param {Record<string, unknown>} query
 * @returns {{ page: number; limit: number; offset: number }}
 */
export function parsePagination(query) {
  const rawPage = Number.parseInt(String(query.page ?? ""), 10);
  const rawLimit = Number.parseInt(String(query.limit ?? ""), 10);

  const page =
    Number.isFinite(rawPage) && rawPage > 0 ? rawPage : DEFAULT_PAGE;
  const limit = Math.min(
    MAX_LIMIT,
    Number.isFinite(rawLimit) && rawLimit > 0 ? rawLimit : DEFAULT_LIMIT,
  );
  const offset = (page - 1) * limit;

  return { page, limit, offset };
}

/**
 * @param {number} total
 * @param {number} page
 * @param {number} limit
 */
export function paginationMeta(total, page, limit) {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  return {
    page,
    limit,
    total,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}
