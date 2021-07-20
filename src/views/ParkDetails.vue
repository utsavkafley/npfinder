<template>
  <div class="parkDetails">
    <h2>{{ parkName }}</h2>
    <p>{{ parkDesc }}</p>
    <h3>Things to do</h3>
    <ul>
      <li
        class="activityList"
        v-for="thing in thingsToDo"
        v-bind:key="thing.id"
      >
        <img :src="thing.images[0].url" alt />
        <div class="description">
          <h4>{{ thing.title }}</h4>
          <p>{{ thing.shortDescription }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thingsToDo: null,
      parkName: null,
      parkDesc: null,
    };
  },
  created: async function () {
    await fetch(
      `https://developer.nps.gov/api/v1/thingstodo?parkCode=${this.$route.params.parkCode}&api_key=3IvyBUoAFCni3kEsKBxi76jXRROgwyEBiTsPHzlk`
    )
      .then((response) => response.json())
      .then((data) => (this.thingsToDo = data.data));
    this.parkName = this.$route.params.parkName;
    this.parkDesc = this.$route.params.parkDesc;
  },
};
</script>

<style scoped>
img {
  height: 200px;
}
</style>