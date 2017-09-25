import Vue from 'vue';
import Vuex from 'vuex';

import authors from './modules/authors';
import posts from './modules/posts';
// import player from './modules/player';

// import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  // actions,
  modules: {
    authors,
    posts
  }
});
