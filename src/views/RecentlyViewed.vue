<template>
  <div>
    <h1>Show Recently Viewed Parks Here</h1>
    <ParksResultDisplay v-bind:parks="viewedParks" />
  </div>
</template>

<script>
import ParksResultDisplay from "../components/ParksResultDisplay.vue";

export default {
  name: "RecentlyViewed",
  computed: {
    viewedParks() {
      return this.$store.state.viewHistory;
    },
  },

  components: {
    ParksResultDisplay,
  },
};
</script>


<style scoped>
</style>