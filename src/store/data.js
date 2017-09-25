import Vue from 'vue';

export const loadData = ({commit}) => {
  Vue.axios.get('authors')
    .then(response => response.data.data)
    .then(data => {
      if (data) {
        console.log(data);
        const authors = data;
        commit('SET_AUTHORS', authors);
      }
    });

  Vue.axios.get('posts')
    .then(response => response.data.data)
    .then(data => {
      if (data) {
        console.log(data);
        const posts = data;
        commit('SET_POSTS', posts);
      }
    });

  // Vue.axios.get('users')
  //   .then(response => response.data.data)
  //   .then(data => {
  //     if (data) {
  //       const users = data;
  //       commit('SET_USERS', users);
          // console.log('users loaded');
  //     }
  //   });
  console.log('all data loaded');
}
