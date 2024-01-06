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
    margin-top: 0;
    margin-left: 5em;
    flex-direction: row;
    align-items: center;
    align-self: center;
    flex-wrap: wrap;
    gap: 1em;
}
</style>