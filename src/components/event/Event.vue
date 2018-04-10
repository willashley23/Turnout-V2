<template lang="pug">
  .event-super-container
    .title {{ item.title }}
</template>


<script>
export default {
  name: "Event",
  props: ["event"],
}
</script>


<style lang="scss" scoped>

</style>
