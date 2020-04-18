<template>
  <div class="search-bar">
    <div
      v-if="(selectedKey === searchKeys[0]) || (selectedKey === searchKeys[1])"
      class="sb-text-box"
    >
      <v-text-field
        v-model="searchValue"
        label="Search"
        class="mx-4 secondary--text"
        flat
        :type="selectedKey === searchKeys[0] ? 'number': 'text'"
        dark
        color="white"
        @input="emitTextChangedEvent"
      >
        <template #append>
          <span class="fas fa-times pointer" />
        </template>
      </v-text-field>
    </div>
    <div v-else-if="selectedKey === searchKeys[2]" class="item">
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
    </div>
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
    emitTextChangedEvent: debounce(function () {
      console.log('search text changed');
      this.$emit('searchTextChanged', this.searchValue);
    }, 300),
  },
};
</script>

<style lang="scss">
.search-bar {
  width: 100%;
  .sb-text-box {
    max-width: 95% !important;
    .v-input__slot {
      input {
        caret-color: currentColor;
      }
      &:after {
        border-color: #bdbdbd !important;
      }
    }
  }

  .item {
    margin-left: 2rem;
    max-width: 90% !important;
  }
}
</style>
