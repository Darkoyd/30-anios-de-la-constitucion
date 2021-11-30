export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Datos Constitución 1991',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Es una iniciativa que busca acercar la Constitución Política de Colombia  a la ciudadania y a otros actores. Lo anterior, por medio de una amplia colección de material gráfico y jurídico en el que se encuentra información desde la concepción de la Constitución hasta su actualidad.' },
      { name: 'keywords', content: 'constitución,colombia,politica,derecho,libro,iniciativa,política,uniandes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  generate: {
    fallback: '404.html'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-compress'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap'
  ],
  'google-gtag': {
    id: 'G-XEE54XXNPK',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false // might be necessary to avoid duplicated page track on page reload
    }
  },
  robots: {
    UserAgent: '*',
    Disallow: ['/book', '/materials', '/gallery']
  },
  sitemap: {
    hostname: 'http://datosconstitucion1991.uniandes.edu.co',
    gzip: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true
      }
    }
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true
  },
  styleResources: {
    scss: '@/assets/scss/_variables.scss'
  },
  content: {
    csv: {
      delimiter: '|'
    }
  }
}
