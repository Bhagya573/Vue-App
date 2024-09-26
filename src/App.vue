<template>
  <div id="app">
    <MainNavBar />
    <router-view />
  </div>
</template>
<script>
import MainNavBar from './components/MainNavBar.vue';
export default {
  name: 'App',
  components: {
    MainNavBar
  }
}
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.min.css"; /* Import Bootstrap CSS */
#app {
  text-align: center;
}
</style>
