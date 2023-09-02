function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleSwitch(){
    const toggle =document.getElementById("toggle");
    const body = document.querySelector("body");
    toggle.classList.toggle("active");
    body.classList.toggle("active");
}
