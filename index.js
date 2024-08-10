var randomNumber = Math.floor(Math.random() * 6 + 1)
var randomNumber2 = Math.floor(Math.random() * 6 + 1)
image1 = document.querySelector(".img1");
image2 = document.querySelector(".img2");
if (randomNumber == 1) {
    image1.setAttribute("src", "./images/dice1.png");
}
else if (randomNumber == 2) {
    image1.setAttribute("src", "./images/dice2.png");
}
else if (randomNumber == 3) {
    image1.setAttribute("src", "./images/dice3.png");
}
else if (randomNumber == 4) {
    image1.setAttribute("src", "./images/dice4.png");
}
else if (randomNumber == 5) {
    image1.setAttribute("src", "./images/dice5.png");
}
else if (randomNumber == 6) {
    image1.setAttribute("src", "./images/dice6.png");
}
if (randomNumber2 == 1) {
    image2.setAttribute("src", "./images/dice1.png");
}
else if (randomNumber2 == 2) {
    image2.setAttribute("src", "./images/dice2.png");
}
else if (randomNumber2 == 3) {
    image2.setAttribute("src", "./images/dice3.png");
}
else if (randomNumber2 == 4) {
    image2.setAttribute("src", "./images/dice4.png");
}
else if (randomNumber2 == 5) {
    image2.setAttribute("src", "./images/dice5.png");
}
else if (randomNumber2 == 6) {
    image2.setAttribute("src", "./images/dice6.png");
}

h1=document.querySelector("h1");
if(randomNumber>randomNumber2)
{
    h1.innerText="Player 1 Wins!"
}
else if(randomNumber<randomNumber2)
{
    h1.innerText="Player 2 Wins!";
}
else{
    h1.innerText="Draw!";
}