let paw = document.getElementById("paw");
let nav = document.getElementById("nav");
let ul = document.getElementById("liste");

paw.addEventListener('click', function(event){    
    nav.classList.toggle("visible");
    ul.classList.toggle("visible_");
    ul.classList.toggle("liste");
    console.log("hello")
});

