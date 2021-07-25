let btn, navItems;
btn = document.getElementById("menuIcon");
navItems = document.getElementById("navItems");

function menuBtn() {
    if (navItems.style.display == "flex") {
        navItems.style.display = "none";
    } else 
    navItems.style.display = "flex";
}

btn.addEventListener("click", menuBtn, false);