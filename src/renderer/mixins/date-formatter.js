import { format } from 'date-fns';

export default {
  methods: {
    formatDate(date, dateFormat) {
      const newFormat = dateFormat || 'dd MMM Y';
      return date && format(new Date(date), newFormat);
    },
  },
};
