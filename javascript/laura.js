window.addEventListener("DOMContentLoaded", (event)=> {
  let seMere = document.getElementById("mere");
  let points = document.getElementById("points");
  let buttonText = document.getElementById("buttonText");
  seMere.style.display = "none";
  points.style.display = "none";
})

function dropDrown(){
  if (seMere.style.display == "none"){
    seMere.style.display = "block";
    points.style.display = "none";
  }
  else {
    seMere.style.display = "none";
    points.style.display = "block";
  }
}

//pensum
let test = ["et","to","tre"];
//loop
for ( let i = 0; i < test.length; i++) {
  console.log(test[i]);
}
