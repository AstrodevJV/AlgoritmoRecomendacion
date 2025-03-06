const images = [
    { src: 'images/fotoModa1.JPG', category: 'Moda' },
    { src: 'images/fotoModa2.JPG', category: 'Moda' },
    { src: 'images/fotoModa3.JPG', category: 'Moda' },
    { src: 'images/fotoModa3.JPG', category: 'Moda' },
    { src: 'images/fotoModa4.jpg', category: 'Moda' },
    { src: 'images/fotoModa5.jpg', category: 'Moda' },
    { src: 'images/fotoModa6.jpg', category: 'Moda' },
    { src: 'images/fotoModa7.jpg', category: 'Moda' },
    { src: 'images/fotoModa8.jpg', category: 'Moda' },
    { src: 'images/fotoModa9.jpg', category: 'Moda' },
    { src: 'images/fotoModa10.jpg', category: 'Moda' },
    { src: 'images/fotoMedios1.jpg', category: 'Medios de Medios' },
    { src: 'images/fotoMedios2.jpg', category: 'Medios de Medios' },
    { src: 'images/fotoMedios3.jpg', category: 'Medios de Medios' },
    { src: 'images/fotoMedios4.jpg', category: 'Medios de Medios' },
    { src: 'images/fotoMedios5.jpg', category: 'Medios de Medios' },
    { src: 'images/fotoMedios6.jpg', category: 'Medios de Medios' },
    { src: 'images/fotoMedios7.jpg', category: 'Medios de Medios' },
    { src: 'images/fotoMedios8.jpg', category: 'Medios de Medios' },
    { src: 'images/fotoMedios9.jpg', category: 'Medios de Medios' },
    { src: 'images/fotoMedios10.jpg', category: 'Medios de Medios' },
    { src: 'images/fotoMusica1.png', category: 'Musica' },
    { src: 'images/fotoMusica2.png', category: 'Musica' },
    { src: 'images/fotoMusica3.jpg', category: 'Música' },
    { src: 'images/fotoMusica4.png', category: 'Musica' },
    { src: 'images/fotoMusica5.png', category: 'Musica' },
    { src: 'images/fotoMusica6.png', category: 'Música' },
    { src: 'images/fotoMusica7.jpg', category: 'Musica' },
    { src: 'images/fotoMusica8.jpg', category: 'Musica' },
    { src: 'images/fotoFitness1.jpg', category: 'Fitness' },
    { src: 'images/fotoFitness2.jpg', category: 'Fitness' },
    { src: 'images/fotoFitness3.jpg', category: 'Fitness' },
    { src: 'images/fotoFitness4.jpg', category: 'Fitness' },
    { src: 'images/fotoFitness5.jpg', category: 'Fitness' },
    { src: 'images/fotoFitness6.jpg', category: 'Fitness' },
    { src: 'images/fotoFitness7.jpg', category: 'Fitness' },
    { src: 'images/fotoFitness8.jpg', category: 'Fitness' },
    { src: 'images/fotoFitness9.jpg', category: 'Fitness' },
    { src: 'images/fotoMedios8.jpg', category: 'Fitness' },
    { src: 'images/fotoMedios9.jpg', category: 'Fitness' },
    { src: 'images/fotoBienestar1.jpg', category: 'Bienestar' },
    { src: 'images/fotoBienestar2.jpg', category: 'Bienestar' },
    { src: 'images/fotoBienestar3.jpg', category: 'Bienestar' },
    { src: 'images/fotoBienestar4.jpg', category: 'Bienestar' },
    { src: 'images/fotoBienestar5.jpg', category: 'Bienestar' },
    { src: 'images/fotoBienestar6.jpg', category: 'Bienestar' },
    { src: 'images/fotoBienestar7.jpg', category: 'Bienestar' },
    { src: 'images/fotoBienestar8.jpg', category: 'Bienestar' },
    { src: 'images/fotoArte1.webp', category: 'Arte' },
    { src: 'images/fotoArte2.jpg', category: 'Arte' },
    { src: 'images/fotoArte3.jpg', category: 'Arte' },
    { src: 'images/fotoArte4.jpg', category: 'Arte' },
    { src: 'images/fotoArte5.jpg', category: 'Arte' },
    { src: 'images/fotoArte6.jpg', category: 'Arte' },
    { src: 'images/fotoArte7.jpg', category: 'Arte' },
    { src: 'images/fotoArte6.jpg', category: 'Arte' },
    { src: 'images/fotoArte8.jpg', category: 'Arte' },
    { src: 'images/fotoArte9.jpg', category: 'Arte' },
    { src: 'images/fotoArte10.jpg', category: 'Arte' }
];

function getUniqueCategoryCards() {
    const categoryMap = {};
    images.forEach(img => {
        if (!categoryMap[img.category]) {
            categoryMap[img.category] = [];
        }
        categoryMap[img.category].push(img);
    });

    const uniqueCards = [];
    const categories = Object.keys(categoryMap).sort(() => Math.random() - 0.5);

    for (let i = 0; i < categories.length && uniqueCards.length < 4; i++) {
        const categoryImages = categoryMap[categories[i]];
        const randomImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
        uniqueCards.push(randomImage);
    }

    return uniqueCards;
}

function displayCards() {
    const cardContainer = document.getElementById('cardContainer');
    const selectedCards = getUniqueCategoryCards();
    cardContainer.innerHTML = '';

    selectedCards.forEach(imageObj => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.selected = "false";
        card.dataset.category = imageObj.category;

        const img = document.createElement('img');
        img.src = imageObj.src;
        img.alt = 'Carta';

        const categoryLabel = document.createElement('p');
        categoryLabel.textContent = imageObj.category;
        categoryLabel.classList.add('category-label');

        card.appendChild(img);
        card.appendChild(categoryLabel);
        cardContainer.appendChild(card);

        card.addEventListener('click', () => {
            const isSelected = card.dataset.selected === "true";
            card.dataset.selected = isSelected ? "false" : "true";
            card.classList.toggle('selected', !isSelected);
        });
    });
}

document.getElementById('confirmSelection').addEventListener('click', () => {
    const selectedCards = document.querySelectorAll('.card[data-selected="true"]');
    const selectedCategories = new Set();
    selectedCards.forEach(card => selectedCategories.add(card.dataset.category));
    document.getElementById('selectedCategories').textContent = "Categorías seleccionadas: " + Array.from(selectedCategories).join(', ');
});

displayCards();