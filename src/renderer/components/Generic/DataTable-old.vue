<template>
  <div class="custom-data-table">
    <slot name="header">
      <div class="header cdt-header">
        <div
          v-for="(header, index) in headers"
          :key="index"
          :style="{
            flex: header.width ? 'unset': '1 1 auto',
            flexBasis: header.width ? header.width : 'auto',
            textAlign: header.align ? header.align : 'center',
          }"
        >{{ header.text }}</div>
      </div>
    </slot>
    <div class="overflow contentContainer">
      <slot
        v-for="(item, index) in items.slice(start, end)"
        name="content"
        :item="item"
        :index="index"
      />
    </div>
    <div class="pagination flexContainer centerItemsVertically">
      <i
        style="flexBasis: 4rem"
        class="cursorPointer fas fa-chevron-right"
        :class="{disabled: currentPage === totalPages}"
        @click="goToNextPage"
      />
      <i
        style="flexBasis: 4rem"
        class="cursorPointer fas fa-chevron-left"
        :class="{disabled: currentPage === 1}"
        @click="goToPreviousPage"
      />
      <div class="info-text">
        {{ infoText }}
      </div>
    </div>
  </div>
</template>

<script>
// import materialIcon from './MaterialIcon.vue';
export default {
  name: 'DataTable',
  // components: {
  //   materialIcon,
  // },
  // props: ["headers", "items", "rowsPerPageNumber", "rowText"],
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    rowText: {
      type: String,
      required: true,
    },
    rowsPerPageNumber: {
      type: Number,
      required: false,
      default: 168,
    },
  },
  data() {
    return {
      start: 0,
      currentPage: 1,
      totalPages: Math.ceil(this.items.length / this.rowsPerPageNumber),
      maxPerPage:
        this.rowsPerPageNumber >= this.items.length
          ? this.items.length
          : this.rowsPerPageNumber,
    };
  },
  computed: {
    end: {
      get() {
        return this.start + this.maxPerPage;
      },
      set(newValue, oldValue) {},
    },
    infoText() {
      return `Showing ${this.rowText}
        ${this.items.length > 1 ? 's' : ''}} {{ start + 1 }} to {{ end }} of {{ items.length }}`;
    },
  },
  methods: {
    goToNextPage() {
      if (this.end < this.items.length) {
        this.start = this.end;
        this.currentPage++;
      }
    },
    goToPreviousPage() {
      if (this.start > 0) {
        this.start = this.start - this.rowsPerPageNumber;
        this.currentPage--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-data-table {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 1fr 3rem;
  width: 100%;
  height: 100%;
  .custom-data-table-header {
    display: flex;
    align-items: center;
  }

  .pagination {
    flex-direction: row-reverse;
  }
}
</style>
