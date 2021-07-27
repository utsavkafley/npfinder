<template>
  <div class="parksWrapper">
    <div
      v-for="park in parks"
      v-bind:key="park.id"
      class="park-card"
      @click="showParkDetails(park)"
    >
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
</template>

<script>
export default {
  name: "ParkResultDisplay",

  components: {},

  props: ["parks"],

  methods: {
    showParkDetails(park) {
      this.$store.commit("addToHistory", park);
      this.$router.push({
        path: `/${park.parkCode}`,
        query: {
          fullName: park.fullName,
          description: park.description,
          imgUrls: [
            "https://www.nps.gov/common/uploads/structured_data/2514A14F-D5E3-BB31-4A0C4175BF61216A.jpg",
            "https://www.nps.gov/common/uploads/structured_data/5482A294-DB42-56E0-FCCCD03C986AE1DC.jpg",
          ],
        },
      });
    },
  },
};
</script>

<style>
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

.park-card img {
  flex-shrink: 0;
  height: 300px;
}

.park-card img {
  max-width: 100%;
  display: block; /* remove extra space below image */
}

.park-card h3 {
  align-items: flex-end;
}

.park-card a {
  text-decoration: none;
  color: rgb(71, 71, 71);
}
</style>