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
        hide-details
        v-on="on"
      />
    </template>
    <v-date-picker v-model="selectedDate" :type="type" range>
      <v-spacer />
      <v-btn text color="primary" @click="hideDatePicker">Cancel</v-btn>
      <v-btn text color="primary" @click="saveDate">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'DateMenu',
  props: {
    type: {
      type: String,
      default: 'date',
    },
  },
  data() {
    return {
      showDatePicker: false,
      selectedDate: [],
    };
  },
  computed: {
    formattedFieldValue() {
      return this.selectedDate.join(' ~ ');
    },
  },
  methods: {
    ...mapActions({
      setSearchDate: 'Search/setSearchDate',
    }),
    saveDate() {
      this.selectedDate = this.selectedDate.sort();
      this.$refs.menu.save(this.selectedDate);
      this.setSearchDate(this.selectedDate);
    },
    hideDatePicker() {
      this.showDatePicker = false;
    },
  },
};
</script>
