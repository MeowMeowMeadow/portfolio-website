<template>
  <div class="about">
    <h1>About Me</h1>
  
    <div class="aboutMe">

    </div>
    <div class="contact">
      <form id="form" action="#">
        <label for="fname">
          First Name:
          <input type="text" id="fname" name="fname" required>
        </label>
        <label for="email">
          Email Address:
          <input type="email" id="email" name="email" required>
        </label>
        <label for="message">
          Message:
          <input type="text" id="message" name="message" required>
        </label>
      </form>
    </div>
    <div class="submitMessage">
      <button type="submit" form="form">Send Message</button>
    </div>
  </div>
</template>

<style>

.about
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

.contact 
{
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0px 5px 5px rgba(0,0,0,0.30);
  padding: 1.2rem 1vw 3rem 2vw;
}

form 
{
  display: flex;
  width: 60vw;
  gap: 1rem;
  flex-flow: row wrap;
  align-items: center;
}
label
{
  position: relative;
  width: 15rem;
  font-size: 1.2em;
}

input
{
  border: 1px solid black;
  padding: 2px 5px;
  margin-top: 2px;
  border-radius: 3px;
}
</style>
