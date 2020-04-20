<template>
  <v-menu
    ref="menu"
    v-model="showDatePicker"
    :close-on-content-click="false"
    :return-value.sync="selectedDate"
    transition="scale-transition"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :value="formattedFieldValue"
        label="Picker in menu"
        prepend-icon="event"
        readonly
        dark
        :type="computedFieldType"
        hide-details
        v-on="on"
      />
    </template>
    <v-date-picker v-model="selectedDate" :type="computedType" :range="isRange">
      <v-spacer />
      <v-btn text color="primary" @click="hideDatePicker">Cancel</v-btn>
      <v-btn text color="primary" @click="saveDate">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import { dateTypes } from '~/data';

export default {
  name: 'DateMenu',
  model: {
    prop: 'date',
    event: 'updateDate',
  },
  props: {
    date: {
      type: [String, Array],
      required: true,
    },
    type: {
      type: String,
      default: 'date',
    },
  },
  data() {
    return {
      showDatePicker: false,
      selectedDate: this.date,
    };
  },
  computed: {
    isRange() {
      return this.type === dateTypes.range;
    },
    computedType() {
      return this.isRange ? dateTypes.date : this.type;
    },
    computedFieldType() {
      return this.type === dateTypes.month ? this.type : 'text';
    },
    formattedFieldValue() {
      return this.isRange ? this.date.join(' ~ ') : this.date;
    },
  },
  watch: {
    type() {
      this.selectedDate = this.date;
    },
  },
  methods: {
    saveDate() {
      if (this.isRange) {
        this.selectedDate = this.selectedDate.sort();
      }
      this.$refs.menu.save(this.selectedDate);
      this.$emit('updateDate', this.selectedDate);
    },
    hideDatePicker() {
      this.showDatePicker = false;
    },
  },
};
</script>
