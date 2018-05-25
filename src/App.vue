<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- <DBconverter /> -->
    <Menu />
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
</style>
