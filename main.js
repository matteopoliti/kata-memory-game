const img = [
    {
        "id": 1,
        "media": "alien.png",
    },
    {
        "id": 2,
        "media": "bug.png",
    },
    {
        "id": 3,
        "media": "duck.png",
    },
    {
        "id": 4,
        "media": "rocket.png",
    },
    {
        "id": 5,
        "media": "spaceship.png",
    },
    {
        "id": 6,
        "media": "tiktac.png",
    },
    {
        "id": 1,
        "media": "alien.png",
    },
    {
        "id": 2,
        "media": "bug.png",
    },
    {
        "id": 3,
        "media": "duck.png",
    },
    {
        "id": 4,
        "media": "rocket.png",
    },
    {
        "id": 5,
        "media": "spaceship.png",
    },
    {
        "id": 6,
        "media": "tiktac.png",
    }
];

let firstCard = "";
let secondCard = "";
let counter = 0;

document.addEventListener("DOMContentLoaded", (event) => {

    const cardsContainer = document.querySelector(".container .cards");
    

    shuffleArray(img)

    for(let i = 0; i < img.length; i++){
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = img[i].id;
        cardElement.innerHTML = `<img src="./images/${img[i].media}" id="front"              alt="front-card">`;
        cardsContainer.appendChild(cardElement);
    }

    const cards = document.querySelectorAll(".cards .card");
                        
    
    cards.forEach((card)=>{
        card.addEventListener("click", ()=>{
            card.classList.add("clicked")
            if(counter === 0){
                firstCard = card.getAttribute("data-id");
                counter++;
            }else{
                secondCard = card.getAttribute("data-id");
                counter = 0;

                if (firstCard === secondCard) {
                    const correctCards = document.querySelectorAll(".card[data-id='" + firstCard + "']");

                    if (correctCards.length > 0) {
                        for (const card of correctCards) {
                            card.classList.add("checked");
                            card.classList.remove("clicked");
                        }
                    }
                }else{
                    const incorrectCards = document.querySelectorAll(".card.clicked");
                    const errCounter = document.querySelector(".info .err-counter"); 

                    if (incorrectCards.length > 0) {
                        for (const card of incorrectCards) {
                            card.classList.add("shake");
                            setTimeout(()=>{
                                card.classList.remove("shake");
                                card.classList.remove("clicked");
                            }, 800)
                        }
                    }
                }
            }

            
        })
    })
});

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

