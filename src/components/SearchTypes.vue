<template>
  <v-flex xs5 class="item1">
    <v-select
      :items="searchKeys"
      v-model="select"
      label="Select"
      item-value="text"
      color="black"
      @change="keyChanged($event)"
    ></v-select>
  </v-flex>
</template>

<script>
export default {
  props: ['searchKeys', 'keyChanged'],
  data: function() {
    return {
      select: null,
      // items: [
      //   'hey','this','is','not','working'
      // ],
      radios: null,
    }
  }
}
</script>

<style>
.item1 {
  max-width: 100% !important;
}
</style>

