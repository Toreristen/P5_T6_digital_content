let hiddenTxt = document.getElementById("hidden-txt");
let showParagraph = document.getElementById("se-mere-arrow");

window.addEventListener('DOMContentLoaded', (event) =>{
  hiddenTxt.style.display = "none";
})

function showTxt() {
  //"if" viser teksten. "else" skjuler den.

  if (hiddenTxt.style.display === "none") {
    console.log("funktion virker");
    hiddenTxt.style.display = "initial";
  }
  else {
    hiddenTxt.style.display = "none";
  }
}


//pensum ting

let tropiskfrugt = ["mango", "passionsfrugt", "papaya"];

//loop
for (let i = 0; i < tropiskfrugt.length; i++) {
  console.log(tropiskfrugt[i]);
}
