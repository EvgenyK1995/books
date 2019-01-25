<template>
  <div id="app">
    <h1>Онлайн библиотека</h1>
    <user-btn class="user-btn-panel"></user-btn>
    <hr />
    <router-view />
  </div>
</template>

<script>
import books from './components/books';
import UserBtn from './components/userBtn';

export default {
  name: 'App',
  components: {
    UserBtn,
    books,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  max-width: 1000px;
}

h1, h2 {
  display: inline-block;
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
