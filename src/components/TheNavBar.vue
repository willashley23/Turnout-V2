<template lang="pug">
  .brite-navbar
    .brand
      router-link(
        :to="{ name: 'HelloWorld' }"
      ) Turnout
    a.nav-item(
      v-if="!currentUser"
      @click="handleAuthEvent"
    ) Register
    a.nav-item.auth(
      @click="handleAuthEvent"
    ) {{ buttonText }}
    a.nav-item.create-event(
      v-if="currentUser"
    ) Create Event
    auth-modal
</template>

<script>
  import authModal from './modals/AuthModal.vue';

  export default {
    name: 'TheNavBar',
    computed: {
      currentUser() {
        return this.$store.state.session.currentUser;
      },

      buttonText() {
        return this.$store.state.session.currentUser ? "Log Out" : "Log In";
      },
    },
    components: { authModal },
    methods: {
      handleAuthEvent() {
        if (this.$store.state.session.currentUser) {
          this.$store.dispatch('logout');
          this.$router.replace("/");
        } else {
          this.$modal.show("auth-modal");
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

  .brite-navbar {
    height: 61px;
    display: flex;
    align-items: center;
    background-color: $white;

    .brand {
      font-size: 20px;
      color: $brite-orange;
      padding: 0 20px;
      flex: 1;
      text-align: left;

      a {
        text-decoration: none;
        color: inherit;
      }
    }

    .nav-item {
      color: $charcoal;
      padding: 22px 20px;
      cursor: pointer; 
      border-left: 1px solid $extra-light-grey;
      border-right: 1px solid $extra-light-grey;

      &:hover {
        background: $light-grey;
      }

      &.auth {
        border-left: none;
      }
    }
  }
</style>
