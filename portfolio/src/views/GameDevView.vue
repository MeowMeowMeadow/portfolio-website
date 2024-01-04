<template>
  <div class="about">
    <h1>Game Development</h1>
    <Portfolio/>
  </div>
</template>

<script>
import Portfolio from "../components/Portfolio.vue"
import Card from '../components/PortfolioCard.vue'

export default {
  name: "Game Dev",
  components:
  {
    Portfolio,
    Card
  }
}
</script>
