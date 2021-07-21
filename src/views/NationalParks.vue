<template>
  <div v-for="park in parks" v-bind:key="park.id" id="park-card">
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
</template>

<script>
export default {
  name: "NationalParks",
  data() {
    return {
      parks: null,
    };
  },
};
</script>