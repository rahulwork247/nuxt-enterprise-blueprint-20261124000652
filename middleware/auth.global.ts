import { defineEventHandler, getHeader, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const auth = getHeader(event, 'authorization')
  if (!auth) {
    throw createError({ statusCode: 401, statusMessage: 'Missing auth header' })
  }
  // token verification placeholder
  // In real blueprint verify JWT and attach user info to event.context
})