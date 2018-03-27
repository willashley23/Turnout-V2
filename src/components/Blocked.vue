<template lang="pug">
  .hello
    h1 This content is password protected!!!
    p The current count is {{ count }}
    button
        router-link(
            :to="{ name: 'foo', params: { num: 55 } }"
        ) Go To Auth
</template>

<script>
export default {
  name: 'Blocked',
  computed: {
      count() {
          return this.$store.getters.currentCount;
      },
  }
}
</script>

<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

button {
    width: 180px;
    height: 50px;
    background-color: #42b883;
    color: white;
    font-family: sans-serif;
    outline: none;
    font-size: 18px;
    border: none;
    margin: auto 10px;
    cursor: pointer;
    transition: background-color 100ms linear;

    &:hover {
        background-color: rgba(66,184,131, 0.75);
    }

    a {
        text-decoration: none;
        color: white;
        height: 100%;
        width: 100%;
    }
}


</style>
