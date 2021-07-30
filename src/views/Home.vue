<template>
  <div class="home">
    <h1>NATIONAL PARK FINDER</h1>
    <h3>Find your next adventure!</h3>
    <img src="../assets/home.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},

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

<style scoped>
h1 {
  font-family: "Anton", sans-serif;
  letter-spacing: 0.2rem;
  font-size: 52px;
}

h3 {
  font-family: "Great Vibes", cursive;
  font-size: 36px;
  letter-spacing: 0.3rem;
}

img {
  padding-bottom: -10px;
}
</style>
