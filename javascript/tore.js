console.log("works")

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".nav__list-container");
const menuItems = document.querySelectorAll(".nav__list-item");

window.addEventListener('DOMContentLoaded', (event) => {
    menu.style.visibility = "hidden";
})


function toggleMenu(hamburger) {
    console.log("function works")
    if (menu.style.visibility === "hidden") {
        menu.classList.add("showMenu");
        menu.classList.remove("closeMenu");
        menu.style.visibility = "visible";
        menuItems.style.visibility = "visible";
        //insert animation
    }else {
        menu.style.visibility = "hidden";
        menu.classList.remove("showMenu");
        menu.classList.add("closeMenu");
        //menuItems.style.visibility = "hidden";
    }
}

hamburger.addEventListener("click", toggleMenu)










let array = ["hej", "med", "dig"];
for (let i = 0; i < array.length; i++) {

}
