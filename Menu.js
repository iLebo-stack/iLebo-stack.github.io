let btn, navItems;
btn = document.getElementById("menuIcon");
navItems = document.getElementById("navItems");

function menuBtn() {
    if (navItems.className == 'navlinks') {
        navItems.className = 'navlinks ' + 'responsive';
        btn.className = 'toggle';
    } else {
        navItems.className = 'navlinks';
        btn.className = '';
    }
}

btn.addEventListener("click", menuBtn, false);