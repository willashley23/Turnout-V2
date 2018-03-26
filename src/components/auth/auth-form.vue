<template lang="pug">
  form
    .input-group(v-bind:class="{ 'input-group--error': $v.username.$error }")
      label(for="username") Username
      input.brite-input(v-model.trim="username" @input="$v.username.$touch()" type="text")
      .input-group-errors
        span.brite-error(v-if="!$v.username.required") Please enter your username
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

