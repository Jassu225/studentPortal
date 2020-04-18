<template>
  <div class="search-page">
    <div class="grid search-container">
      <search-types
        :search-keys="searchKeys"
        :selected-key="selectedKey"
        @selectionChanged="searchTypeChanged"
      />
      <searchbar
        :selected-key="selectedKey"
        :search-keys="searchKeys"
        @searchTextChanged="searchDB"
      />
    </div>
    <div class="full-width full-height overflow">
      <student-detailed-info v-if="showDetailedView" :record="record || {}" />
      <matched-students v-else-if="showTableView" :records="records" />
      <v-footer v-if="showDetailedView" height="auto">
        <v-spacer>
          <v-btn class="blue-color" @click.native="print(record)">Print</v-btn>
        </v-spacer>
      </v-footer>
    </div>
  </div>
</template>

<script>
import SearchTypes from '~/components/Search/SearchTypes.vue';
import Searchbar from '~/components/Search/Searchbar.vue';
import StudentDetailedInfo from '~/components/SearchResult/StudentDetailedInfo.vue';
import MatchedStudents from '~/components/SearchResult/MatchedStudents.vue';
import dbHandler from '~/utils/db-handler';
import print from '~/mixins/print';
import classFormatter from '~/mixins/class-formatter';
// import certificate from './../assets/js/studyCertificate.js';

const searchKeys = ['Reg. No.', 'Student Name', 'Date of Birth', 'Date of Birth Range', 'Joining Date Range'];

export default {
  name: 'Search',
  components: {
    SearchTypes,
    Searchbar,
    StudentDetailedInfo,
    MatchedStudents,
  },
  mixins: [print, classFormatter],
  data() {
    return {
      selectedKey: searchKeys[1],
      record: null,
      records: [],
    };
  },
  computed: {
    searchKeys() {
      return searchKeys;
    },
    showDetailedView() {
      return this.selectedKey === this.searchKeys[0];
    },
    showTableView() {
      return this.selectedKey === this.searchKeys[1];
    },
  },
  methods: {
    searchTypeChanged(newKey) {
      this.selectedKey = newKey;
      this.record = null;
      this.records = [];
      // switch (this.selectedKey) {
      //   case this.searchKeys[0]:
      //     this.record = null;
      //     break;
      //   case this.searchKeys[1]:
      //     this.records = [];
      //     break;
      // }
    },
    async searchDB(value) {
      // const value = event.target.value;
      console.log(value);

      if (this.selectedKey) {
        let record = null;
        let records = null;
        switch (this.selectedKey) {
          case this.searchKeys[0]:
            if (parseInt(value)) {
              record = await dbHandler.searchByRegID(parseInt(value));
              console.log(record);
              this.record = record;
            } else if (value) {
              alert('Enter a valid registration number');
            }
            break;

          case this.searchKeys[1]:
            if (value) {
              records = await dbHandler.searchByName(value);
              console.log(records);
              this.records = records;
            }
            break;
        }
      } else {
        alert('Please select an operation');
      }
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
