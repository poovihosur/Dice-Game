var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumberName = "dice" + randomNumber1 + ".png";

var randomNumberSource1 = "images/" + randomNumberName;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomNumberSource1);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomNumberSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomNumberSource2);


//if condition
if(randomNumberSource2>randomNumberSource1){
    document.querySelector("h1").innerHTML = "⛳️ Player 2 Wins!"
}
else if(randomNumberSource1>randomNumberSource2){
    document.querySelector("h1").innerHTML = "⛳️ Player 1 Wins!"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}


