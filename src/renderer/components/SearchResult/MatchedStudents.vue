<template>
  <div class="mathched-students-container full-width full-height">
    <!-- <v-data-table
      :headers="headers"
      :items="records"
      class="elevation-4 full-width full-height matched-students-table"
    >
      <template #headerCell="{ header }">
        <h3>{{ header.text }}</h3>
      </template>
      <template #item="{ item }">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.fatherName }}</td>
          <td>{{ item.fromClass }}</td>
          <td>{{ item.toClass }}</td>
          <td>{{ item.dateOfBirth }}</td>
          <td>
            <v-btn color="primary" dark @click="showDetails(item)">Details</v-btn>
          </td>
        </tr>
      </template>
    </v-data-table> -->
    <data-table :headers="headers" :items="records" :rows-per-page-number="5" row-text="song">
      <!-- <song
        slot="content"
        slot-scope="songItem"
        :song="songItem.item"
      /> -->
      <template #content="{ item }">
        <div class="student-record">
          <div>{{ item.name }}</div>
          <div>{{ item.fatherName }}</div>
          <div>{{ item.fromClass }}</div>
          <div>{{ item.toClass }}</div>
          <div>{{ item.dateOfBirth }}</div>
          <div>
            <v-btn color="primary" dark @click="showDetails(item)">Details</v-btn>
          </div>
        </div>
      </template>
    </data-table>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <student-detailed-info :record="record || {}" />
        <v-card-actions>
          <v-spacer />
          <v-btn color="green darken-1" text @click.native="hideDetails">Close</v-btn>
          <v-btn color="green darken-1" text @click.native="print(record)">Print</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import DataTable from '~/components/Generic/DataTable.vue';
import StudentDetailedInfo from '~/components/SearchResult/StudentDetailedInfo.vue';
import print from '~/mixins/print';
// import StudyCertificate from '~/components/StudyCerticate/StudyCertificate.vue';

export default {
  components: {
    StudentDetailedInfo,
    DataTable,
    // StudyCertificate,
  },
  mixins: [print],
  props: {
    records: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        { text: 'Name', align: 'center', sortable: false, value: 'Name' },
        { text: 'Father Name', align: 'center', sortable: false, value: 'Father Name' },
        { text: 'From Class', align: 'center', sortable: false, value: 'From Class' },
        { text: 'To Class', align: 'center', sortable: false, value: 'To Class' },
        { text: 'Date of Birth', align: 'center', sortable: false, value: 'Date of Birth' },
        { text: 'Action', align: 'center', sortable: false, value: 'Action' },
      ],
      entries: null,
      dialog: false,
      record: null,
    };
  },
  methods: {
    showDetails(record) {
      this.record = record;
      this.dialog = true;
    },
    hideDetails() {
      this.dialog = false;
      this.record = null;
    },
  },
};
</script>

<style lang="scss">
.mathched-students-container {
  .matched-students-table {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 60px;
    min-height: 0;
    .v-data-table__wrapper {
      overflow: auto;
      table {
        width: 100%;
        height: 100%;
        // tbody {
        //   min-height: 0px;
        //   overflow: auto;
        // }
        // thead, tbody tr {
        //   display:table;
        //   width:100%;
        //   table-layout:fixed;/* even columns width , fix width of table too*/
        // }
        // thead {
        //   width: calc( 100% - 1rem )/* scrollbar is average 1em/16px width, remove it from thead width */
        // }
      }
    }
  }
}
</style>
