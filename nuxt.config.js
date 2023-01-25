const pkg = require("./package");

export default {
  ssr: true,
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
    script: [{ src: "/js/bootstrap/bootstrap.bundle.min.js", body: true }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3B8070" },

  /*
   ** Global CSS
   */
  css: [
    "~/assets/css/style.css",
    "~/assets/bootstrap/css/bootstrap.min.css",
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {src: '~/plugins/vuelidate'}
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    //Axios for requests
    "@nuxtjs/axios",

    //Cookies With options
    ["cookie-universal-nuxt", { alias: "cookiz" }],

  ],

     /* Envirement variable */
     env: {
      UrlApi: "https://www.google.com",
    },
  
};
