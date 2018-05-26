<template>
  <div>
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
        <td>{{ props.item.fatherName }}</td>
        <td>{{ props.item.fromClass }}</td>
        <td>{{ props.item.toClass }}</td>
        <td>{{ props.item.dateOfBirth }}</td>
        <td>
          <v-dialog v-model="dialog" persistent max-width="600">
            <v-btn slot="activator" color="primary" dark>Details</v-btn>
            <v-card>
              <reg-view :record="props.item"/>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn color="green darken-1" flat @click.native="dialog = false">Agree</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </td>
      </template>
      <!-- <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template> -->
    </v-data-table>
  </div>
</template>

<script>
import RegView from './RegView.vue';

export default {
  components: {
    RegView
  },
  props: ['records'],
  data: function() {
    return {
      headers: [
        { text: 'Name', align: 'center', sortable: false, value: 'Name' },
        { text: 'Father Name', align: 'center', sortable: false, value: 'Father Name' },
        { text: 'From Class', align: 'center', sortable: false, value: 'From Class' },
        { text: 'To Class', align: 'center', sortable: false, value: 'To Class' },
        { text: 'Date of Birth', align: 'center', sortable: false, value: 'Date of Birth' },
        { text: 'Action', align: 'center', sortable: false, value: 'Action' }
      ],
      dialog: false
    }
  },
  methods: {
    click: function() {
      console.log('clicked');
    }
  }
}
</script>
