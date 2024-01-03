<template>
    <Transition appear>
        <div class="card">
            <div class="projName">
                <p>Name</p>
        </div>
            <div class="projInfo">
                <p>Information</p>
            </div>
            <div class="projButton">
                <button>Show More</button>
                <button>Visit Website</button>
            </div>
        </div>
    </Transition>
</template>

<script>
export default
{
    name: "Card",
    data()
    {

    }
}
</script>

<style>
.card
{
    background-color: white;
    border: 1px black solid;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
}

.v-enter-active, .v-leave-active 
{
  transition: opacity 1s ease;
}

.v-enter-from, .v-leave-to
{
  opacity: 0;
}
</style>