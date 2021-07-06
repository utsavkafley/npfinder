<template>
  <div id="nav">
    <router-link to="/"><img alt="NPF logo" src="./assets/logo.png" /></router-link>
    <router-link to="/history">Recently Viewed Parks</router-link>
  </div>
  <router-view/>
</template>

<script>

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav img{
  height: 150px;
  padding: 0px 100px;
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
