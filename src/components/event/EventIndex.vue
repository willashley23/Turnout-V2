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
      
    }
  },

  computed: {
    ...mapGetters([
      "allEvents",
    ]),
  },

  mounted() {
    this.$store.dispatch("fetchEvents");
  },
  methods:{},
}
</script>

<style lang="scss" scoped>
  .events-container {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
</style>

