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
          <v-dialog v-model="props.item.dialog" persistent max-width="600">
            <v-btn slot="activator" color="primary" dark >Details</v-btn>
            <v-card>
              <reg-view :record="props.item"/>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click.native="props.item.dialog = false">Close</v-btn>
                <v-btn color="green darken-1" flat @click.native="print(props.item)">Print</v-btn>
                <!-- <v-dialog v-model="props.item.printDialog" persistent max-width="600">
                  <v-btn slot="activator" flat color="green darken-1" @click.native="props.item.dialog = false">Print</v-btn>
                  <v-card>
                    <study-certificate :candidate="props.item"/>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" flat @click.native.stop="props.item.printDialog = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog> -->
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
import StudyCertificate from './StudyCertificate.vue';
import certificate from '../assets/js/studyCertificate.js';

export default {
  components: {
    RegView, StudyCertificate
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
      entries: null
    }
  },
  methods: {
    print: function(candidate) {
      let newWindow = window.open('');
      newWindow.document.open();
      newWindow.document.write(certificate.content);
      newWindow.document.close();
      let doc = newWindow.document;
      doc.getElementsByClassName('reg-number')[0].textContent = candidate.registrationNumber;
      doc.getElementsByClassName('name')[0].textContent = candidate.name;
      doc.getElementsByClassName('parent-name')[0].textContent = candidate.fatherName ? candidate.fatherName : (candidate.motherName ? candidate.motherName : "");
      doc.getElementsByClassName('from-class')[0].textContent = candidate.fromClass ? this.getClass(candidate.fromClass) : "----";
      doc.getElementsByClassName('to-class')[0].textContent = candidate.toClass ? this.getClass(candidate.toClass) : "----";
      doc.getElementsByClassName('joining-date')[0].textContent = candidate.dateOfJoining;
      doc.getElementsByClassName('tc-issue-date')[0].textContent = candidate.TCIssueDate ? candidate.TCIssueDate : "--/--/----";
      newWindow.focus();
      // newWindow.print();
      console.log(__filename);
    },
    closePrintView: function(item) {
      console.log(item);
    },
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
