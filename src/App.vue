<template>
  <div id="nav">
    <router-link to="/"
      ><img alt="NPF logo" src="./assets/logo.png"
    /></router-link>
    <ParkSelection />
    <router-link to="/recentlyViewed">Recently Viewed Parks</router-link>
  </div>
  <router-view />
</template>

<script>
import ParkSelection from "./components/ParkSelection.vue";
export default {
  name: "App",
  components: {
    ParkSelection,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Great+Vibes&family=Jost:wght@100&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: #eeffee;
}

#app {
  font-family: "Jost", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  padding: 0px 100px;
  color: #2c3e50;
}

#nav img {
  height: 150px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
