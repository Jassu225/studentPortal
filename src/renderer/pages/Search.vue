<template>
  <div class="search-page">
    <div class="grid search-container">
      <search-types
        :search-types="searchTypes"
        :selected-search-type="searchType"
      />
      <searchbar
        :search-types="searchTypes"
      />
    </div>
    <div class="full-width full-height overflow">
      <student-detailed-info v-if="showDetailedView" />
      <matched-students v-else-if="showTableView" />
      <v-footer v-if="showDetailedView" height="auto">
        <v-spacer>
          <v-btn class="blue-color" @click.native="print(specificRecord)">Print</v-btn>
        </v-spacer>
      </v-footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SearchTypes from '~/components/Search/SearchTypes.vue';
import Searchbar from '~/components/Search/Searchbar.vue';
import StudentDetailedInfo from '~/components/SearchResult/StudentDetailedInfo.vue';
import MatchedStudents from '~/components/SearchResult/MatchedStudents.vue';
import print from '~/mixins/print';
import classFormatter from '~/mixins/class-formatter';
import { searchTypes } from '~/data';
// import certificate from './../assets/js/studyCertificate.js';

export default {
  name: 'Search',
  components: {
    SearchTypes,
    Searchbar,
    StudentDetailedInfo,
    MatchedStudents,
  },
  mixins: [print, classFormatter],
  computed: {
    ...mapGetters({
      searchType: 'Search/searchType',
      specificRecord: 'Search/specificRecord',
    }),
    searchTypes() {
      return Object.keys(searchTypes).map(type => searchTypes[type]);
    },
    showDetailedView() {
      return this.searchType === searchTypes.aadharNumber;
    },
    showTableView() {
      return this.searchType === searchTypes.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.search-page {
  padding: 15px 10px;
  display: grid;
  grid-template-rows: 70px 1fr;
  min-height: 0;
  grid-template-columns: 1fr;
  .grid {
    padding: 0 10px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 4fr;
    /* grid-gap: 1em; */
    grid-template-areas: 'item1 item2';
  }
  .sub-grid {
    display: grid;
    grid-template-rows: 1fr 9fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
}
</style>
