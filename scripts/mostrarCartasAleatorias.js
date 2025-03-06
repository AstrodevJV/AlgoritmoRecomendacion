const images = [
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA1.jpg', category: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA2.jpg', category: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA3.jpg', category: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA3.jpg', category: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA4.jpg', category: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA5.jpg', category: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA6.jpg', category: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoModa7.jpg', category: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoModa8.jpg', category: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoModa9.jpg', category: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoModa10.jpg', category: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios1.jpg', category: 'Medios de Comunicacion' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios2.jpg', category: 'Medios de Comunicacion' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios3.jpg', category: 'Medios de Comunicacion' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios4.jpg', category: 'Medios de Comunicacion' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios5.jpg', category: 'Medios de Comunicacion' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios6.jpg', category: 'Medios de Comunicacion' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios7.jpg', category: 'Medios de Comunicacion' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios8.jpg', category: 'Medios de Comunicacion' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios9.jpg', category: 'Medios de Comunicacion' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios10.jpg', category: 'Medios de Comunicacion' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica1.png', category: 'Musica' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica2.png', category: 'Musica' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica3.jpg', category: 'Música' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica4.png', category: 'Musica' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica5.png', category: 'Musica' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica6.png', category: 'Música' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica7.jpg', category: 'Musica' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica8.jpg', category: 'Musica' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness1.jpg', category: 'Fitness' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness2.jpg', category: 'Fitness' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness3.jpg', category: 'Fitness' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness4.jpg', category: 'Fitness' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness5.jpg', category: 'Fitness' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness6.jpg', category: 'Fitness' },    
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness8.jpg', category: 'Fitness' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness9.jpg', category: 'Fitness' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoBienestar1.jpg', category: 'Bienestar' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoBienestar2.jpg', category: 'Bienestar' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoBienestar3.jpg', category: 'Bienestar' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoBienestar4.jpg', category: 'Bienestar' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoArte1.jpg', category: 'Arte' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoArte2.jpg', category: 'Arte' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoArte3.jpg', category: 'Arte' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoArte4.jpg', category: 'Arte' }

];

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
        // Evita el caché agregando un parámetro único a la URL
        img.src = imageObj.src + "?t=" + new Date().getTime();
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

