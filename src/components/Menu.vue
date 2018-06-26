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
    <v-tabs-items v-model="tab" class="full-width">
      <!-- Search DB Page -->
      <v-tab-item class="sub-grid full-height">
        <v-card class="elevation-8 bg-color grid">
          <search-types :searchKeys="searchKeys" :keyChanged="keyChanged"/>
          <searchbar 
            :searchDB="searchDB"
            :resetSearchValue="resetSearchValue"
            :selectedKey="selectedKey"
            :searchKeys="searchKeys"
          />
        </v-card>
        <v-card class="overflow">
          <reg-view v-if="selectedKey === searchKeys[0]" :record="record"/>
          <name-view v-if="selectedKey === searchKeys[1]" :records="records" :print="print"/>
          <v-footer v-if="selectedKey === searchKeys[0]" height="auto">
            <v-spacer><v-btn class="blue-color" @click="print(record)">Print</v-btn></v-spacer>
          </v-footer>
        </v-card>
      </v-tab-item>
      <!-- Create BD Page -->
      <v-tab-item>
        <v-card flat height="30rem">
          <v-btn class="my-4 white--text" color="blue" @click="createDB">Create DB</v-btn>
          <p class="record-display font-sz" :class="color[selected_color_index]">Status</p>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <v-footer class="bgColor ">
      Copyrights</v-footer>
  </div>
</template>

<script>
import Searchbar from './Searchbar.vue';
import SearchTypes from './SearchTypes.vue';
import RegView from './RegView.vue';
import NameView from './NameView.vue';
import certificate from '../assets/js/studyCertificate.js';

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
      resetSearchValue: false,
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
      this.resetSearchValue = !this.resetSearchValue;

      switch(this.selectedKey) {
        case this.searchKeys[0]:
          this.record = null;
          break;
        case this.searchKeys[1]:
          this.records = [];
          break;
      }
    },
    createDB: function() {
      dbHandler.createDB(this.print);
    },
    print: function(candidate) {
      let newWindow = window.open('');
      newWindow.document.open();
      newWindow.document.write(certificate.content);
      newWindow.document.close();
      let doc = newWindow.document;
      doc.getElementsByClassName('reg-number')[0].textContent = candidate.registrationNumber;
      doc.getElementsByClassName('name')[0].textContent = candidate.name;
      doc.getElementsByClassName('parent-name')[0].textContent = candidate.fatherName ? candidate.fatherName : (candidate.motherName ? candidate.motherName : "");
      doc.getElementsByClassName('from-class')[0].textContent = candidate.fromClass ? this.getClass(candidate.fromClass) : "----";
      doc.getElementsByClassName('to-class')[0].textContent = candidate.toClass ? this.getClass(candidate.toClass) : "----";
      doc.getElementsByClassName('joining-date')[0].textContent = candidate.dateOfJoining;
      doc.getElementsByClassName('tc-issue-date')[0].textContent = candidate.TCIssueDate ? candidate.TCIssueDate : "--/--/----";
      newWindow.focus();
      // newWindow.print();
      console.log(__filename);
    },
    getClass: function(Class) {
      switch(parseInt(Class)) {
        case 1: return "First";
        case 2: return "Second";
        case 3: return "Third";
        case 4: return "Fourth";
        case 5: return "Fifth";
        case 6: return "Sixth";
        case 7: return "Seventh";
        case 8: return "Eighth";
        case 9: return "Ninth";
        case 10: return "Tenth";
        default: return Class;
      }
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
  grid-template-rows: 2fr auto 1fr;
  grid-template-columns: 1fr;
}

.overflow {
  overflow-y: auto;
}

.sub-grid {
  display: grid;
  grid-template-rows: 1fr 9fr;
  grid-template-columns: 1fr;
}

.blue-color {
  background-color: #23c1c1 !important;
  border-color: #23c1c1 !important;
}
</style>


