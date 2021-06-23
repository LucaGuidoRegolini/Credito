<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.space {
  flex-grow: 1;
}

.content {
  width: 100%;
  height: 100vh;
}
</style>
