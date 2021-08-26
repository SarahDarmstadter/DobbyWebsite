

// Générateur de Dobby ! 
let imgArray = ["images/1.jpg","images/2.jpg","images/3.jpg", "images/4.jpg","images/5.jpg","images/6.jpg", "images/9.jpg","images/10.jpg","images/13.jpg", "images/15.jpg","images/17.jpg","images/18.jpg"];  
let aleatoirArray = shuffle(imgArray);
let pointeur = 0;
let button = document.getElementById("bouton-de-lancement");
    button.onclick = ChangerImage;

function shuffle(array) {
    let newArray = array.sort(() => Math.random() - 0.5);
    console.log(newArray);
    return newArray;
     
  }


  function ChangerImage(){

    let test = document.getElementById("test");
    test.src = aleatoirArray[pointeur];
    
    if(pointeur < aleatoirArray.length - 1){
    pointeur++;
    }
    else{
    pointeur = 0;
    }
    
    let stop = setTimeout("ChangerImage()", 200);
    
    test.addEventListener("click", function(e){
    e.preventDefault();
        clearTimeout(stop);
      
    })
};






test.src = imgArray[Math.floor(Math.random() * imgArray.length)].image;
        console.log("IMAGE NAME =>", test.src);

        let legende = document.getElementById("legende");
        legende.innerHTML = imgArray[Math.floor(Math.random() * imgArray.length)].texte