let seMere;
let points;
let buttonText;

function dropDrown(){
  if (seMere.style.display == "none"){
    seMere.style.display = "block";
    points.style.display = "none";
  } else {
    seMere.style.display = "none";
    points.style.display = "block";
  }
}

window.addEventListener("DOMContentLoaded", (event)=> {
  seMere = document.getElementById("mere");
  points = document.getElementById("points");
  buttonText = document.getElementById("buttonText");
  seMere.style.display = "none";
  points.style.display = "none";
})

//pensum
let test = ["et","to","tre"];
//loop
for (var i = 0;
  i < test.length; i++) {
  console.log(test[i]);
}
