const menuclosebtn = document.getElementById("btn-close-overlay-hamburger");
const menushowbtn = document.getElementById("btn-show-overlay-hamburger");
const menuoverlay = document.getElementById("nav-overlay");

// show overlay
menushowbtn.addEventListener("click", () => {
    menuoverlay.classList.add("showoverlay");
});

// hidden overlay 
menuclosebtn.addEventListener("click", () => {
    menuoverlay.classList.remove("showoverlay");
});