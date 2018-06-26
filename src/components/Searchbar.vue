<template>
  <div>
    <v-flex
      xs6 class="item2"
      v-if="(selectedKey === searchKeys[0]) || (selectedKey === searchKeys[1])"
    >
      <v-text-field
        append-icon="search"
        label="Search"
        class="mx-4 secondary--text"
        flat
        v-model="searchValue"
        @keyup="searchDB($event)"
      ></v-text-field>
    </v-flex>
    <v-flex
      xs12 md4 class="item"
      v-if="selectedKey === searchKeys[2]"
    >
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="Date of Birth"
          append-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="date = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
  </div>
</template>

<script>
export default {
  props: ['searchDB', 'resetSearchValue', 'selectedKey', 'searchKeys'],
  data: function() {
    return {
      searchValue: "",
      date: null,
      modal: false
    }
  },
  watch: {
    resetSearchValue: function (newVal, oldVal) {
      this.searchValue = "";
    }
  }
}
</script>

<style>
.item2 {
  max-width: 95% !important;
}

.item {
  margin-left: 2rem;
  max-width: 90% !important;
}
</style>
