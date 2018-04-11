<template lang="pug">
  .event-super-container
    .event-img-wrapper
      img(:src="event.imageUrl")
    .event-details
      .event-title {{ event.title }}
      .event-date {{ event.date | moment("ddd, MMM Do YYYY") }}
      .event-location {{ event.location }}      
</template>


<script>
export default {
  name: "Event",
  props: ["event"],
}
</script>


<style lang="scss" scoped>

</style>
