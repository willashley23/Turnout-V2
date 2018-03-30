<template lang="pug">
  .brite-navbar
    .brand Turnout
    a.nav-item(
      v-if="!currentUser"
      @click="register"
    ) Register
    a.nav-item.auth(
      @click="handleAuthEvent"
    ) {{ buttonText }}
    a.nav-item.create-event(
      v-if="currentUser"
    ) Create Event
</template>

<script>
  export default {
    name: 'TheNavBar',
    computed: {
      currentUser() {
        return this.$store.state.session.currentUser;
      },

      buttonText() {
        return this.$store.state.session.currentUser ? "Log Out" : "Log In";
      },
    }
  }
</script>

<style lang="scss" scoped>
  $brite-orange: #f6682F;
  $brite-grey: #f8f8f8;
  $brite-medium-grey: #EFF2F5;
  $brite-extra-light-gray: #EFF2F5;
  $brite-white: #ffffff;
  $brite-charcoal: #45494E;

  .brite-navbar {
    height: 61px;
    display: flex;
    align-items: center;
    background-color: $brite-white;

    .brand {
      font-size: 20px;
      color: $brite-orange;
      padding: 0 20px;
      flex: 1;
      text-align: left;
    }

    .nav-item {
      color: $brite-charcoal;
      padding: 22px 20px;
      cursor: pointer; 
      border-left: 1px solid $brite-extra-light-gray;
      border-right: 1px solid $brite-extra-light-gray;

      &:hover {
        background: $brite-medium-grey;
      }

      &.auth {
        border-left: none;
      }
    }

  }
</style>
