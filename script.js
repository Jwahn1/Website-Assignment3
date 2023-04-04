//make script that sends notifications when a download is starting
//make a script that checks if someone wrote in the visitor log and print that name
//make a script that changes the background color in the personal page with buttons
//add to the visitor log script to not allow swear words

const buttonWhite = document.getElementById("white");
const buttonDesert = document.getElementById("desert");
const buttonBeige = document.getElementById("beige");
const favorites = document.getElementById("favorites");
const classes =  document.getElementById("classes");
const buttons = document.getElementById("buttons");

let beige = 1;
let white = 0;
let dessert = 0;

buttonWhite.addEventListener("click", whiteBackground);
buttonBeige.addEventListener("click", beigeBackground);
buttonDesert.addEventListener("click", desertBackground);


//next 3 functions change the background color of Personal_Page.html
//and also check and send back notifications if the user tries to change
//the background color to a scheme is already in use
//condional,eventhandler,color change, notification
function desertBackground(){
if(dessert === 1){
     window.alert("this option has already been enabled");
 }
favorites.style.backgroundColor = "#E0B589";
classes.style.backgroundColor = "#E0B589";
buttons.style.backgroundColor = "#E0B589";
 beige = 0;
 white = 0;
 dessert = 1;
}

function whiteBackground(){
if(white ===1){
     window.alert("this option has already been enabled");
 }
favorites.style.backgroundColor = "white";
classes.style.backgroundColor = "white";
buttons.style.backgroundColor = "white";
 beige = 1;
 white = 1;
 dessert = 0;

}

function beigeBackground(){
if(beige === 1){
     window.alert("this option has already been enabled");
 }
favorites.style.backgroundColor = "beige";
classes.style.backgroundColor = "beige";
buttons.style.backgroundColor = "beige";
 beige = 1;
 white = 0;
 dessert = 0;
}





