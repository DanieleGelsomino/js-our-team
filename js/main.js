console.log("JS OK!");

/*
    consegna:
    Viene fornito un layout di base in cui è presente *una card di esempio* inserita staticamente nell’html.
    Questa card serve solo come timbro del markup necessario per ottenere
    il risultato finale e *dovrà quindi essere rimossa dall’html*.
    Aggiungere un file js in cui definire *un array di oggetti* che rappresentano i membri del team.
    Ogni membro ha le informazioni necessarie per stampare la relativa card: *Nome, Ruolo e Foto*.
    Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html,
    stampare dinamicamente una card per ogni membro del team.
    BONUS:
    Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team:
    cliccando sul pulsante "add" viene creato un *nuovo oggetto*, il quale viene *inserito nell'array iniziale*
    e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
*/

// Creo array di oggetti che rappresentano membri di un team.
// ogni membro è composto da: nome, ruolo e foto.

const teamMembers = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "img/wayne-barnett-founder-ceo.jpg",
  },

  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "img/angela-caroll-chief-editor.jpg",
  },

  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    nome: "Walter Gordon",
    foto: "img/walter-gordon-office-manager.jpg",
  },

  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "img/angela-lopez-social-media-manager.jpg",
  },

  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "img/scott-estrada-developer.jpg",
  },

  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "img/barbara-ramos-graphic-designer.jpg",
  },
];

console.log(teamMembers);

const containerCard = document.querySelector(".team-container");

// stampare nell' Html una card per ogni membro del team.
// creo funzione per generare le card e le aggiungo nell'html

function generateCard() {
  for (let i = 0; i < teamMembers.length; i++) {
    //   creo teamCard
    const teamCard = document.createElement("div");
    teamCard.className = "team-card";
    containerCard.appendChild(teamCard);

    // creo cardImage
    const cardImage = document.createElement("div");
    cardImage.className = "card-image";
    teamCard.appendChild(cardImage);
    cardImage.innerHTML = `<img src="${teamMembers[i].foto}"/>`;

    // creo cardText
    const cardText = document.createElement("div");
    cardText.className = "card-text";
    teamCard.appendChild(cardText);
    cardText.innerHTML = `<h3>${teamMembers[i].nome}</h3>
    <p>${teamMembers[i].ruolo}</p>`;
  }
}

generateCard();
