import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

/* eslint-disable */
const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations,
});

export default store;
