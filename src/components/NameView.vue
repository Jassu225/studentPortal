<template>
  <v-data-table
    :headers="headers"
    :items="records"
    class="elevation-4"
  >
    <template slot="headerCell" slot-scope="props">
      <!-- <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
        
      </v-tooltip> -->
      <h3>
        {{ props.header.text }}
      </h3>
    </template>
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.fatherName }}</td>
      <td class="text-xs-right">{{ props.item.fromClass }}</td>
      <td class="text-xs-right">{{ props.item.toClass }}</td>
      <td class="text-xs-right">{{ props.item.dateOfBirth }}</td>
      <!-- <td class="text-xs-right">{{ props.item.iron }}</td> -->
    </template>
    <!-- <template slot="pageText" slot-scope="{ pageStart, pageStop }">
      From {{ pageStart }} to {{ pageStop }}
    </template> -->
  </v-data-table>
</template>

<script>
export default {
  props: ['records'],
  data: function() {
    return {
      headers: [
          { text: 'Name', align: 'left', sortable: false, value: 'Name' },
          { text: 'Father Name', sortable: false, value: 'Father Name' },
          { text: 'From Class', sortable: false, value: 'From Class' },
          { text: 'To Class', sortable: false, value: 'To Class' },
          { text: 'Date of Birth', sortable: false, value: 'Date of Birth' }
        ],
    }
  }
}
</script>
