<template>
  <div class="home">
    <ParkSelection @stateSelected="fetchParks" />
    <ParksResultDisplay v-bind:parks="parks" />
  </div>
</template>

<script>
import ParkSelection from "../components/ParkSelection.vue";
import ParksResultDisplay from "../components/ParksResultDisplay.vue";

export default {
  name: "Home",
  components: {
    ParkSelection,
    ParksResultDisplay,
  },

  data() {
    return {
      parks: [],
    };
  },

  methods: {
    fetchParks(stateCode) {
      fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=3IvyBUoAFCni3kEsKBxi76jXRROgwyEBiTsPHzlk`
      )
        .then((response) => response.json())
        .then((data) => (this.parks = data.data));
    },
  },
};
</script>
