<script>

const getCellStyle = header => ({
  width: header.width ? header.width : 'auto',
  textAlign: header.align ? header.align : 'center',
  flexGrow: 0,
  flexShrink: 0,
});

const createHeader = function () {
  const createElement = this.$createElement;
  const headerCellCreator = this.$scopedSlots.headerCell
    ? this.$scopedSlots.headerCell
    : ({ header }) => {
      return createElement('div', {
        style: getCellStyle(header),
        class: 'cdt-header-cell',
      }, header.text);
    };
  const headerCells = this.headers.map(header => headerCellCreator({ header }));
  return createElement('div', {
    class: 'cdt-header',
  }, headerCells);
};

const createTableContent = function () {
  // console.log(this.$scopedSlots);
  const createElement = this.$createElement;
  const itemCreator = this.$scopedSlots.item
    ? this.$scopedSlots.item
    : ({ item }) => {
      // console.log(item);
      return createElement('div', { class: 'cdt-item' },
        this.headers.map(header => {
          // console.log(header);
          return createElement('div', {
            class: 'cdt-item-cell',
            style: getCellStyle(header),
          }, item[header.value] || this.naText);
        }));
    };
  const items = this.slicedItems.map(item => itemCreator({ item }));
  return createElement('div', {
    class: 'cdt-content-container',
  }, items);
};

const createFooter = function () {
  const createElement = this.$createElement;
  const nextBtn = createElement('div', {
    class: 'cdt-pagination-icon',
    on: {
      click: this.goToNextPage,
    },
  },
  [createElement('i', {
    class: [
      'fas fa-chevron-right',
      { disabled: this.currentPage === this.totalPages },
    ],

  })]);
  const prevtBtn = createElement('div', {
    class: 'cdt-pagination-icon',
    on: {
      click: this.goToPreviousPage,
    },
  },
  [createElement('i', {
    class: [
      'fas fa-chevron-left',
      { disabled: this.currentPage === 1 },
    ],

  })]);
  const infoText = createElement('div', {
    class: 'info-text',
  }, this.infoText);
  return createElement('div', {
    class: 'cdt-pagination',
  }, [
    nextBtn, prevtBtn, infoText,
  ]);
};

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
    naText: {
      type: String,
      default: '--',
    },
  },
  data() {
    return {
      start: 0,
      currentPage: 1,
    };
  },
  computed: {
    end() {
      return Math.min(this.start + this.maxPerPage, this.items.length);
    },
    infoText() {
      return `Showing ${this.rowText}${this.items.length > 1 ? 's' : ''} ` +
        `${this.start + 1} to ${this.end} of ${this.items.length}`;
    },
    slicedItems() {
      return this.items.slice(this.start, this.end);
    },
    maxPerPage() {
      return this.rowsPerPageNumber >= this.items.length
        ? this.items.length
        : this.rowsPerPageNumber;
    },
    totalPages() {
      return Math.ceil(this.items.length / this.rowsPerPageNumber);
    },
  },
  methods: {
    goToNextPage() {
      console.log('next btn click');
      if (this.end < this.items.length) {
        this.start = this.end;
        this.currentPage++;
      }
    },
    goToPreviousPage() {
      console.log('prev btn click');
      if (this.start > 0) {
        this.start = this.start - this.rowsPerPageNumber;
        this.currentPage--;
      }
    },
  },
  render(createElement) {
    return createElement(
      'div',
      { staticClass: 'custom-data-table' },
      [
        createHeader.call(this),
        createTableContent.call(this),
        createFooter.call(this),
      ],
    );
  },
};
</script>

<style lang="scss">
.custom-data-table {
  $padding: 10px;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 1fr 3rem;
  min-height: 0;
  width: 100%;
  height: 100%;
  .cdt-header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: $padding;
    box-shadow: 0px 1px 7px 0px rgba(0,0,0,0.3);
  }
  .cdt-content-container {
    width: 100%;
    overflow: auto;
    padding: $padding;
    .cdt-item {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
    }
  }
  .cdt-pagination {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: $padding;
    box-shadow: 0px -1px 7px 0px rgba(0,0,0,0.3);
    .cdt-pagination-icon {
      width: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>
