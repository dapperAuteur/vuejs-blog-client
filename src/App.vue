<template>
  <div id="app">
    <app-header></app-header>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header';
  export default {
    name: 'app',
    components: {
      appHeader: Header
    },
    created() {
      // this.$store.dispatch('initWords');
      // this.$store.dispatch('randomWord');
      // this.$store.dispatch('setGameStatus');
    }
  }
</script>

<style>
  body {
    padding: 30px;
  }
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }

  *{ box-sizing: border-box; }

  /*div {
  padding: 30px;
  font-size: 50px;
  text-align: center;
  border: 1px solid #333;
  font-family: "Helvetica";
  }*/

  /*.t1 {
  background-color: lightgreen;
  }

  .t2 {
  background-color: lightblue;
  }

  .t3 {
  background-color: firebrick;
  }*/

  /*.sm-1 {
    width: 100%;
  }

  .sm-2 {
    width: 50%;
  }*/



  /* RESPONSIVE STYLES */
  @media screen and (min-width: 640) {
    .md-1 {
      width: 100%;
    }

    .md-2 {
      width: 50%;
    }

    .md-3 {
      width: 33.333%;
    }
  }

  @media screen and (min-width: 968px) {
    .lg-1 {
      width: 100%;
    }

    .lg-3 {
      width: 33.333%;
    }

    .lg-4 {
      width: 25%;
    }
  }
</style>

<!-- /*<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>*/ -->
