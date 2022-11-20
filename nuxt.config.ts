// https://nuxt.com/docs/api/configuration/nuxt-config

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: process.env.API_SECRET,
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'default_base_url',
      apiSecret: process.env.API_SECRET,
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      title: 'My app',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' },
      ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in', // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in', // default
    },
  },
})
