document.addEventListener('DOMContentLoaded', () => {
  // Card options
  const cardArray = [
      {
          name: 'A',
          img: 'assets/A.png'
      },
      {
          name: 'B',
          img: 'assets/B.png'
      },
      {
          name: 'C',
          img: 'assets/C.png'
      },
      {
          name: 'D',
          img: 'assets/D.png'
      },
      {
          name: 'E',
          img: 'assets/E.png'
      },
      {
          name: 'F',
          img: 'assets/F.png'
      },
      {
        name: 'G',
        img: 'assets/G.png'
    },
    {
      name: 'H',
      img: 'assets/H.png'
    },
    {
      name: 'A',
      img: 'assets/A.png'
  },
  {
      name: 'B',
      img: 'assets/B.png'
  },
  {
      name: 'C',
      img: 'assets/C.png'
  },
  {
      name: 'D',
      img: 'assets/D.png'
  },
  {
      name: 'E',
      img: 'assets/E.png'
  },
  {
      name: 'F',
      img: 'assets/F.png'
  },
  {
    name: 'G',
    img: 'assets/G.png'
},
{
  name: 'H',
  img: 'assets/H.png'
},
  ];

  cardArray.sort(() => 0.5 - Math.random());

  // Create board
  const grid = document.querySelector('.grid-container');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  const resultDisplay = document.querySelector('#result');

  function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
          let card = document.createElement('img');
          card.setAttribute('src', 'assets/blank.png');
          card.setAttribute('data-id', i);
          card.addEventListener('click', flipCard);
          grid.appendChild(card);
      }
  }

  // Flip card
  function flipCard() {
      let cardId = this.getAttribute('data-id');
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img);

      if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500);

      }
  }

  // Check for matches
  function checkForMatch() {
      let cards = document.querySelectorAll('img');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];

      if (optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'assets/blank.png');
          cards[optionTwoId].setAttribute('src', 'assets/blank.png');
          alert('You have clicked the same image!');
      } else if (cardsChosen[0] === cardsChosen[1]) {
         
          cards[optionOneId].setAttribute('click', flipCard);
          cards[optionTwoId].setAttribute('click', flipCard);
          cards[optionOneId].removeEventListener('click', flipCard);
          cards[optionTwoId].removeEventListener('click', flipCard);
          cardsWon.push(cardsChosen);
      } else {
          cards[optionOneId].setAttribute('src', 'assets/blank.png');
          cards[optionTwoId].setAttribute('src', 'assets/blank.png');
        
      }

      cardsChosen = [];
      cardsChosenId = [];
      resultDisplay.textContent = cardsWon.length;

      if  (cardsWon.length === cardArray.length/2) {
          resultDisplay.textContent = 'Congratulations! all pairs have been successfully matched!';
      }
  }


  createBoard();
});


  // restart button
  const restart = document.getElementById("restart");
  restart.addEventListener("click", () => {
      window.location.href = "index.html"; 
  });





