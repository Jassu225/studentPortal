import Search from '~/pages/Search.vue';

const routes = {
  searchPage: {
    name: 'Search',
    path: '/',
    component: Search,
  },
  registrationPage: {
    name: 'Registration',
    path: '/register-student',
    component: null,
  },
};

export default routes;
