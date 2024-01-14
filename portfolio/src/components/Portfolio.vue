<template>
    <div class="portfolio">
        <div v-for="portfolio in portfolio_info" :key="portfolio.name">
            <Card :portfolio="portfolio" @show="showModalFn"/>
        </div>
        <Modal :showModal="showModal" @close="closeModal" v-if="showModal" :portfolioMdl="modal_info"/>
    </div>
</template>

<script>
import Card from './PortfolioCard.vue';
import info from '../assets/info';
import Modal from './Modal.vue';

 export default {
    name: "Portfolio",
    components: {
        Card,
        Modal
    },
    data() {
        return {
            all_game: info.gameDevelopment,
            portfolio_info: [],
            num: 4,
            showModal: false,
            modal_info: null
        }
    },
    created() {
            for (var i = 0; i < this.num; i++)
            {
                this.portfolio_info.push(this.all_game[i]);
            }

    },
    methods: {
        closeModal(){
            this.showModal = false;
            document.getElementsByTagName("body")[0].classList.remove("modal-open");
        },
        showModalFn(portfolioModal) {
            this.modal_info = portfolioModal;
            this.showModal = true;
            console.log(this.modal_info);
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