<template lang="pug">
    div
        h1 Welcome to Foo!
        button
            router-link(
                to="/"
            ) Home
        button(@click="add") click me
        h1.secret My secret number is: {{ count }}
        authForm
</template>

<script>  
import authForm from './auth/AuthForm.vue'

export default {
        name: 'Foo',
        data () {
            return {
                foo: 2,
            }
        },
        computed: {
          count() {
            return this.$store.state.count;
          },
        },
        props: ['num'],
        components: { authForm },
        methods: {
          add: function() {
              this.$store.commit('increment');
          },
        },
    }
</script>

<style lang="scss" scoped>
    h1 {
        font-family: sans-serif;
        text-align: center;
        color: #333;
    }
</style>
