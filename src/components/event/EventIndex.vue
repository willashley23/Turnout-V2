<template lang="pug">
  .events-container
    event(v-for="event in allEvents" :key="event.id" :event="event")
</template>

<script>
export default {
  name: "EventIndex",
  components: { event },
  data() {
    return {
      allEvents: this.$store.getters.allEvents,
      displayedEvents: null,
    }
  },
  computed: {
    
  },
  async created() {
     this.displayedEvents = await this.$store.dispatch("fetchEvents");
  },
  methods:{},

}
</script>

<style lang="scss" scoped>

</style>

