module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mykl Bernskoetter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mykl Bernskoetter: Web Developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon2.ico' }
    ]
  },
  css: [
      { src: './scss/style.scss', lang: 'scss' }
  ],
  router: {
   middleware: 'pages'
 },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
  }
}
