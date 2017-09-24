<template>
  <nav class="nav is-primary">
    <div class="nav-left">
        <a class="nav-item">
          <router-link to="/"
            class="navbar-brand">
            Elixir Vue.JS Blog
          </router-link>
            <!-- <img src="../../../assets/buefy.png" alt="Buefy"> -->
        </a>
        <h1>Total Authors: {{  }}</h1>
        <h1>Total Posts: {{  }}</h1>
    </div>

    <div class="nav-center">
      <ul class="nav navbar-nav">
        <router-link to="/"
          class="nav-item"
          activeClass="active"
          tag="li"><a>Home</a>
        </router-link>
        <router-link to="/authors"
          class="nav-item"
          activeClass="active"
          tag="li"><a>Author</a>
        </router-link>
        <router-link to="/Blog"
          class="nav-item"
          activeClass="active"
          tag="li"><a>Blog</a>
        </router-link>
      </ul>
    </div>

    <div class="nav-right" style="overflow: visible">
      <button
        class="btn btn-success"
        @click="saveData"
        >
        Save Data
      </button>
      <button
        class="btn btn-success"
        @click="loadData"
        >
        Load Data
      </button>
    </div>
  </nav>
</template>

<script>
  // import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        authenticated: false,
        isDropdownOpen: false,
        navigation: 'home',
      }
    },
    computed: {
      // gameStatus() {
      //   return this.$store.state.words.gameStatus;
      // }
    },
    methods: {
      ...mapActions({
          randomWord: 'randomWord',
          fetchData: 'loadData',
      }),
      isLoggedIn() {
        return this.authenticated = !this.authenticated;
      },
      saveData() {
        const data = {
          // bulls: this.$store.getters.bulls,
          // bulls: this.$store.state.words.bulls,
        };
        console.log(data);
        this.$http.put('data.json', data);
      },
      loadData() {
        console.log(this.$store.state.words)
        this.fetchData();
        console.log(this.$store.state.words);
        this.$store.dispatch('setGameStatus');
      }
    }
  }
</script>
