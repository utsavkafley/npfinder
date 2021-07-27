<template>
  <div>
    <div class="parksWrapper">
      <div class="park-card" v-for="park in parks" v-bind:key="park.id">
        <img
          :src="
            park.images.length
              ? park.images[0].url
              : 'https://via.placeholder.com/200'
          "
        />
        <a :href="park.url" target="__blank">
          <h3>{{ park.name }}</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayParks",
  data() {
    return {
      parks: null,
    };
  },
  components: {},
  created: function () {
    fetch(
      `https://developer.nps.gov/api/v1/parks?stateCode=${this.$route.params.stateCode}&api_key=3IvyBUoAFCni3kEsKBxi76jXRROgwyEBiTsPHzlk`
    )
      .then((response) => response.json())
      .then((data) => (this.parks = data.data));
  },
  watch: {
    "$route.params.stateCode": function (stateCode) {
      fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=3IvyBUoAFCni3kEsKBxi76jXRROgwyEBiTsPHzlk`
      )
        .then((response) => response.json())
        .then((data) => (this.parks = data.data));
    },
  },
};
</script>

<style lang="scss">
.parksWrapper {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: mintcream;
}

.park-card {
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  margin: 10px 10px;
  border: 2px solid black;
  width: 300px;
}

.park-card:hover {
  transition-duration: 10ms;
  background-color: yellowgreen;
}

.park-card img {
  flex-shrink: 0;
  height: 300px;
  max-width: 100%;
  display: block; /* remove extra space below image */
}

.park h3 {
  align-items: flex-end;
}

.park a {
  text-decoration: none;
  color: rgb(71, 71, 71);
}
</style>