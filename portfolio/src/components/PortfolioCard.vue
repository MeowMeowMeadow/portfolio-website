<template>
    <Transition appear>
        <div class="card">
            <div class="projImg">
            </div>
            <div class="projName">
                <p>Name</p>
             </div>
            <div class="projInfo">
                <p>Information</p>
            </div>
            <div class="projSkills">
                <ul>
                    <li>Test</li>
                    <li>Test</li>
                </ul>
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
    align-self: center;
    width: 25vw;
    gap: 3px;
    margin-left: 30px;
}

.projButton button
{
    margin: 5px;
    padding: 10px;
    border: none;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.25);
    border-radius: 8px;
}

.projSkills ul
{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.projSkills ul li
{
    padding: 3px 10px;
    margin: 3px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: rgb(180, 129, 180);
}

.projButton button:hover
{
    background-color: rgb(158, 158, 158);
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