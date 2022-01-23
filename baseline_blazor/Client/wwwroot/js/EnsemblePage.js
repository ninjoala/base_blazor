const scrollTop = document.getElementById('scrollTop');

window.onscroll = () => {
    if (window.scrollY > 300) {
        scrollTop.style.display = "block";
        scrollTop.style.opacity = 1;
        console.log("block");
    } else {
        scrollTop.style.display = "none";
        scrollTop.style.opacity = 0;
        console.log("none");
    }
};