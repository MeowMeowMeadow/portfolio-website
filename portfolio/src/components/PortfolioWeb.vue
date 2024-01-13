<template>
    <div class="portfolio">
        <div v-for="portfolio in web_info" :key="portfolio.name">
            <Card :portfolio="portfolio"/>
        </div>
    </div>
</template>

<script>
import Card from './PortfolioCard.vue';
import info from '../assets/info';

 export default {
    name: "Portfolio",
    components: {
        Card
    },
    data() {
        return {
            all_web: info.webDevelopment,
            web_info: [],
            num: 5
        }
    },
    created() {
            for (var i = 0; i < this.num; i++)
            {
                this.web_info.push(this.all_web[i]);
            }
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