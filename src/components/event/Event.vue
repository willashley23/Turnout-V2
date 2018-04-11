<template lang="pug">
  .event-super-container
    .title {{ event.title }}
</template>


<script>
export default {
  name: "Event",
  props: ["event"],
}
</script>


<style lang="scss" scoped>

</style>
