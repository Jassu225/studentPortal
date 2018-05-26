<template>
  <div class="main-grid full-width full-height">
    <v-toolbar color="transparant" class="bgColor" dark tabs>
      <v-spacer></v-spacer>
      <v-toolbar-title class="white--text">S.M.A.P. School, Gandhinagar, Chirala</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs
        slot="extension"
        v-model="tab"
        color="transparent"
        class="color"
        grow
        
      >
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab v-for="item in tabs" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tab" class="full-width height overflow">
      <!-- Search DB Page -->
      <v-tab-item class="overflow">
        <v-card flat class="elevation-8 bg-color grid">
          <SearchTypes :searchKeys="searchKeys" :keyChanged="keyChanged"/>
          <Searchbar :searchDB="searchDB"/>
        </v-card>
        <v-divider></v-divider>
        <reg-view v-if="selectedKey === searchKeys[0]" :record="record"/>
        <name-view v-if="selectedKey === searchKeys[1]" :records="records"/>
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
import RegView from './RegView.vue';
import NameView from './NameView.vue';

// console.log(__filename);
import dbHandler from './../assets/js/db.js';

let printElement = document.getElementsByClassName('record-display')[0];

export default {
  data () {
    return {
      tab: null,
      selectedKey: null,
      record: null,
      records: [],
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
    Searchbar, SearchTypes, RegView, NameView
  },
  methods: {
    searchDB: async function(event) {
      let value = event.target.value;
      console.log(value);
      
      if(this.selectedKey) {
        let record = null,records = null;
        switch(this.selectedKey) {
          case this.searchKeys[0]:
            if( parseInt(value) ) {
              record = await dbHandler.searchByRegID(parseInt(value));
              console.log(record);
              this.record = record;
            } else if(value ) { 
              alert('Enter a valid registration number'); 
            }
            break;
          
          case this.searchKeys[1]:
            if(value) {
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
  background-color: rgb(34, 140, 187);
  border-color: rgb(34, 140, 187);
}

.bg-color {
  background-color: #f3ecec;
}

.font-sz {
  font-size: 1.4rem;
}

.bgColor {
  background-color: #2d7eab !important;
  border-color: #2d7eab !important;
}

.grid {
  padding: 0 10px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 4fr;
  /* grid-gap: 1em; */
  grid-template-areas: "item1 item2";
}

.main-grid {
  display: grid;
  grid-template-rows: 1fr 8fr;
  grid-template-columns: 1fr;
}

.overflow {
  overflow: auto;
}

.height {
  height: 80%;
}
</style>


