<template>
  <div>
    <div id="park-card" @click="fetchParkDetails">
      <img :src="park.images.length ? park.images[0].url:'https://via.placeholder.com/200'" />
      <a :href="park.url" target="__blank">
        <h3>{{park.name}}</h3>
      </a>
      <!-- <p>{{park.description}}</p> -->
    </div>

    <modal v-if="showParkModal">
      <ParkModal
        @close="showParkModal = false"
        v-bind:park="park"
        v-bind:thingsToDo="thingsToDo"
      />
    </modal>
  </div>
</template>


<script>
import ParkModal from "./ParkModal.vue";

export default {
  name: "Park",

  props: {
    park: null,
  },

  data() {
    return {
      showParkModal: false,
      thingsToDo: null,
    };
  },

  methods: {
    async fetchParkDetails() {
      await fetch(
        `https://developer.nps.gov/api/v1/thingstodo?parkCode=${this.park.parkCode}&api_key=3IvyBUoAFCni3kEsKBxi76jXRROgwyEBiTsPHzlk`
      )
        .then((response) => response.json())
        .then((data) => (this.thingsToDo = data.data));

      this.showParkModal = true;
    },
  },

  components: {
    ParkModal,
  },
};
</script>


<style scoped>
</style>