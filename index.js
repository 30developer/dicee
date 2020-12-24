
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins!"
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!"
} else {
  document.querySelector("h1").innerHTML = "Player2 Wins!"
}

// document.querySelector(".img1").src = "images/dice"+randomNumber1+".png";
// document.querySelector(".img2").src = "images/dice"+randomNumber2+".png";

document.querySelector("img").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");
