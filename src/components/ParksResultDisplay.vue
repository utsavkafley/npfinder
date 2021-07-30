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
      <h3>{{ park.name }}</h3>
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

<style scoped>
.parksWrapper {
  background-color: #eeffee;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 40px 100px;
}

.park-card {
  display: flex;
  flex-direction: column;
  padding: 20px 15px 0px 15px;
  margin: 10px 20px;
  width: 340px;
  border-radius: 5px;
  box-shadow: 5px 5px 15px grey;
  background: linear-gradient(
    white,
    white 50%,
    rgb(93, 184, 108) 50%,
    rgb(93, 184, 108)
  );
  background-size: 100% 200%;
  transition: all 0.2s ease;
}

.park-card:hover {
  background-position: 100% 100%;
}

.park-card h3 {
  background-position: 100% 100%;
  transition: all 0.2s ease;
}

.park-card:hover h3 {
  color: white;
}

.park-card img {
  flex-shrink: 0;
  height: 300px;
}

.park-card img {
  max-width: 100%;
  display: block; /* remove extra space below image */
}

.park-card a {
  text-decoration: none;
  color: rgb(71, 71, 71);
}

h3 {
  font-size: 24px;
  font-weight: bold;
}
</style>