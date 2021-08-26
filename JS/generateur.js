

// Générateur de Dobby ! 
let imgArray = [
    {image : "../assets/images/17.jpg", texte : "legende 17"},
    {image :"../assets/images/19.jpeg", texte :"legende 19"},
    {image : "../assets/images/20.jpeg", texte :"legende 20"}, 
    ];  
let pointeur = 0;
let legende = document.getElementById("legende");
let lancement = document.getElementById("bouton-lancement");
    lancement.onclick = ChangerImage; 

  function ChangerImage(){

    let test = document.getElementById("test");
    
    if(pointeur < imgArray.length - 1){
    pointeur++;
    }
    else{
    pointeur = 0;
    }

    test.src = imgArray[pointeur].image;
    legende.classList.toggle("legende_visible");

    let timing = setTimeout("ChangerImage()", 200); 

   
    test.addEventListener("click", function(e){
    e.preventDefault();
        clearTimeout(timing);
    let imgText = imgArray[Math.floor(Math.random() * imgArray.length)];
    test.src = imgText.image;

    legende.innerHTML = imgText.texte;
    
        console.log("IMAGE NAME =>", imgText);
      
    })
};




//test.src = imgArray[Math.floor(Math.random() * imgArray.length)].image;