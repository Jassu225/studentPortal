<template>
  <v-app>
    <div id="app-main" class="full-width full-height">
      <div class="app-title white--text">S.M.A.P. School, Gandhinagar, Chirala</div>
      <side-nav class="side-nav" />
      <nuxt class="nuxt-app" />
      <div class="app-footer">&copy; All copyrights reserved - {{ new Date().getFullYear() }}</div>
    </div>
  </v-app>
</template>

<script>
import SideNav from '~/components/SideNav/SideNav.vue';
export default {
  name: 'DefaultLayout',
  components: { SideNav },
  // head: {
  //   // title: 'Home page 🚀',
  //   // meta: [
  //   //   { hid: 'description', name: 'description', content: 'Home page description' }
  //   // ],
  //   // noscript: [
  //   //   { innerHTML: 'Body No Scripts', body: true }
  //   // ],
  //   script: [
  //     // { src: '/head.js' },
  //     // Supported since 1.0
  //     // { src: '/body.js', body: true },
  //     // { src: '/defer.js', defer: '' }
  //     { src: '@fortawesome/fontawesome-free/js/all.js' },
  //   ],
  // },
};
</script>

<style lang="scss">
body,
html,
#__nuxt,
#__layout,
.v-application,
.v-application--wrap {
  width: 100%;
  height: 100%;
  margin: 0;
}

.full-width {
  width: 100% !important;
}

.full-height {
  height: 100% !important;
}

* {
  box-sizing: border-box;
}

#app-main {
  font-family: 'Montserrat', 'Open Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'app-title app-title' 'side-nav nuxt-app' 'app-footer app-footer';
  color: white;
  .app-title {
    grid-area: app-title;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .side-nav {
    grid-area: side-nav;
  }
  .nuxt-app {
    grid-area: nuxt-app;
    background-color: #3e4144;
  }
  .app-footer {
    grid-area: app-footer;
    width: 100%;
    justify-content: center;
    font-weight: 500;
  }
  .app-title,
  .app-footer {
    background-color: #383838;
    display: flex;
    align-items: center;
    padding: 10px 10px 10px 20px;
  }

  .col-6 {
    width: 50%;
  }

  .color {
    background-color: rgb(34, 140, 187);
    border-color: rgb(34, 140, 187);
  }

  .bg-color {
    background-color: #f3ecec;
  }

  .font-sz {
    font-size: 1.4rem;
  }

  .bgColor {
    background-color: #2d7eab !important;
    border-color: #2d7eab !important;
  }

  .main-grid {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
  }

  .overflow {
    overflow-y: auto;
  }

  .blue-color {
    background-color: #23c1c1 !important;
    border-color: #23c1c1 !important;
  }

  .pointer {
    cursor: pointer;
  }
}
</style>
