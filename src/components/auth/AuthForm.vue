<template lang="pug">
  form
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
import { log } from 'util';

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
    color: tomato;
    font-size: 13px;
    display: inline-block;
    margin-top: 5px;
    margin-left: 2px;
    text-align: left;
    width: 255px;
  }

  .brite-button {
    width: 255px;
    vertical-align: baseline;
    zoom: 1;
    font-weight: 600;
    color: #fff;
    transition: all .2s ease-out;
    position: relative;
    border: 0;
    padding: 11px 20px;
    margin-top: 10px;
    text-align: center;
    text-decoration: none;
    line-height: 22px;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;

    &.blue {
      background-color: #0093D7;
    }

    &:hover {
      background-color: darken($color: #0093d7, $amount: 15%);
    }

    &:disabled {
      background: #fff;
      border: 1px solid #e5e5e5;
      color: #e5e5e5;
      cursor: default;
    }
  }
</style>
