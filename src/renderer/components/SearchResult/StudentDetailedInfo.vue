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
        <!-- <v-list-item>
          <v-list-item-content>Registration Number:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.registrationNumber : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Father's Name:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.fatherName : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Mother's Name:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.motherName : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Gender:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.gender : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Place of Birth:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.birthPlace : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Father's Occupation:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.fatherOccuation : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Caste:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.caste : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Sub-caste:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.subCaste : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Date of Birth:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.dateOfBirth : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Date of Joining:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.dateOfJoining : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>From Class:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.fromClass : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>To Class:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.toClass : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>T.C. Issue Date:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.TCIssueDate : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Aadhar Number:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.AadharNumber : '--' }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Remarks:</v-list-item-content>
          <v-list-item-content class="align-end">{{ record ? record.Remarks : '--' }}</v-list-item-content>
        </v-list-item>-->
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
import classFormatter from '~/mixins/class-formatter';

export default {
  name: 'StudentDetailedInfo',
  mixins: [classFormatter],
  props: {
    record: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedInfo() {
      const record = this.record || {};
      const na = '--';
      return [
        {
          title: 'Registration Number',
          value: record.registrationNumber || na,
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
          value: record.TCIssueDate || na,
          class: '',
        },
        {
          title: 'Aadhar Number',
          value: record.AadharNumber || na,
          class: '',
        },
        {
          title: 'Remarks',
          value: record.Remarks || na,
          class: '',
        },
      ];
    },
  },
};
</script>

<style>
</style>
