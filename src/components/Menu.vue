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
        <v-tabs-slider></v-tabs-slider>
        <v-tab v-for="item in tabs" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <!-- Search DB Page -->
      <v-tab-item >
        <v-card flat class="elevation-8 bg-color">
          <SearchTypes :searchKeys="searchKeys" :keyChanged="keyChanged"/>
          <Searchbar :searchDB="searchDB"/>
        </v-card>
        <!-- <hr class="color"> -->
        <v-divider></v-divider>
        <v-flex v-if="selectedKey === searchKeys[0]"
        xs12
        sm6
        md4
        lg3
        >
          <v-card>
            <v-card-title><h4>{{ record ? record.name : 'Student Name' }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Registration Number:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.registrationNumber : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Father Name:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.fatherName : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Mother Name:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.motherName : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Gender:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.gender : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Place of Birth:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.birthPlace : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Father's Occupation:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.fatherOccuation : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Caste:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.caste : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Sub-caste:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.subCaste : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Date of Birth:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.dateOfBirth : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Date of Joining:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.dateOfJoining : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>From Class:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.fromClass : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>To Class:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.toClass : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>T.C. Issue Date:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.TCIssueDate : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Aadhar Number:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.AadharNumber : '--' }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Remarks:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ record ? record.Remarks : '--' }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-tab-item>
      <!-- Create BD Page -->
      <v-tab-item>
        <v-card flat height="30rem">
          <v-btn class="my-4 white--text" color="blue" @click="createDB">Create DB</v-btn>
          <p class="record-display font-sz" :class="color[selected_color_index]">Status</p>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Searchbar from './Searchbar.vue';
import SearchTypes from './SearchTypes.vue';
// console.log(__filename);
import dbHandler from './../assets/js/db.js';

let printElement = document.getElementsByClassName('record-display')[0];

export default {
  data () {
    return {
      tab: null,
      selectedKey: null,
      record: null,
      selected_color_index: 0,
      color: ['black--text'],
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
    searchDB: async function(event) {
      let value = event.target.value;
      console.log(value);
      
      let record = null;
      if(this.selectedKey) {
        record = await dbHandler.searchDB(value, this.selectedKey, this.searchKeys);
        console.log(record);
        this.record = record;
      } else {
        alert('Please select an operation');
      }
    },
    keyChanged: function(newKey) {
      this.selectedKey = newKey;
    },
    createDB: function() {
      dbHandler.createDB(this.print);
    },
    print: function(line) {
      printElement.innerHTML = "<b>Adding: </b> " + line;
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

.font-sz {
  font-size: 1.4rem;
}
</style>


