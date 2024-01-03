<template>
    <div class="portfolio">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
</template>

<script>
import Card from './PortfolioCard.vue';

 export default {
    name: "Portfolio",
    components: {
        Card
    },
    data() {

    }
}
</script>

<style>
.portfolio
{
    display: flex;
    padding: 10px;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1em;
}
</style>