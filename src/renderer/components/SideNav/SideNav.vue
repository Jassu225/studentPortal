<template>
  <v-navigation-drawer
    v-model="active"
    color="#4e4e4e"
    :expand-on-hover="miniVariant"
    :mini-variant="miniVariant"
    permanent
    :app="miniVariant"
    class="navigation-drawer"
  >
    <div class="nav-content-container">
      <nuxt-link
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.route"
        tag="div"
        #default="{ href, route, navigate, isActive, isExactActive }"
      >
        <div
          class="nav-item full-width"
          :class="`${isActive ? ' router-link-active' : ''}${isExactActive ? ' router-link-exact-active' : ''}`"
          @click="navigate"
        >
          <div :class="`fas fa-${item.icon} icon`" />
          <div class="nav-item-title">{{ item.title }}</div>
        </div>
      </nuxt-link>
    </div>
  </v-navigation-drawer>
</template>

<script>
import routes from '~/data/routes';

export default {
  name: 'SideNav',
  data() {
    return {
      active: true,
      miniVariant: false,
    };
  },
  computed: {
    menuItems() {
      return [
        {
          title: 'Home',
          icon: 'home',
          route: { name: routes.searchPage.name },
        },
        {
          title: 'Register a student',
          icon: 'file-medical',
          route: { name: routes.registrationPage.name },
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-drawer {
  // box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.2);
  // position: relative;
  // z-index: 1;
  background-color: #4e4e4e;
  .nav-content-container {
    width: 100%;
    // padding: 8px 0;
    .nav-item {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #ccddcc;
      display: flex;
      padding: 8px 12px;
      align-items: center;
      cursor: pointer;
      .icon {
        width: 20px;
        text-align: center;
      }
      .nav-item-title {
        width: calc(100% - 20px);
        min-width: 0;
        text-align: left;
        padding-left: 12px;
      }
      &.router-link-active {
        color: #32d8ff;
      }
      &:hover {
        background-color: #828282;
      }
    }
  }
}
</style>
