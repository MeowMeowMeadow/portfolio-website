<template>
  <div class="about">
    <h1>Web Development</h1>
    <Portfolio/>
  </div>
</template>

<script>
import Portfolio from "../components/Portfolio.vue"
import Card from '../components/PortfolioCard.vue'

export default {
  name: "Web Dev",
  components:
  {
    Portfolio,
    Card
  }
}
</script>
