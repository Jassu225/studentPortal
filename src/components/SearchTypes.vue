<template>
  <v-container fluid>
    <h2>Search By:</h2>
    <v-radio-group v-model="radios" :mandatory="true" row @change="keyChanged($event)">
      <v-radio
        v-for="(item,index) in searchKeys"
        :key="index"
        :label="item"
        :value="item"
        >
      </v-radio>
    </v-radio-group>
  </v-container>
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
.v-select {
  display: grid;
}
</style>

