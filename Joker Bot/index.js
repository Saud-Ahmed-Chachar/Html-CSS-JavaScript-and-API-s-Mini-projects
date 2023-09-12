/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/

document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      document.getElementById("activity").textContent = data.joke
      document.getElementById("title").textContent = "😁Happy Bot😁"
      document.body.classList.add("fun")
      document.getElementById("title").classList.add("zoom-in-out-box")
    })
})