

// Générateur de Dobby ! 

function shuffle(array) {
    let newArray = array.sort(() => Math.random() - 0.5);
    console.log(newArray);
    return newArray;
  }
  let imgArray = ["images/1.jpg","images/2.jpg","images/3.jpg", "images/4.jpg","images/5.jpg","images/6.jpg", "images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg", "images/15.jpg","images/8.jpg","images/9.jpg","images/10.jpg"];  

  let aleatoirArray = shuffle(imgArray);
  var pointeur = 0;

  function ChangerImage(){
    let test = document.getElementById("test");
    test.src = aleatoirArray[pointeur];
    
    if(pointeur < aleatoirArray.length - 1){
    pointeur++;
    }
    else{
    pointeur = 0;
    }
    
    let stop = setTimeout("ChangerImage()", 20);
    
    test.addEventListener("click", function(e){
    e.preventDefault();
        clearTimeout(stop);
      
    })
};



let button = document.getElementById("bouton-de-lancement");
 button.onclick = ChangerImage;




