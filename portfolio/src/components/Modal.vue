<template>
    <div>
        <div class="modalMask">
            <div class="modalContent">
                <Transition appear>
                    <div class="modalContainer">
                        <div class="modalTitle">
                            {{  portfolioMdl.name }}
                            {{  portfolioMdl.date }}
                        </div>
                        <div class="modalImage">
                            <img :src="portfolioMdl.image"/>
                        </div>
                        <div class="modalDescription">
                            {{ portfolioMdl.longDescription }}
                        </div>
                        <div>
                            <span class="tech" v-for="tech in portfolioMdl.skills" :key="tech">{{ tech }}</span>
                        </div>
                        <div>
                            <button @click="$emit('close')">Close</button>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Modal',
    props: {
        showModal: {
            type: Boolean
        },
        portfolioMdl: {
            type: Object
        }
    },
    created() {
        document.getElementsByTagName("body")[0].classList.add("modal-open");
    },
    methods: {
        open(url) {
            window.open(url, "_blank");
        }
    }
}

</script>

<style scoped>

.tech
{
    padding: 3px 10px;
    margin: 3px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: rgb(180, 129, 180);
}

button
{
    margin: 5px;
    padding: 10px;
    border: none;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.25);
    border-radius: 8px;
}
body.modal-open {
    overflow: hidden;
}

.modalMask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    transition: opacity 0.5s ease;
}

.modalContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.modalContainer {
  width: 40%;
  max-height: 70%;
  margin: 0px auto;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  flex-direction: column;
  display: flex; /*added*/
  background-color: white;
}

.modalImage img
{
    height: 50%;
    width: 50%;
    max-width: 350px;
    max-height: 500px;
}

.modalTitle
{
    padding: 10px;
    font-size: 1.5em;
}

.modalDescription
{
    margin: 6px;
    padding: 10px;
    font-size: 1.1em;
}
</style>