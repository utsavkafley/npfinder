<template>
  <div class="park">
    <img :src="park.images.length ? park.images[0].url:'https://via.placeholder.com/200'" />
    <a :href="park.url" target="__blank"><h3>{{park.fullName}}</h3></a>
    <!-- <p>{{park.description}}</p> -->
  </div>
</template>


<script>
export default {
  name: "Park",

  props: {
    park: null,
  },
};
</script>


<style scoped>

</style>