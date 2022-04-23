const nav = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const hamburgerDiv = document.querySelectorAll(".hamburger div");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    if (nav.classList.contains("show")) hamburgerDiv.forEach(d => d.style.background = "white");
    else hamburgerDiv.forEach(d => d.style.background = "black");
})