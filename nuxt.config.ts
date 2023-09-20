import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '.env.local') })

export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: process.env.API_SECRET,
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'default_base_url',
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      // title: 'Nuxt3 starter',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Nuxt3 starter by ltg' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=yes',
        },
      ],
      script: [{ hid: 'jquery', src: 'https://code.jquery.com/jquery-3.6.1.js' }],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
})
