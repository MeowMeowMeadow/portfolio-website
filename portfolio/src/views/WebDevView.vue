<template>
  <div class="about">
    <h1>Web Development</h1>
    <PortfolioWeb/>
  </div>
</template>

<script>
import PortfolioWeb from "../components/PortfolioWeb.vue"
import Card from '../components/PortfolioCard.vue'

export default {
  name: "Web Dev",
  components:
  {
    PortfolioWeb,
    Card
  }
}
</script>

<style>
</style>
