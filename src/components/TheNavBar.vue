<template lang="pug">
  .brite-navbar
    .brand
      router-link(
        :to="{ name: 'HelloWorld' }"
      ) Turnout
    router-link.nav-item(
      v-if="currentUser"
      :to="{ name: 'UserProfile' }"
    ) 
      | Profile
      i.user-avatar-icon.ico-avatar
    a.nav-item(
      v-else
      @click="handleAuthEvent"
    ) Register
    a.nav-item(
      @click="handleAuthEvent"
    ) {{ buttonText }}
    
    a.nav-item.create-event(
      v-if="currentUser"
    ) Create Event
</template>

<script>
  import authModal from './modals/AuthModal.vue';

  export default {
    name: 'TheNavBar',
    components: { authModal },
    computed: {
      currentUser() {
        return this.$store.state.session.currentUser;
      },

      buttonText() {
        return this.$store.state.session.currentUser ? "Log Out" : "Log In";
      },
    },
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
    border-bottom: 1px solid $border-grey;

    .brand {
      font-size: 20px;
      color: $brite-orange;
      flex: 1;
      text-align: left;
  

      a {
        text-decoration: none;
        color: inherit;
        padding: 22px 20px;
        border-right: 1px solid $extra-light-grey;
      }
    }

    .nav-item {
      color: $charcoal;
      padding: 24px 20px;
      cursor: pointer; 
      border-left: 1px solid $extra-light-grey;
      border-right: 1px solid $extra-light-grey;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.5px;

      &:hover {
        background: $light-grey;
      }

      &:nth-of-type(1) {
        border-right: none;
      }

      &.create-event {
        color: $brite-blue;
        transition: all .3s cubic-bezier(.4,0,.3,1);
        border-left: none;

        &:hover {
          color: darken($color: $brite-blue, $amount: 50%);
          background: transparent;
        }
      }
    }
  }
</style>
