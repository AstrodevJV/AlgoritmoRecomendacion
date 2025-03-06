const images = [
    { src: 'Images/fotoModa1.JPG', category: 'Moda' },
    { src: 'Images/fotoModa2.JPG', category: 'Moda' },
    { src: 'Images/fotoModa3.JPG', category: 'Moda' },
    { src: 'Images/fotoModa3.JPG', category: 'Moda' },
    { src: 'Images/fotoModa4.jpg', category: 'Moda' },
    { src: 'Images/fotoModa5.jpg', category: 'Moda' },
    { src: 'Images/fotoModa6.jpg', category: 'Moda' },
    { src: 'Images/fotoModa7.jpg', category: 'Moda' },
    { src: 'Images/fotoModa8.jpg', category: 'Moda' },
    { src: 'Images/fotoModa9.jpg', category: 'Moda' },
    { src: 'Images/fotoModa10.jpg', category: 'Moda' },
    { src: 'Images/fotoMedios1.jpg', category: 'Medios de Comunicacion' },
    { src: 'Images/fotoMedios2.jpg', category: 'Medios de Comunicacion' },
    { src: 'Images/fotoMedios3.jpg', category: 'Medios de Comunicacion' },
    { src: 'Images/fotoMedios4.jpg', category: 'Medios de Comunicacion' },
    { src: 'Images/fotoMedios5.jpg', category: 'Medios de Comunicacion' },
    { src: 'Images/fotoMedios6.jpg', category: 'Medios de Comunicacion' },
    { src: 'Images/fotoMedios7.jpg', category: 'Medios de Comunicacion' },
    { src: 'Images/fotoMedios8.jpg', category: 'Medios de Comunicacion' },
    { src: 'Images/fotoMedios9.jpg', category: 'Medios de Comunicacion' },
    { src: 'Images/fotoMedios10.jpg', category: 'Medios de Comunicacion' },
    { src: 'Images/fotoMusica1.png', category: 'Musica' },
    { src: 'Images/fotoMusica2.png', category: 'Musica' },
    { src: 'Images/fotoMusica3.jpg', category: 'Música' },
    { src: 'Images/fotoMusica4.png', category: 'Musica' },
    { src: 'Images/fotoMusica5.png', category: 'Musica' },
    { src: 'Images/fotoMusica6.png', category: 'Música' },
    { src: 'Images/fotoMusica7.jpg', category: 'Musica' },
    { src: 'Images/fotoMusica8.jpg', category: 'Musica' },
    { src: 'Images/fotoFitness1.jpg', category: 'Fitness' },
    { src: 'Images/fotoFitness2.jpg', category: 'Fitness' },
    { src: 'Images/fotoFitness3.jpg', category: 'Fitness' },
    { src: 'Images/fotoFitness4.jpg', category: 'Fitness' },
    { src: 'Images/fotoFitness5.jpg', category: 'Fitness' },
    { src: 'Images/fotoFitness6.jpg', category: 'Fitness' },
    { src: 'Images/fotoFitness7.jpg', category: 'Fitness' },
    { src: 'Images/fotoFitness8.jpg', category: 'Fitness' },
    { src: 'Images/fotoFitness9.jpg', category: 'Fitness' },
    { src: 'Images/fotoMedios8.jpg', category: 'Fitness' },
    { src: 'Images/fotoMedios9.jpg', category: 'Fitness' },
    { src: 'Images/fotoBienestar1.jpg', category: 'Bienestar' },
    { src: 'Images/fotoBienestar2.jpg', category: 'Bienestar' },
    { src: 'Images/fotoBienestar3.jpg', category: 'Bienestar' },
    { src: 'Images/fotoBienestar4.jpg', category: 'Bienestar' },
    { src: 'Images/fotoBienestar5.jpg', category: 'Bienestar' },
    { src: 'Images/fotoBienestar6.jpg', category: 'Bienestar' },
    { src: 'Images/fotoBienestar7.jpg', category: 'Bienestar' },
    { src: 'Images/fotoBienestar8.jpg', category: 'Bienestar' },
    { src: 'Images/fotoArte1.jpg', category: 'Arte' },
    { src: 'Images/fotoArte2.jpg', category: 'Arte' },
    { src: 'Images/fotoArte3.jpg', category: 'Arte' },
    { src: 'Images/fotoArte4.jpg', category: 'Arte' },
    { src: 'Images/fotoArte5.jpg', category: 'Arte' },
    { src: 'Images/fotoArte6.jpg', category: 'Arte' },
    { src: 'Images/fotoArte7.jpg', category: 'Arte' },
    { src: 'Images/fotoArte6.jpg', category: 'Arte' },
    { src: 'Images/fotoArte8.jpg', category: 'Arte' },
    { src: 'Images/fotoArte9.jpg', category: 'Arte' },
    { src: 'Images/fotoArte10.jpg', category: 'Arte' }
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