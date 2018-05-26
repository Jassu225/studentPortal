<template>
  <v-flex
  xs12
  sm6
  sm12
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
          <v-list-tile-content>Father's Name:</v-list-tile-content>
          <v-list-tile-content class="align-end">{{ record ? record.fatherName : '--' }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>Mother's Name:</v-list-tile-content>
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
</template>

<script>
export default {
  props: ['record'],
  data: function() {
    return {

    };
  }
}
</script>

<style>

</style>
