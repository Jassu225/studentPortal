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
    <div v-else-if="selectedKey === searchKeys[2]" class="sb-date-field">
      <date-menu
        v-model="date"
        :type="selectedDateType"
      />
      <v-select
        v-model="selectedDateType"
        :items="dateTypes"
        label="Select type"
        item-value="text"
        class="search-type"
        outlined
        hide-details
        dark
        @input="dateTypeChanged"
      />
    </div>
  </div>
</template>

<script>
import { debounce } from 'debounce';
import DateMenu from '~/components/Generic/DateMenu.vue';
import { dateTypes } from '~/data';

const dateFormatLength = {
  date: 10,
  month: 7,
};

export default {
  name: 'Searchbar',
  components: {
    DateMenu,
  },
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
      selectedDateType: 'month',
      date: new Date().toISOString().substr(0, 7),
    };
  },
  computed: {
    dateTypes() {
      return Object.keys(dateTypes).map(key => dateTypes[key]);
    },
  },
  methods: {
    emitTextChangedEvent: debounce(function () {
      // console.log('search text changed');
      this.$emit('searchTextChanged', this.searchValue);
    }, 300),
    emitDateChanged(newDate) {
      this.$emit('dateChanged', newDate);
    },
    getAdjustedDate(date, dateType) {
      const lengthToBeAdjusted = dateFormatLength[dateType] - date.length;
      let newDate = date;
      if (lengthToBeAdjusted > 0) {
        newDate += '-01';
      } else if (lengthToBeAdjusted < 0) {
        newDate = newDate.substring(0, newDate.length + lengthToBeAdjusted);
      }
      return newDate;
    },
    dateTypeChanged() {
      if (this.selectedDateType === dateTypes.range) {
        this.date = [this.getAdjustedDate(this.date, dateTypes.date)];
      } else {
        this.date = this.getAdjustedDate(Array.isArray(this.date) ? this.date[0] : this.date, this.selectedDateType);
      }
    },
  },
};
</script>

<style lang="scss">
.search-bar {
  width: 100%;
  padding: 0 1rem;
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
  .sb-date-field {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr;
    column-gap: 1rem;
  }
}
</style>
