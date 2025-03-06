const images = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg',
    'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg'
];

function getRandomCards() {
    const shuffled = images.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
}

function displayCards() {
    const cardContainer = document.getElementById('cardContainer');
    const selectedCards = getRandomCards();
    cardContainer.innerHTML = '';

    selectedCards.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Carta';
        card.appendChild(img);
        cardContainer.appendChild(card);
    });
}

displayCards();