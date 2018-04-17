<template lang="pug">
  div#app
    TheNavBar
    router-view
    AuthModal
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'
import AuthModal from './components/modals/AuthModal.vue'

export default {
  name: 'Turnout',
  components: { TheNavBar, AuthModal },
}
</script>

<style lang="scss">
  @import './static/scss/reset.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $charade;
  }

  body {
    background-color: $medium-gray;
    color: $charade;
  }
</style>
