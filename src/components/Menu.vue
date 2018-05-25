<template>
  <div>
    <v-toolbar color="purple" dark tabs>
      <v-spacer></v-spacer>
      <v-toolbar-title class="white--text">S.M.A.P. School, Gandhinagar, Chirala</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs
        slot="extension"
        v-model="tab"
        color="transparent"
        grow
      >
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab v-for="item in tabs" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <!-- Search DB Page -->
      <v-tab-item >
        <v-card class="elevation-8 bg-color">
          <SearchTypes :searchKeys="searchKeys"/>
          <Searchbar :searchDB="searchDB"/>
        </v-card>
        <!-- <hr class="color"> -->
        <v-card>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Searchbar from './Searchbar.vue';
import SearchTypes from './SearchTypes.vue';

export default {
  data () {
    return {
      tab: null,
      tabs: [
        'Search Student', 'Create DB', 'Migrate to DB'
      ],
      searchKeys: [
        'Reg. No.','Student Name', 'Date of Birth', 'Date of Birth Range', 'Joining Date Range' 
      ]
    }
  },
  components: {
    Searchbar, SearchTypes
  },
  methods: {
    searchDB: function(event) {
      console.log(event.target.value);
    }
  }
}
</script>

<style scoped>
.col-6 {
  width: 50%;
}

.color {
  border-color: royalblue;
}

.bg-color {
  background-color: #f3ecec;
}
</style>


