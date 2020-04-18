import { resolve } from 'path';

export default {
  methods: {
    print(candidate) {
      const filePath = resolve('../../assets/html/print.html');
      const newWindow = window.open(filePath);
      const doc = newWindow.document;
      doc.getElementsByClassName('reg-number')[0].textContent = candidate.registrationNumber;
      doc.getElementsByClassName('name')[0].textContent = candidate.name;
      doc.getElementsByClassName('parent-name')[0].textContent =
        (candidate.fatherName || '').toString() || (candidate.motherName || '').toString() || 'NA';
      doc.getElementsByClassName('from-class')[0].textContent = candidate.fromClass
        ? this.getClass(candidate.fromClass)
        : '----';
      doc.getElementsByClassName('to-class')[0].textContent = candidate.toClass
        ? this.getClass(candidate.toClass)
        : '----';
      doc.getElementsByClassName('joining-date')[0].textContent = candidate.dateOfJoining;
      doc.getElementsByClassName('tc-issue-date')[0].textContent = candidate.TCIssueDate
        ? candidate.TCIssueDate
        : '--/--/----';
      newWindow.focus();
      // newWindow.print();
      console.log(__filename);
    },
  },
};
