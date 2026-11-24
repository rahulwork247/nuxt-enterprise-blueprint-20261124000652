import { defineNuxtConfig } from 'nuxt'
import { z } from 'zod'

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'node-server',
  },
  modules: [],
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },
})