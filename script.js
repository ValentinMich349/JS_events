let clicCount = 1; // Initialisation du compteur de clics

// Fonctionnalité 1 
document.querySelector('footer').addEventListener('click', function() {
  console.log('clique');
});

// Fonctionnalité 1-bis 
document.querySelector('footer').addEventListener('click', function() {
  console.log(`clic numéro ${clicCount}`);
  clicCount++; // Incrémentation du compteur de clics
});

// Fonctionnalité 2 
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  document.querySelector('#navbarHeader').classList.toggle('collapse');
});

// Fonctionnalité 3
document.querySelectorAll('.btn-group')[0] // Sélection du premier groupe de boutons
  .querySelector('.btn-outline-secondary') // Sélection du bouton "Edit" dans ce groupe
  .addEventListener('click', function() {
    document.querySelectorAll('.card-text')[0].style.color = 'red'; // Sélection du texte de la première card et changement de sa couleur
  });

// Fonctionnalité 4
  const secondCardText = document.querySelectorAll('.card-text')[1];
const secondCardEditBtn = document.querySelectorAll('.btn-outline-secondary')[1];

secondCardEditBtn.addEventListener('click', function() {
  if (secondCardText.style.color === 'green') {
    secondCardText.style.color = '';
  } else {
    secondCardText.style.color = 'green';
  }
});

// Fonctionnalité 5
const navbar = document.querySelector('.navbar');
const bootstrapLink = document.querySelector('link[href*="bootstrap.min.css"]');

navbar.addEventListener('dblclick', function() {
  if (bootstrapLink.disabled) {
    bootstrapLink.disabled = false;
  } else {
    bootstrapLink.disabled = true;
  }
});

// Fonctionnalité 6
// const cards = document.querySelectorAll('.card');

// for (let i = 0; i < cards.length; i++) {
//   const card = cards[i];
//   const cardViewBtn = card.querySelector('.btn-success');
//   const cardText = card.querySelector('.card-text');
//   const cardImg = card.querySelector('.card-img-top');

//   cardViewBtn.addEventListener('mouseover', function() {
//     cardText.style.display = 'none';
//     cardImg.style.width = '20%';
//   });

//   cardViewBtn.addEventListener('mouseout', function() {
//     cardText.style.display = 'block';
//     cardImg.style.width = '';
//   });
// }


const viewBtns = document.querySelectorAll('.btn-success');

viewBtns.forEach((btn) => {
  const card = btn.closest('.card');
  const img = card.querySelector('img');
  const text = card.querySelector('.card-text');

  btn.addEventListener('mouseenter', () => {
    img.style.width = '20%';
    text.style.display = 'none';
  });

  btn.addEventListener('mouseleave', () => {
    img.style.width = '';
    text.style.display = '';
  });
});

// Fonctionnalité 7

const btnRight = document.querySelector('.btn-secondary');
const cardContainer = document.querySelector('.album.py-5.bg-light .row');

btnRight.addEventListener('click', function() {
  const lastCard = cardContainer.lastElementChild;
  cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
});


// Fonctionnalité 8

// const prevBtn = document.querySelector('.jumbotron-heading a.btn.btn-primary.my-2');

// prevBtn.addEventListener('click', function(event) {
//   event.preventDefault(); // empêche le comportement par défaut du lien

//   const firstCard = cardContainer.firstElementChild;
//   const lastCard = cardContainer.lastElementChild;
//   cardContainer.insertBefore(firstCard, lastCard.nextSibling);
// });
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne le bouton bleu "<=="
    const buttonLeft = document.querySelector('.btn-primary');
  
    // Ajoute un événement de clic sur le bouton
    buttonLeft.addEventListener('click', (event) => {
      // Empêche le comportement par défaut du lien
      event.preventDefault();
  
      // Sélectionne le conteneur des cartes
      const cardContainer = document.querySelector('.album .row');
  
      // Sélectionne la première carte
      const firstCard = cardContainer.querySelector('.col-md-4:first-child');
  
      // Déplace la première carte à la fin du conteneur des cartes
      cardContainer.appendChild(firstCard);
    });
  });
  

// Fonctionnalité 9

const logo = document.querySelector('.navbar-brand');

logo.addEventListener('keypress', function(event) {
  const body = document.querySelector('body');
  body.className = ''; // retire toutes les classes

  switch (event.key) {
    case 'a':
      body.classList.add('col-4');
      break;
    case 'y':
      body.classList.add('col-4', 'offset-md-4');
      break;
    case 'p':
      body.classList.add('col-4', 'offset-md-8');
      break;
    case 'b':
      // ne rien faire, les classes ont déjà été retirées
      break;
    default:
      // ne rien faire
  }
});
