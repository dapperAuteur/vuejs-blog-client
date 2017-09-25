<template>
  <div class="blog">
    <h1>{{ msg }}</h1>
    <ul class="list-group">
      <app-post
        v-for="post in posts"
        :key="post.id"
        :post="post">
      </app-post>
    </ul>
  </div>
</template>

<script>
  import Post from './Post.vue';
  export default {
    name: 'blog',
    data () {
      return {
        msg: 'Welcome to the Vue.js Blog Component',
      }
    },
    components: {
      appPost: Post
    },
    computed: {
      posts() {
        // console.log(this.$store.getters.posts);
        console.log(this.$store.getters.posts);
        return this.$store.getters.posts
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
