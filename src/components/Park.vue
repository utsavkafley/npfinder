<template>
  <div>
    <!-- <router-link :to="`/${park.fullName}/${park.parkCode}/${park.description}`"> -->
    <router-link :to="`/${park.parkCode}/${park.name}/${park.description}`">
      <div id="park-card">
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
    </router-link>
  </div>
</template>


<script>
// import ParkModal from "./ParkModal.vue";

export default {
  name: "Park",

  props: {
    park: null,
  },

  components: {},
};
</script>


<style scoped>
</style>