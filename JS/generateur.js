

// Générateur de Dobby ! 
let imgArray = [
    {image : "../assets/images/17.jpg", texte : "legende 17"},
    {image :"../assets/images/19.jpeg", texte :"legende 19"},
    {image : "../assets/images/1.jpg", texte :"legende 20"},
    {image : "../assets/images/2.jpg", texte :"legende 2"},
    {image : "../assets/images/3.jpg", texte :"legende 3"},
    {image : "../assets/images/4.jpg", texte :"legende 4"},
    {image : "../assets/images/5.jpg", texte :"legende 5"},
    {image : "../assets/images/6.jpg", texte :"legende 6"}, 
    ];  
let pointeur = 0;
let legende = document.getElementById("legende");
let test = document.getElementById("test");
let timing;

  function lancement(){
    
    if(pointeur < imgArray.length - 1){
    pointeur++;
    }
    else{
    pointeur = 0;
    }

    test.src = imgArray[pointeur].image;
    test.classList.add("lance");
    legende.classList.add("legende_invisible");
    timing = setTimeout("lancement()", 200); 


  }; 

  function stop() {
    clearTimeout(timing);
    legende.classList.add("legende_visible");
    legende.classList.remove("legende_invisible")
    test.classList.remove("lance");

    let imgText = imgArray[Math.floor(Math.random() * imgArray.length)];
    test.src = imgText.image;
    legende.innerHTML = imgText.texte;
  };

  test.addEventListener( "click", function(e){
      e.preventDefault();
      if (test.classList.contains("lance")) {
          stop();
      }

      else {
          lancement();
      }
  });

        







