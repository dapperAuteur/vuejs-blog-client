import posts from '../../data/posts';

const state = {
  posts: []
}

const mutations = {
  // 'ADD_POST'
  'SET_POSTS' (state, posts) {
    state.posts = posts;
  }
};

const actions = {
  addPost: ({ commit }, order) => {
    commit();
  },
  initPosts: ({ commit }) => {
    commit('SET_POSTS', posts);
    console.log(state.posts);
  },
  setFeaturedPost: ({ commit }, order) => {
    commit();
    console.log("this is the featured post");
    console.log(order);
  }
};

const getters = {
  posts: state => {
    return state.posts;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
