<template>
  <div id="app" class="full-width full-height">
    <v-app class="full-width full-height">
      <!-- <router-view/> -->
      <!-- <DBconverter /> -->
      <Menu />
    </v-app>
  </div>
</template>

<script>


import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body, html {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow-y: hidden;
}

.full-width {
  width: 100%;
}

.full-height {
  height: 100%;
}
</style>
