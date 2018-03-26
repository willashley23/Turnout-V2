<template lang="pug">
  form
    .input-group(v-bind:class="{ 'input-group--error': $v.username.$error }")
      label(for="username") Username
      input.brite-input(
        v-model.trim="username" 
        @input="$v.username.$touch()" 
        type="text"
      )
      .input-group-errors
        span.brite-error(v-if="!$v.username.required && $v.username.$dirty") Please enter your username
        span.brite-error(v-if="!$v.username.minLength") Username must be at least 4 chars long
    button.brite-button.blue(type='submit') Submit
</template>

<script>
  import { required, minLength } from 'vuelidate/lib/validators'

  export default {
    name: 'auth-form',
    data () {
      return {
        username: '',
      }
    },
    validations: {
      username: {
        required,
        minLength: minLength(4),
      },
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
    width: 100%;
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
  }
</style>
