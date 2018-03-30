<template lang="pug">
    div(id="app")
      TheNavBar
      router-view
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'

export default {
  name: 'turnout',
  components: { TheNavBar },
}
</script>

<style lang="scss">
  @import './static/scss/reset.scss';
  $brite-grey: #f8f8f8;

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    background-color: $brite-grey;
  }
</style>
