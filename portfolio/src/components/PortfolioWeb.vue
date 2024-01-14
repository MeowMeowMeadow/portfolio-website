<template>
    <div class="portfolio">
        <div v-for="portfolio in web_info" :key="portfolio.name">
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
            all_web: info.webDevelopment,
            web_info: [],
            num: 5,
            showModal: false,
            modal_info: null
        }
    },
    created() {
            for (var i = 0; i < this.num; i++)
            {
                this.web_info.push(this.all_web[i]);
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