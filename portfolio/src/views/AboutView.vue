<template>
  <div class="about">
    <h1 class="">About Me</h1>
  
    <div class="aboutMe">
      <Transition appear>
        <ul>
          <li>A Computing & Games Development Graduate from Plymouth University with an interest in Web Development, Game Development and Web Hosting.</li>
          <li>I am a creative person as well as getting along with other people in
              team environments. Through my work experiences in the US and Netherlands, I had the opportunity to work and learn from different
              cultures. I'm looking to build my career in the Software and Web development fields.</li>
          <li>
            <span>Programming Languages: C#, C++, JavaScript, PHP, Bash</span>
          </li>
          <li>
            <span>Web Technologies: Vue, Node, HTML, CSS</span>
          </li>
          <li>
            <span>Tools: Unity, Agile, Scrum, Windows, Linux</span>
          </li>
      </ul>
      </Transition>
    </div>

    <Transition appear>
      <div class="links">
        <p>Github: <a href="https://github.com/MeowMeowMeadow" target="_blank">MeowMeowMeadow</a></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/meadow-davis-7b56b3173/" target="_blank">Meadow Davis</a></p>
        <p>Itch.io: <a href="https://meadowfaust.itch.io/" target="_blank">meadowfaust.itch.io</a></p>
        <p>Resume/CV: Download Here</p>
    </div>
    </Transition>

    <h2>Send a Message</h2>
    <Transition appear>
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
      <br>
        <label for="message">
          Message:
          <textarea cols="30" rows="4" form="form"></textarea>
        </label>
      </form>
    </div>
  </Transition>
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
  width: 30vw;
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

input, textarea
{
  border: 1px solid black;
  padding: 2px 5px;
  margin-top: 2px;
  border-radius: 3px;
}

button
{
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  margin-top: 20px;
}

.aboutMe
{
  display: flex;
  width: 70%;
  font-size: 1.25rem;
}

.aboutMe ul
{
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.aboutMe ul li
{
  padding: 5px;
}

.links p a
{
  text-decoration: none;
  padding: 5px;
  border-radius: 4px;
}

.links p a:hover
{
  background-color: red;
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
