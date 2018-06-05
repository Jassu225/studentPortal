<template>
  <div>
    <h2><u>STUDY CERTIFICATE</u></h2>
    <p class="p-style">
      This is to certify that Mr. / Ms. <b>{{ candidate.name }}</b>, 
      S/O / D/O <b>{{ candidate.fatherName ? candidate.fatherName : (candidate.motherName ? candidate.motherName : "") }}</b> 
      has studied in our institution from <b>{{ candidate.fromClass ? getClass(candidate.fromClass) : "----" }}</b> standard 
      to <b>{{ candidate.toClass ? getClass(candidate.toClass) : "----" }}</b> standard during the academic years 
      from <b>{{ candidate.dateOfJoining }}</b> to <b>{{ candidate.TCIssueDate ? candidate.TCIssueDate : "--/--/----" }}</b>.
    </p>
    <hr />
  </div>
</template>

<script>
export default {
  props: ['candidate'],
  methods: {
    getClass: function(Class) {
      switch(parseInt(Class)) {
        case 1: return "First";
        case 2: return "Second";
        case 3: return "Third";
        case 4: return "Fourth";
        case 5: return "Fifth";
        case 6: return "Sixth";
        case 7: return "Seventh";
        case 8: return "Eighth";
        case 9: return "Ninth";
        case 10: return "Tenth";
        default: return Class;
      }
    }
  }
}
</script>

<style>
.p-style {
  padding: 2rem;
  text-align: justify;
  text-indent: 2rem;
}
</style>
