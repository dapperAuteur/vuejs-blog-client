<template>
  <div class="post">
    <h3>id: {{ post.id }}</h3>
    <h3>title: {{ post.title }}</h3>
    <h3>author: {{ post.author }}</h3>
    <h3>category: {{ post.category }}</h3>
    <h3>sub category: {{ post.sub_category }}</h3>
    <h3>likes: {{ post.likes }}</h3>
    <h3>image: {{ post.image }}</h3>
    <h3>body: {{ post.body }}</h3>
  </div>
</template>

<script>
  import Post from './Post.vue';
  export default {
    name: 'post',
    props: ['post'],
    data () {
      return {
        msg: 'Welcome to the Vue.js Post Component',
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
