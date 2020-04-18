const classes = [null, 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];

export default {
  methods: {
    getClass(classNumber) {
      return classes[classNumber] || classNumber;
    },
  },
};
