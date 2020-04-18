<template>
  <div>
    <v-flex
      v-if="(selectedKey === searchKeys[0]) || (selectedKey === searchKeys[1])"
      xs6
      class="item2"
    >
      <v-text-field
        v-model="searchValue"
        label="Search"
        class="mx-4 secondary--text"
        flat
        @input="emitTextChangedEvent"
      >
        <template #append>
          <span class="fas fa-times pointer" />
        </template>
      </v-text-field>
    </v-flex>
    <v-flex v-else-if="selectedKey === searchKeys[2]" xs12 md4 class="item">
      <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
        <template #activator="{ on }">
          <v-text-field
            v-model="date"
            label="Date of Birth"
            append-icon="event"
            readonly
            v-on="on"
          />
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer />
          <v-btn text color="primary" @click.native="date = null">Cancel</v-btn>
          <v-btn text color="primary" @click.native="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
  </div>
</template>

<script>
import { debounce } from 'debounce';

export default {
  name: 'Searchbar',
  props: {
    selectedKey: {
      type: String,
      required: true,
    },
    searchKeys: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchValue: '',
      date: null,
      modal: false,
    };
  },
  methods: {
    emitTextChangedEvent() {
      console.log('search text changed');
      this.$emit('searchTextChanged', this.searchValue);
    },
    searchTextChanged() {
      debounce(this.emitTextChangedEvent, 350);
    },
  },
};
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
