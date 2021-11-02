
//------------------------ conformation page-------------------
let payment, confirmation;

// added an event listener to the window, 
// so when the window has done loading its make the cornformation page not showing. 
window.addEventListener('DOMContentLoaded', (event) => {
    payment = document.getElementById("payment")
    confirmation = document.getElementById("confirmation")
    confirmation.style.display = "none"
});

// display the conformation page 
function conformationSceen() {
    if (payment.style.display = "none") {
        confirmation.style.display = "block"
    } else {
        confirmation.style.display = "none"
    }


}

