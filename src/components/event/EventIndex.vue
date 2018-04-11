<template lang="pug">
  .events-container
    Event(v-for="event in allEvents" :key="event.id" :event="event")
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Event from "./Event.vue";

export default {
  name: "EventIndex",
  components: { Event },
  data() {
    return {
      displayedEvents: null,
    }
  },

  computed: {
    ...mapGetters([
      "allEvents",
    ]),
  },

  async mounted() {
    this.displayedEvents = await this.$store.dispatch("fetchEvents");
  },
  methods:{},
}
</script>

<style lang="scss" scoped>

</style>

