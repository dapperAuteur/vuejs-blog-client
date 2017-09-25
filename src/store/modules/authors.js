import authors from '../../data/authors';

const state = {
  authors: []
}

const mutations = {
  'SET_AUTHORS' (state, authors) {
    state.authors = authors;
  }
};

const actions = {
  addAuthor: ({ commit }, order) => {
    commit();
  },
  initAuthors: ({ commit }) => {
    commit('SET_AUTHORS', authors);
    console.log(state.authors);
  }
};

const getters = {
  authors: state => {
    return state.authors;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
