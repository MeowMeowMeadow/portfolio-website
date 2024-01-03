<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/gamedev">Game Dev</router-link>
    <router-link to="/webdev">Web Dev</router-link>
  </nav>
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue';

export default
{
  name: "App",
  components:
  {
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: sticky;
  background-color: darkcyan;
  display: block;
  overflow: hidden;
  width: 100%;
}

nav a {
  padding: 16px 14px;
  margin: 0;
  background-color: darkcyan;
  display: flex;
  float: left;
  font-size: 1.5em;
  color: #2c3e50;
}

nav a:hover {
  background-color: rgb(1, 48, 48);
  font-weight: bold;
  color: #42b983;

}

nav a.router-link-exact-active {
  color: #42b983;
  background-color: rgb(1, 48, 48);
}
</style>
