<template>
  <div class="home">
    <ParksResultDisplay v-bind:parks="parks" />
  </div>
</template>

<script>
import ParksResultDisplay from "../components/ParksResultDisplay.vue";

export default {
  name: "Home",
  components: {
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
