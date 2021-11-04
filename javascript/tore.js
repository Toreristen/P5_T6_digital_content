//console.log("works");

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".nav__list-container");
const menuItems = document.querySelectorAll(".nav__list-item");
const closeMenu = document.querySelector(".nav__list-item--active")
const closeIcon = document.querySelector(".nav__icon2");


window.addEventListener('DOMContentLoaded', (event) => {
    menu.style.visibility = "hidden";
})


function toggleMenu() {
    hamburger;
    //console.log("function works")
    
    if (menu.style.visibility === "hidden") {
        menu.classList.add("showMenu");
        menu.classList.remove("closeMenu");
        menu.style.visibility = "visible";
        //menuItems.style.visibility = "visible";
        hamburger.style.display = "none";
        closeIcon.style.display = "initial";
        //insert animation
    }
    else {
        menu.style.visibility = "hidden";
        menu.classList.remove("showMenu");
        menu.classList.add("closeMenu");
        closeIcon.style.display = "none";
        hamburger.style.display = "initial";
        //menuItems.style.visibility = "hidden";
    }
}

hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);




//Pensum kode der mangler:

let array = ["hej", "med", "dig"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
