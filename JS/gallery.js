let content = document.getElementById("content");
let photo = document.querySelectorAll("photo");

photo.addEventListener('click', function(event){    
    content.classList.toggle("hover");
    console.log("hello")
});

