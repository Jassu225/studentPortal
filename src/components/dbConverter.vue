<template>
  <v-btn @click="createDB" color="teal">Create</v-btn>
</template>

<script>
export default {
  methods: {
    createDB: function() {
      var lineReader = readline.createInterface({
        input: fs.createReadStream('src/assets/ADMISSION REGISTER.csv')
      });

      lineReader.on('line', function (line) {
        // console.log('Line from file:', line);
        let row = line.split(",");
        console.log(row.length);
      });
    }
  }
}
</script>

<style>

</style>
