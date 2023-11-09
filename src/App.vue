<template>
  <div id="app">
    <div id="nav">
      <div class="nav-container">
        <router-link to="/">Quem Sou?</router-link> |
        <router-link to="/OQueFaco">O Que Faço?</router-link> |
        <router-link to="/Hobbies">Hobbies</router-link>
      </div>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"; 

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px; 
}

#nav {
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 80px;
}

.nav-container {
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 100%;
  padding: 0 15px;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 0 10px; 
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}

footer {
  background-color: black;
}
</style>
