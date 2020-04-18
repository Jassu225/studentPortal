<template>
  <v-tab-item>
    <v-card flat height="30rem">
      <v-btn class="my-4 white--text" color="blue" @click.native="createDB">Create DB</v-btn>
      <p class="record-display font-sz black--text">Status</p>
    </v-card>
  </v-tab-item>
</template>

<script>
import dbHandler from '~/utils/db-handler';
export default {
  name: 'DBCreator',
  methods: {
    createDB() {
      dbHandler.createDB();
    },
  },
};
</script>
