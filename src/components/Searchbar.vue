<template>
  <v-flex xs6 class="item2">
    <v-text-field
      append-icon="search"
      label="Search"
      class="mx-4 secondary--text"
      flat
      @keyup="searchDB($event)"
    ></v-text-field>
  </v-flex>
</template>

<script>
export default {
  props: ['searchDB'],
  data: function() {
    return {

    }
  }
}
</script>

<style>
.item2 {
  max-width: 95% !important;
}
</style>
