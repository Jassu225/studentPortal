<template>
  <v-flex xs6>
    <v-text-field
      append-icon="search"
      label="Search"
      class="mx-4"
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
/* .bottom {
  outline: 1.5px solid gray;
} */
</style>
