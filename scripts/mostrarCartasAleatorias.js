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
document.addEventListener("DOMContentLoaded", () => {
    let seleccionCount = 0; // Contador de selecciones

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
                // Quitar selección previa
                document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
                // Marcar nueva selección
                card.classList.add('selected');
            });
        });

        // Verificar si es la décima ronda y guardar imágenes con sus categorías
        let seleccionCount = JSON.parse(localStorage.getItem("selectedCategories"))?.length || 0;
        if (seleccionCount === 9) { // En la décima ronda
            const imagenesRonda10 = selectedCards.map(img => ({
                categoria: img.category,
                url: img.src
            }));

            localStorage.setItem("imagenesRonda10", JSON.stringify(imagenesRonda10));
            console.log("📸 Imágenes de la ronda 10 guardadas con categoría:", imagenesRonda10);
        }
    }

    document.getElementById('confirmSelection').addEventListener('click', () => {
        const selectedCard = document.querySelector('.card.selected');

        if (selectedCard) {
            let storedCategories = JSON.parse(localStorage.getItem("selectedCategories")) || [];
            storedCategories.push(selectedCard.dataset.category);
            if (seleccionCount === 10) {
                storedCategories.pop();
            }
            localStorage.setItem("selectedCategories", JSON.stringify(storedCategories));

            seleccionCount++;
            console.log(`Selección ${seleccionCount}:`, selectedCard.dataset.category);
            console.log("Historial de categorías guardadas:", storedCategories);

            if (seleccionCount >= 10) {
                obtenerRecomendacion();
            } else {
                displayCards(); // Mostrar nuevas cartas
            }
        } else {
            console.log("No se ha seleccionado ninguna categoría.");
        }
    });

    function obtenerRecomendacion() {
        let storedCategories = JSON.parse(localStorage.getItem("selectedCategories")) || [];
        const recomendacion = predecirGusto(storedCategories);
        console.log("🔥 Categoría recomendada:", recomendacion);


        localStorage.setItem("categoriaRecomendada", recomendacion);


        window.location.href = "prediccion.html";


        localStorage.removeItem("selectedCategories");
        seleccionCount = 0;
    }

    displayCards();
});
