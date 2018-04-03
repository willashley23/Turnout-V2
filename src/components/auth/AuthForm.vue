<template lang="pug">
  form
    .logo-container
      span.brite-orange-logo
        i(class="eds-vector-image eds-brand--small eds-vector-image--white eds-vector-image-size--reset" data-spec="icon" aria-hidden="true")
          svg(id="eds-icon--logo-e-brand_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24")
            path(d="M15.6 19.5c0-.15-.15-.15-.3-.15H5.25c-.15 0-.3-.15-.3-.3v-4.5c0-.15.15-.3.3-.3h8.7c.15 0 .3-.15.3-.3V9.9c0-.15-.15-.3-.3-.3h-8.7c-.15 0-.3-.15-.3-.3V4.8c0-.15.15-.3.3-.3H15c.15 0 .3-.15.3-.3V.3c0-.15-.15-.3-.3-.3H4.05C1.8 0 0 1.8 0 4.05v19.8s.15.15.3.15h11.55c4.35 0 4.05-3.6 3.75-4.5" id="eds-icon--logo-e-brand_base")
    .input-group(v-bind:class="{ 'input-group--error': $v.username.$error }")
      label(for="username") Username
      input.brite-input(
        v-model.trim="username" 
        type="text"
        @input="$v.username.$touch()" 
      )
      .input-group-errors
        span.brite-error(v-if="!$v.username.required && $v.username.$dirty") Please enter your username
        span.brite-error(v-if="!$v.username.minLength") Username must be at least 4 chars long

    .input-group
      label(for="password") Password
      input.brite-input(
        v-model.trim="password"
        type="password"
        @input="$v.password.$touch()"
      )
      .input-group-errors
        span.brite-error(v-if="!$v.password.required && $v.password.$dirty") Please enter your password
        span.brite-error(v-if="!$v.password.minLength") Please enter a password of at least 6 characters
    button.brite-button.blue(
      :disabled="$v.$invalid"
      @click="register"
    ) Register
    button.brite-button.blue(
      :disabled="$v.$invalid"
      @click="handleAuthEvent"
    ) {{ buttonText }}
    span.brite-error(v-if="error") {{ error }}
</template>

<script>
  import { required, minLength } from 'vuelidate/lib/validators'

  export default {
    name: 'AuthForm',
    data () {
      return {
        username: '',
        password: '',
        error: false,
      }
    },

    computed: {
      currentUser() {
        return this.$store.state.session.currentUser;
      },

      buttonText() {
        return this.$store.state.session.currentUser ? "Log Out" : "Log In";
      },
    },

    validations: {
      username: {
        required,
        minLength: minLength(4),
      },
      password: {
        required,
        minLength: minLength(4),
      },
    },

    methods: {
      register() {
        this.$store.dispatch('register', { username: this.username, password: this.password })
          .then(res => this._onAuthSuccess(res))
          .catch(error => this._onAuthFailed(error));
      },

      handleAuthEvent() {
        if (this.currentUser) {
          this._logout();
        } else {
         this._login();
        }
      },

      _login() {
        this.$store.dispatch('login', { username: this.username, password: this.password })
          .then(res => this._onAuthSuccess(res))
          .catch(error => this._onAuthFailed(error));
      },

      _logout() {
        this.$store.dispatch('logout');
        this.$router.replace("/");
      },

      loginGuestUser() {

      },

      _onAuthSuccess(res) {
        this.error = false;

        // this will probably need to take some params from the parent/router that tells it where to redirect to after authorizing 
        this.$router.replace(this.$route.query.redirect || "/blocked");
      },

      _onAuthFailed(error) {
        this.error = 'Your user name and password did not match our records.';
        delete localStorage.token;
      }
    },
  }
</script>

<style lang="scss" scoped>

  .logo-container {
    animation: pop cubic-bezier(.4,0,.3,1) .24s;
    animation-delay: .24s;
  }

  .brite-orange-logo {
    display: inline-block;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: $brite-orange;

    i {
      display: inline-block;
      vertical-align: middle;
      background-size: contain;
      margin: 24px;
      text-align: center;
      width: 24px!important;
      height: 24px;

      svg {
        width: 100%;
        height: 100%;
        fill: white;
      }
    }
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    display: block;
    text-align: left;
  }

  input {
    width: 255px;
    height: 50px;
    border-radius: 3px;
    border: none;
    background-color: #eee;
    outline: none;
    font-size: 14px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .brite-error {
    text-align: left;
    width: 255px;
  }

  .brite-button {
    width: 255px;
  }
</style>
