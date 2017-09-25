<template>
  <div class="authors">
    <h1>{{ msg }}</h1>
    <h2>Authors</h2>
    <ul>
      <app-author
        v-for="author in authors"
        :key="author.id"
        :author="author">
      </app-author>
    </ul>
  </div>
</template>

<script>
  import Author from './Author.vue';
  export default {
    name: 'authors',
    data () {
      return {
        msg: 'Welcome to Authors Component'
      }
    },
    components: {
      appAuthor: Author
    },
    computed:{
      authors() {
        return this.$store.getters.authors;
        console.log(this.$store.getters.author);
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
