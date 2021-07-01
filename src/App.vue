

<template>
  <img alt="NPF logo" src="./assets/logo.png" />
  <ParkSelection @stateSelected="fetchParks" />
  <ParkResultDisplay v-bind:parks="parks"/>
</template>

<script>
import ParkSelection from "./components/ParkSelection.vue";
import ParkResultDisplay from "./components/ParksResultDisplay.vue";
export default {
  name: "App",
  components: {
    ParkSelection,
    ParkResultDisplay,
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
        .then((data) => this. parks=data.data);
    },
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
