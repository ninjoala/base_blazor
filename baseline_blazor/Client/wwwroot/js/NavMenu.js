const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const hamburgerLines = document.querySelector(".hamburger-lines");
const navLinks = document.getElementsByClassName("nav-link");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        hamburgerLines.setAttribute("data-transformed", true)
        console.log("true");
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        hamburgerLines.setAttribute("data-transformed", false)
        console.log("false");
    }
})

function closeMobileNav() {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        hamburgerLines.setAttribute("data-transformed", false)
        console.log("false");
    }
}

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', closeMobileNav, false);
}

