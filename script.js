let hamburger = document.querySelector(".hamburger").getElementsByTagName("img")[0];
let nav = document.getElementsByTagName("nav")[0]
hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("none")
})