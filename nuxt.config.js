import dotenv from 'dotenv'
import pkg from './package'

dotenv.config({ path: '.env' })

const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')
import axios from 'axios' // we'll need this later for our dynamic routes

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Django Nuxt SSR - To Do With Vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Django & Nuxt SSR" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#9c6df4' },

  // I'm not sure this is necessary
  transition: {
    name: 'page',
    mode: 'out-in'
  },

  /*
  ** Global CSS
  */
  css: [
    { src: '@/assets/style/main2.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        // import whole set, should probably add tree-shaking for production projects
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub']
        }
      ]
    }]
  ],
  axios: {
    proxy: true,
    progress: true,
    baseURL: process.env.PRODUCTION === "true" ? process.env.HEROKU_BACKEND_API_URL : process.env.LOCAL_API_URL,
    baseBrowserURL: process.env.PRODUCTION === "true" ? process.env.HEROKU_BACKEND_API_URL : process.env.LOCAL_API_URL,
    // can't figure out why yet but prefix is needed even when the two above are enabled
    prefix: "api/"
  },
  proxy: {
    // ** is important here, * probably means it won't go more than one level deep
    '/api/**': { target: process.env.PRODUCTION === "true" ? process.env.HEROKU_BACKEND_API_URL : process.env.LOCAL_API_URL, pathRewrite: { '^/api': '' } }
  },
  env: {
    BASE_WS: process.env.PRODUCTION === "true" ? process.env.REMOTE_BASE_WS : 'ws://localhost:8000/api/ping-consumer'
  },
  /*
  ** Build configuration
  */
  build: {
    // analyze: {
    //   analyzerMode: 'server',
    //   openAnalyzer: true
    // },
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
      // for more information about purgecss.
      config.plugins.push(
          new PurgecssPlugin({
            // Specify the locations of any files you want to scan for class names.
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                // Specify the file extensions to include when scanning for
                // class names.
                extensions: ["html", "vue"]
              }
            ],
            whitelist: [
              "html",
              "body",
              "ul",
              "ol",
              "pre",
              "code",
              "blockquote"
            ],
            whitelistPatterns: [/\bhljs\S*/]
          })
      )
    }
  }
}
