<template>
  <div class="parksWrapper">
    <div class="parks">
      <div v-for="park in parks" :key="park.id">
        <img
          :src="park.images.length ? park.images[0].url:'https://via.placeholder.com/200'"
          height="200"
          width="225"
        />
        <h3>{{park.fullName}}</h3>
        <p>{{park.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name:'ParkResultDisplay',

        props:['parks']
    };


</script>


<style scoped>

</style>