/* eslint-disable no-unused-expressions */

import Vue from 'vue';
import Vuetify, {
  VApp,
  VToolbar,
  VToolbarTitle,
  VTabs,
  VTabsSlider,
  VTab,
  VTabItem,
  VCard,
  VCardTitle,
  VDivider,
  VList,
  VListItem,
  VListItemContent,
  VBtn,
  VFooter,
  VSpacer,
  VFlex,
  VTextField,
  VDialog,
  VDatePicker,
  VSelect,
  VDataTable,
  VNavigationDrawer,
} from 'vuetify/lib';

import('roboto-fontface/css/roboto/roboto-fontface.css');
import('roboto-fontface/fonts/roboto/Roboto-Thin.woff2'); // 100
import('roboto-fontface/fonts/roboto/Roboto-Light.woff2'); // 300
import('roboto-fontface/fonts/roboto/Roboto-Regular.woff2'); // 400
import('roboto-fontface/fonts/roboto/Roboto-Medium.woff2'); // 500
import('roboto-fontface/fonts/roboto/Roboto-Bold.woff2'); // 700
import('roboto-fontface/fonts/roboto/Roboto-Black.woff2'); // 900

Vue.use(Vuetify, {
  components: {
    VApp,
    VToolbar,
    VToolbarTitle,
    VTabs,
    VTabsSlider,
    VTab,
    VTabItem,
    VCard,
    VCardTitle,
    VDivider,
    VList,
    VListItem,
    VListItemContent,
    VBtn,
    VFooter,
    VSpacer,
    VFlex,
    VTextField,
    VDialog,
    VDatePicker,
    VSelect,
    VDataTable,
    VNavigationDrawer,
  },
});

export default ctx => {
  const vuetify = new Vuetify();
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
};
