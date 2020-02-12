var numMickeys=6;
var colors = [];
var pickedColor = pickColor();
var mickeys = document.querySelectorAll(".mickey")
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    //mode buttons event listeners
    for (var i=0; i<modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        modeButtons[2].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent === "Easy") {
            numMickeys =3; 
        }
        else if (this.textContent === "Medium") {
            numMickeys = 6;
        }
        else numMickeys = 9;
        reset();
        });
    }

    for(var i=0; i< mickeys.length; i++) {
        //add event listeners to mickeys
        mickeys[i].addEventListener("click", function() {
        //grab color of clicked mickey
        var clickedColor = this.style.fill;
        //compare colors
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else  {
            this.style.fill = "#232323";
            messageDisplay.textContent = "Try again!";
        }
      });
    }
    reset();
}

function setupModeButtons() {

}

function reset() {
    //generate all new colors
    colors = generateRandomColor(numMickeys);
    //pick a new color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of mickeys
    for (var i=0; i<mickeys.length; i++) {
        if(colors[i]) {
            mickeys[i].style.display = "block";
            mickeys[i].style.fill = colors[i];
        } else {
            mickeys[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
    reset();
    });

function changeColors(color) {
    //loop through all mickeys
    for (var i=0; i<colors.length; i++) {
    //change each color to match
    mickeys[i].style.fill = color;
    }
}

function pickColor() {
    var randomColor=Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function generateRandomColor(num) {
    //make an array
    var arr = [];
    //add num random colors
    for (var i = 0; i<num; i++) {
        //get random color and push into Array
        arr.push(randomColor());
    }
    //return that array
    return arr;
 }

 function randomColor() {
    //pick a red from 0-255
    var red = Math.floor(Math.random()*256);
    //pick a green
    var green =  Math.floor(Math.random()*256);
    //pick a blue
    var blue=Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
     
 }