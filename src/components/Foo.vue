<template lang="pug">
    div
        h1 Welcome to Foo!
        button
            router-link(
                to="/"
            ) Home
        button(@click="add") click me
        h1.secret My secret number is: {{ count }}
</template>

<script>
    export default {
        name: 'Foo',
        data () {
            return {
                count: "0"
            }
        },
        computed: {
          count() {
            return this.$store.state.count;
          },
        },
        props: ['num'],
        methods: {
          add: () => this.$store.commit('increment'),
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        font-family: sans-serif;
        text-align: center;
        color: #333;
    }
</style>
