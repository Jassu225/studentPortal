<template>
  <v-select
    v-model="select"
    :items="searchKeys"
    label="Select type of search"
    item-value="text"
    color="black"
    class="search-type"
    outlined
    hide-details
    @change="selectionChanged"
  />
</template>

<script>
export default {
  props: {
    searchKeys: {
      type: Array,
      required: true,
    },
    selectedKey: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      select: this.selectedKey,
      // radios: null,
    };
  },
  methods: {
    selectionChanged(e) {
      this.$emit('selectionChanged', e);
    },
  },
};
</script>

<style lang="scss">
.search-type {
  width: 100%;
  .v-input__control {
    display: flex;
    width: 100%;
    align-items: center;
  }
}
</style>
