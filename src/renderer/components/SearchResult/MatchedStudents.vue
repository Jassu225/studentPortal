<template>
  <div class="mathched-students-container full-width full-height">
    <data-table :headers="headers" :items="records" :rows-per-page-number="25" row-text="record">
      <template #item="{ item }">
        <div class="student-record">
          <div class="sr-name" :style="cellsStyles[0]">{{ item.name || naText }}</div>
          <div class="sr-dad-name" :style="cellsStyles[1]">{{ item.fatherName || naText }}</div>
          <div :style="cellsStyles[2]">{{ item.fromClass || naText }}</div>
          <div :style="cellsStyles[3]">{{ item.toClass || naText }}</div>
          <div :style="cellsStyles[4]">{{ item.dateOfBirth || naText }}</div>
          <div :style="cellsStyles[5]">
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
      dialog: false,
      record: null,
    };
  },
  computed: {
    headers() {
      return [
        { text: 'Name', align: 'left', sortable: false, value: 'name', width: '30%' },
        { text: 'Father Name', align: 'left', sortable: false, value: 'fatherName', width: '20%' },
        { text: 'From Class', align: 'center', sortable: false, value: 'fromClass', width: '10%' },
        { text: 'To Class', align: 'center', sortable: false, value: 'toClass', width: '10%' },
        { text: 'Date of Birth', align: 'center', sortable: false, value: 'dateOfBirth', width: '15%' },
        { text: 'Action', align: 'center', sortable: false, value: 'action', width: '15%' },
      ];
    },
    cellsStyles() {
      return this.headers.map(header => ({
        width: header.width ? header.width : 'auto',
        textAlign: header.align ? header.align : 'center',
        flexGrow: 0,
        flexShrink: 0,
      }));
    },
    naText() {
      return '--';
    },
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
  .student-record {
    width: 100%;
    height: 50px;
    display: flex;
    min-width: 0;
    align-items: center;
    .sr-name, .sr-dad-name {
      min-width: 0;
      padding-right: 10px;
    }
  }
}
</style>
