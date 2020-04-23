<template>
  <v-flex xs12>
    <v-card>
      <v-card-title>
        <h4>{{ record ? record.name : 'Student Name' }}</h4>
      </v-card-title>
      <v-divider />
      <v-list dense>
        <v-list-item v-for="(data, index) in formattedInfo" :key="index">
          <v-list-item-content>{{ data.title }}:</v-list-item-content>
          <v-list-item-content class="align-end">{{ data.value }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex';
import classFormatter from '~/mixins/class-formatter';

export default {
  name: 'StudentDetailedInfo',
  mixins: [classFormatter],
  computed: {
    ...mapGetters({
      record: 'Search/specificRecord',
    }),
    formattedInfo() {
      const record = this.record || {};
      const na = '--';
      return [
        {
          title: 'Admission Number',
          value: record.admissionNumber || na,
          class: '',
        },
        {
          title: "Father's Name",
          value: record.fatherName || na,
          class: '',
        },
        {
          title: "Mother's Name",
          value: record.motherName || na,
          class: '',
        },
        {
          title: 'Gender',
          value: record.gender || na,
          class: '',
        },
        {
          title: 'Place of Birth',
          value: record.birthPlace || na,
          class: '',
        },
        {
          title: "Father's Occupation",
          value: record.fatherOccuation || na,
          class: '',
        },
        {
          title: 'Caste',
          value: record.caste || na,
          class: '',
        },
        {
          title: 'Sub-caste',
          value: record.subCaste || na,
          class: '',
        },
        {
          title: 'Date of Birth',
          value: record.dateOfBirth || na,
          class: '',
        },
        {
          title: 'Date of Joining',
          value: record.dateOfJoining || na,
          class: '',
        },
        {
          title: 'From Class',
          value: this.getClass(record.fromClass || na),
          class: '',
        },
        {
          title: 'To Class',
          value: this.getClass(record.toClass || na),
          class: '',
        },
        {
          title: 'T.C. Issue Date',
          value: record.tcIssueDate || na,
          class: '',
        },
        {
          title: 'Aadhar Number',
          value: record.aadharNumber || na,
          class: '',
        },
        {
          title: 'Remarks',
          value: record.remarks || na,
          class: '',
        },
      ];
    },
  },
};
</script>

<style>
</style>
