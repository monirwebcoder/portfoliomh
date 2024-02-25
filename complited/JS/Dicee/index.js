var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceImage ="dice" + randomNumber1 +".png";
var randomImageSourc = "images/" + randomDiceImage;

var imge1 = document.querySelectorAll("img")[0];
imge1.setAttribute("src", randomImageSourc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML = " ⛳ Play 1 Wins";
}

else if(randomNumber2 > randomNumber1 ){
    document.querySelector("h1").innerHTML = "Play 2 Wins ⛳";
} else{
    document.querySelector("h1").innerHTML = "Draw";
}

