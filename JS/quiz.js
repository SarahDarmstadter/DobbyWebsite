const QUESTIONS = [
    {  
        intitule : "Quel âge a Dobby ?",
        rep1 : "3ans",
        rep2: "10 ans",
        rep3: "Il n'a pas d'âge, c'est un être intemporel"
    },
    {
        intitule : "Quelle est la qualité principale de Dobby ?",
        rep1 : "La beauté",
        rep2: "La gentillesse",
        rep3: "La mignonerie"
    },
    {
        intitule : "Quelle est la qualité secondaire de Dobby ?",
        rep1 : "La beauté",
        rep2: "La gentillesse",
        rep3: "La mignonerie"
    },
    {
        intitule : "Dobby est connu pour ?",
        rep1 : "Miauler de manière aussi insupportable que mignone",
        rep2: "Être oppressé par son ombre",
        rep3: "Son pelage plus soyeux que de la soie fraiche"
    },
    {
        intitule : "Si Dobby était une divinité, il serait ?",
        rep1 : "Dyonisos, le dieu bon vivant",
        rep2: "Hades, le dieu des enfers car il est si mignon qu'on meurt devant lui",
        rep3: "Lui même, car c'est un Félin Divin "
    },
    {
        intitule : " Quel est le plat préféré de Dobby ?",
        rep1 : "L'eau du thon",
        rep2: "Le foie cru (ouais je sais ça debecte)",
        rep3: "Les croquettes"
    },
    {
        intitule : "Quelle est l'activité favorite de Dobby ?",
        rep1 : "Dormir",
        rep2: "Manger",
        rep3: "Miauler"
    }
];
 
const REPONSES = ["a", "c", "b", "a", "c", "b","b"];
const correction = [
"3 ans qu'il foule cette Terre et diffuse le bonheur autour de lui", 
"Sa mignorie est sans pareille, tout le monde sait ça", 
"Cet animal merveilleux n'est que gentillesse",
"Bavard, il aime nous faire profiter de son miaou de dramaturge",
"Réponse C. La base enfait.",
"b. Ca me répugne tellement mais bon, c'est une panthère des neiges après tout.",
"b. Il aime dormir et miauler, mais manger, reste son activité de coeur.. et de bourrelets !"
]
let tabResultats = [];
const formQuiz = document.getElementById("form_quiz");
const voirScore = document.getElementById("score");
let scores =[];
const commentaire = document.getElementById("commentaire");


function afficherQuiz(){
    for (let i=0; i < QUESTIONS.length; i++) {

        const questionBloc = document.createElement("div");
        questionBloc.className ="question_bloc";
        formQuiz.appendChild(questionBloc);

        const titre = document.createElement("p");
        titre.classList.add("intitule_question")
        titre.innerHTML = QUESTIONS[i].intitule;

        const propositions = document.createElement("div");
        propositions.classList.add("proposition"); 

        const bonneReponse = document.createElement("p");
        bonneReponse.className = "bonne_reponse";
        bonneReponse.setAttribute("id", `bonne_reponse_${i}`)

        
        const option1 = document.createElement("div");
        option1.className ="option";        
        propositions.appendChild(option1);

        const option2 = document.createElement("div");
        option2.className ="option";
        propositions.appendChild(option2);

        const option3 = document.createElement("div");
        option3.className ="option";
        propositions.appendChild(option3);

        const input1 = document.createElement("input");
        input1.setAttribute('type', 'radio');
        input1.setAttribute('id', 'rep1');
        input1.setAttribute('name',  `${i}` );
        input1.setAttribute('value', 'a');
        input1.className ="bouton_radio";
        option1.appendChild(input1);

       const reponse1 = document.createElement("label");
        reponse1.setAttribute("for", "rep1");
        reponse1.innerHTML = QUESTIONS[i].rep1;
        option1.appendChild(reponse1);

        const input2 = document.createElement("input");
        input2.setAttribute('type', 'radio');
        input2.setAttribute('id', 'rep2');
        input2.setAttribute('name', `${i}`);
        input2.setAttribute('value', 'b');
        input2.className ="bouton_radio";
        option2.appendChild(input2);

        const reponse2 = document.createElement("label");
        reponse2.setAttribute("for", "rep2");
        reponse2.innerHTML = QUESTIONS[i].rep2;
        option2.appendChild(reponse2);

        const input3 = document.createElement("input");
        input3.setAttribute('type', 'radio');
        input3.setAttribute('id', 'rep3');
        input3.setAttribute('name',  `${i}`);
        input3.setAttribute('value', 'c');
        input3.className ="bouton_radio";
        option3.appendChild(input3);
        
        const reponse3 = document.createElement("label");
        reponse3.setAttribute("for", "rep3");
        reponse3.innerHTML = QUESTIONS[i].rep3;
        option3.appendChild(reponse3);

        questionBloc.appendChild(titre);
        questionBloc.appendChild(propositions);
        propositions.appendChild(bonneReponse);
    }
    const boutonValider = document.createElement("button");
    boutonValider.setAttribute('type', "submit");
    boutonValider.setAttribute('id', "bouton_valider");
    boutonValider.className ="bouton_valider";
    boutonValider.innerHTML ="Je valide ces réponses";
    formQuiz.appendChild(boutonValider);
}

afficherQuiz();

formQuiz.addEventListener("submit", (e)=> {
    e.preventDefault();

    for (let i=0; i< QUESTIONS.length; i++) {
        tabResultats.push(document.querySelector(`input[name="${i}"]:checked`).value); 
    }
    voirScore.classList.toggle("show");
    compareReponses(tabResultats);
    tabResultats =[];

});

function compareReponses(tabResultats){
    for (let j=0; j <= tabResultats.length; j++){
        if (tabResultats[j] === REPONSES[j]){
            scores.push(true)
        } else {
            scores.push(false);
        }
    }
    //console.log(scores)
    afficherScores(scores)
    scores= [];
};

function afficherScores(tabCheck) {
    const nbFautes = tabCheck.filter(el => el !== true).length;

    switch(nbFautes) {
        case 0 :
            commentaire.innerHTML = "👏 7/7 👏 BRAVOO 🥳 <br />Un vrai sans faute !<br />Mais ne crois pas Dobby c'est MON chat à MOI !";
        break;
        case 1 : 
            commentaire.innerHTML = " 👍 6/7 C'est pas mal 👍 <br />Quasi un sans faute !<br />Mais tu as encore des lacunes...";
        break;
        case 2 :
            commentaire.innerHTML = " 👈 5/7 Bon. 👉 <br />C'est pas ouf.<br />Peut mieux faire non ?";
        break;
        case 3 : 
            commentaire.innerHTML = " 👎 4/7 Nul 👎 <br />A se demander si tu as déjà vu Dobby ?";
        break; 
        case 4 : 
            commentaire.innerHTML = " 👀 3/7 👎 <br />Tu te permets des grandes choses avec ce score ! <br />A ta place je m'interrogerais sur mes capacités...";
        break;
        case 5 :
            commentaire.innerHTML = `🤡 2/7 🤡 <br />Tu es un 💩. <br />Voilà c'est tout rien à ajouter. <br />J'espère que tu es mortifié.e !`;
        break;
        case 6 : 
            commentaire.innerHTML = " 🤢 0/7 🤮 Score de la honte. <br />J'espère que tu es mortifié.e !";
        break;
        default : 
            "Oupsy, ca bug.. Désolée je débute !"
    }

    boutonRecommencer = document.createElement("button");
    boutonRecommencer.innerHTML = "Je recommence !";
    boutonRecommencer.setAttribute('type', "button");
    boutonRecommencer.setAttribute('id', "bouton_recommencer");
    boutonRecommencer.className ="bouton";
    voirScore.appendChild(boutonRecommencer); 

    boutonRecommencer.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.reload();
    })

    boutonVoirReponses = document.createElement("button");
    boutonVoirReponses.innerHTML = "Voir les réponses !";
    boutonVoirReponses.setAttribute('type', "button");
    boutonVoirReponses.setAttribute('id', "bouton_voir_reponses");
    boutonVoirReponses.className ="bouton";
    voirScore.appendChild(boutonVoirReponses);

    const boutonValider = document.getElementById('bouton_valider');
    boutonValider.setAttribute("disabled", true);

    boutonVoirReponses.addEventListener("click", (e)=> {
        e.preventDefault();
        for (let i=0; i<= QUESTIONS.length; i++) {
        
        bonneReponse = document.getElementById(`bonne_reponse_${i}`);
        bonneReponse.innerHTML = correction[i]; 
        }
    })
}
        
