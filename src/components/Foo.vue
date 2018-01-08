<template lang="pug">
    div
        h1 Welcome to Foo!
        button
            router-link(
                to="/"
            ) Home
        h1.secret My secret number is: {{ num }}
</template>

<script>
    export default {
        name: 'Foo',
        data () {
            return {
                data: "34"
            }
        },
        props: ['num']
    }
</script>

<style lang="scss" scoped>
    h1 {
        font-family: sans-serif;
        text-align: center;
        color: #333;
    }
</style>