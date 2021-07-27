<template>
  <ParksResultDisplay v-bind:parks="parks" />
</template>

<script>
import ParksResultDisplay from "../components/ParksResultDisplay.vue";

export default {
  name: "NationalParks",
  data() {
    return {
      parks: null,
    };
  },
  components: {
    ParksResultDisplay,
  },
  created() {
    this.getParks();
  },
  watch: {
    "$route.params.stateCode": function () {
      this.getParks();
    },
  },
  methods: {
    getParks: function () {
      fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${this.$route.params.stateCode}&api_key=3IvyBUoAFCni3kEsKBxi76jXRROgwyEBiTsPHzlk`
      )
        .then((response) => response.json())
        .then((data) => (this.parks = data.data));
    },
  },
};
</script>

<style>
</style>