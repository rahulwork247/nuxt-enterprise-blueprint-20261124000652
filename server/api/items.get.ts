import { defineEventHandler, getQuery } from 'h3'
import { z } from 'zod'

const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().optional()
})

export default defineEventHandler(async (event) => {
  const result = querySchema.safeParse(getQuery(event))
  if (!result.success) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid query parameters' })
  }
  const { limit, cursor } = result.data
  // placeholder data
  const items = Array.from({ length: limit }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }))
  return { items, nextCursor: null }
})