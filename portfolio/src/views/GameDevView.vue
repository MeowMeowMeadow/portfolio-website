<template>
  <div class="gameDev">
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

<style scoped>
.gameDev
{
  display: flex;
  flex-direction: column;
  background-color:aqua;
  margin: auto;
  padding: auto;
  width: 100vw;
  height: 40vw;
  align-items: center;

}
</style>
