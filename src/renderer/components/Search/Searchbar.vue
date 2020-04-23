<template>
  <div class="search-bar">
    <div
      v-if="!isDateField"
      class="sb-text-box"
    >
      <v-text-field
        v-model="textValue"
        label="Search"
        class="mx-4 secondary--text"
        flat
        :type="textFieldType"
        dark
        color="white"
        @input="setValueLazily"
      >
        <template #append>
          <span class="fas fa-times pointer" />
        </template>
      </v-text-field>
    </div>
    <date-menu
      v-else
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { debounce } from 'debounce';
import { searchTypes } from '~/data';
import DateMenu from '~/components/Generic/DateMenu.vue';

export default {
  name: 'Searchbar',
  components: {
    DateMenu,
  },
  props: {
    searchTypes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      textValue: '',
    };
  },
  computed: {
    ...mapGetters({
      searchType: 'Search/searchType',
      searchValue: 'Search/searchValue',
    }),
    isDateField() {
      return this.searchType === searchTypes.dateOfBirth || this.searchType === searchTypes.joiningDate;
    },
    textFieldType() {
      return this.searchType === searchTypes.aadharNumber ? 'number' : 'text';
    },
  },
  watch: {
    searchValue(value) {
      this.textValue = value;
    },
  },
  methods: {
    ...mapActions({
      setSearchValue: 'Search/setSearchValue',
    }),
    setValueLazily: debounce(function () {
      this.setSearchValue(this.textValue);
    }, 300),
  },
};
</script>

<style lang="scss">
.search-bar {
  width: 100%;
  padding: 0 1rem;
  .sb-text-box {
    max-width: 95% !important;
    .v-input__slot {
      input {
        caret-color: currentColor;
      }
      &:after {
        border-color: #bdbdbd !important;
      }
    }
  }
  // .sb-date-field {
  //   width: 100%;
  //   display: grid;
  //   grid-template-rows: 1fr;
  //   grid-template-columns: 2fr 1fr;
  //   column-gap: 1rem;
  // }
}
</style>
