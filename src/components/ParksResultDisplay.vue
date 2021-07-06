<template>
  <div class="parksWrapper">
    <Park class="park" v-for="park in parks" v-bind:park="park" v-bind:key="park.id" />
  </div>
</template>



<script>
import Park from "./Park.vue";

export default {
  name: "ParkResultDisplay",

  components: {
    Park,
  },

  props: ["parks"],
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

.park {
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  margin: 10px 10px;
  border: 2px solid black;
  width:300px;
}

.park img {
  flex-shrink: 0;
  height:300px;
}



.park img {
  max-width: 100%;
  display: block; /* remove extra space below image */
}

.park h3 {
  align-items: flex-end;
}

.park a{
text-decoration: none;
color:rgb(71, 71, 71);
}

</style>