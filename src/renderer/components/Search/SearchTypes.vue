<template>
  <v-select
    v-model="selectedValue"
    :items="searchTypes"
    label="Select type of search"
    item-value="text"
    class="search-type"
    outlined
    hide-details
    dark
    @change="selectionChanged"
  />
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    searchTypes: {
      type: Array,
      required: true,
    },
    selectedSearchType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedValue: this.selectedSearchType,
    };
  },
  methods: {
    ...mapActions({
      setSearchType: 'Search/setSearchType',
    }),
    selectionChanged() {
      this.setSearchType(this.selectedValue);
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
