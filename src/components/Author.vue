<template>
  <div class="author">
    <h3>author: {{ author.username }}</h3>
    <h3>email: {{ author.email }}</h3>
    <h3>author: {{ author.image }}</h3>
  </div>
</template>

<script>
export default {
  name: 'author',
  props: ['author'],
  data () {
    return {
      msg: 'Welcome to Author Component',
    }
  },
  // computed: {
  //   authorDetails() {
  //     console.log(this.$store.state.authors.authors);
  //     return this.$store.state.authors.authors;
  //   }
  // }
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
