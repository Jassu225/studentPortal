<template>
  <div class="study-certificate">
    <h2 class="certi-header">STUDY CERTIFICATE</h2>
    <p class="certi-content">
      This is to certify that Mr. / Ms.
      <b>{{ candidate.name }}</b>,
      S/O / D/O
      <b>{{ candidate.fatherName ? candidate.fatherName : (candidate.motherName ? candidate.motherName : "") }}</b>
      has studied in our institution from
      <b>{{ candidate.fromClass ? getClass(candidate.fromClass) : "----" }}</b> standard
      to
      <b>{{ candidate.toClass ? getClass(candidate.toClass) : "----" }}</b> standard during the academic years
      from
      <b>{{ candidate.dateOfJoining }}</b> to
      <b>{{ candidate.TCIssueDate ? candidate.TCIssueDate : "--/--/----" }}</b>.
    </p>
    <hr />
  </div>
</template>

<script>
import classFormatter from '~/mixins/class-formatter';
export default {
  mixins: [classFormatter],
  props: {
    candidate: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.study-certificate {
  .certi-header {
    text-decoration: underline;
  }
  .certi-content {
    padding: 2rem;
    text-align: justify;
    text-indent: 2rem;
  }
}
</style>
