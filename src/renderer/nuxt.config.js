/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  mode: 'spa', // or 'universal'
  head: {
    title: 'student-portal-revamp',
  },
  loading: false,
  plugins: [
    { ssr: true, src: '@/plugins/icons.js' },
    '@/plugins/vuetify',
  ],
  build: {
    extend(config, { isDev, isClient }) {
      config.resolve.alias['~/*'] = './*';
    },
  },
  buildModules: [
    '@nuxtjs/router',
    '@nuxtjs/vuetify',
  ],
  css: [
    'material-icons/iconfont/material-icons.css',
  ],
  modules: [
  ],
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#1867c0',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  },
};
