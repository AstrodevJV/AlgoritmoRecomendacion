let contador = 1;
const h2Contador = document.getElementById("contador");

const images = [
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA1.jpg', category: 'Moda', name: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA2.jpg', category: 'Moda', name: 'Moda contenporánea' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA3.jpg', category: 'Moda', name: 'Métricas de la moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA3.jpg', category: 'Moda', name: 'Métricas de la moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA4.jpg', category: 'Moda', name: 'Moda formal' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA5.jpg', category: 'Moda', name: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMODA6.jpg', category: 'Moda', name: 'Diseño de moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoModa7.jpg', category: 'Moda', name: 'Métricas de la moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoModa8.jpg', category: 'Moda', name: 'Invierno' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoModa9.jpg', category: 'Moda', name: 'Moda' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoModa10.jpg', category: 'Moda', name: 'Fashion' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios1.jpg', category: 'Medios de Comunicacion', name: 'Fotografía' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios2.jpg', category: 'Medios de Comunicacion', name: 'Periodismo' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios3.jpg', category: 'Medios de Comunicacion', name: 'Cámara' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios4.jpg', category: 'Medios de Comunicacion', name: 'Entrevista' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios5.jpg', category: 'Medios de Comunicacion', name: 'Podcast' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios6.jpg', category: 'Medios de Comunicacion', name: 'Video' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios7.jpg', category: 'Medios de Comunicacion', name: 'Discurso' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios8.jpg', category: 'Medios de Comunicacion', name: 'Entrevista' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios9.jpg', category: 'Medios de Comunicacion', name: 'Periodismo' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMedios10.jpg', category: 'Medios de Comunicacion', name: 'Entrevista' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica1.png', category: 'Musica', name: 'Salomón Villada' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica2.png', category: 'Musica', name: 'Blessd' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica3.jpg', category: 'Música', name: 'J Balvin' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica4.png', category: 'Musica', name: 'Bad Bunny' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica5.png', category: 'Musica', name: 'Maluma' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica6.png', category: 'Música', name: 'Karol G' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica7.jpg', category: 'Musica', name: 'Rauw Alejandro' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoMusica8.jpg', category: 'Musica', name: 'Camilo' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness1.jpg', category: 'Fitness', name: 'Ejercicio' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness2.jpg', category: 'Fitness', name: 'Ejercicio' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness3.jpg', category: 'Fitness', name: 'Pesas' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness4.jpg', category: 'Fitness', name: 'Yoga' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness5.jpg', category: 'Fitness', name: 'Ejercicio' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness6.jpg', category: 'Fitness', name: 'Danza' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness8.jpg', category: 'Fitness', name: 'Ejercicio' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoFitness9.jpg', category: 'Fitness', name: 'Fitness' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoBienestar1.jpg', category: 'Bienestar', name: 'Brain Training' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoBienestar2.jpg', category: 'Bienestar', name: 'Inteligencia emocional' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoBienestar3.jpg', category: 'Bienestar', name: 'Emprendimiento' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoBienestar4.jpg', category: 'Bienestar', name: 'Meditación' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoArte1.jpg', category: 'Arte', name: 'Van Gogh' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoArte2.jpg', category: 'Arte', name: 'Sebastiano Ricci' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoArte3.jpg', category: 'Arte', name: 'Instrumentos' },
    { src: 'https://astrodevjv.github.io/AlgoritmoRecomendacion/Images/fotoArte4.jpg', category: 'Arte', name: 'Arte' }
];

document.addEventListener("DOMContentLoaded", () => {
    let seleccionCount = JSON.parse(localStorage.getItem("selectedCategories"))?.length || 0;

    function getMostSelectedCategory() {
        const storedCategories = JSON.parse(localStorage.getItem("selectedCategories")) || [];
        if (storedCategories.length === 0) return null;

        const categoryCount = storedCategories.reduce((acc, category) => {
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        }, {});

        return Object.keys(categoryCount).reduce((a, b) => (categoryCount[a] > categoryCount[b] ? a : b));
    }

    function getUniqueCategoryCards() {
        const categoryMap = {};
        images.forEach(img => {
            if (!categoryMap[img.category]) {
                categoryMap[img.category] = [];
            }
            categoryMap[img.category].push(img);
        });

        let uniqueCards = [];
        let usedCategories = new Set();
        let categories = Object.keys(categoryMap).sort(() => Math.random() - 0.5);

        for (let i = 0; i < categories.length && uniqueCards.length < 4; i++) {
            if (!usedCategories.has(categories[i])) {
                const categoryImages = categoryMap[categories[i]];
                const randomImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
                uniqueCards.push(randomImage);
                usedCategories.add(categories[i]);
            }
        }

        // Si es la ronda 10, aseguramos que haya una imagen de la categoría más seleccionada
        if (seleccionCount === 9) {
            const mostSelectedCategory = getMostSelectedCategory();
            if (mostSelectedCategory && !usedCategories.has(mostSelectedCategory)) {
                const categoryImages = categoryMap[mostSelectedCategory];
                if (categoryImages.length > 0) {
                    const guaranteedImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
                    uniqueCards.pop(); // Quitamos la última imagen para hacer espacio
                    uniqueCards.push(guaranteedImage);
                    usedCategories.add(mostSelectedCategory);
                }
            }
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
            categoryLabel.textContent = imageObj.name;
            categoryLabel.classList.add('category-label');

            card.appendChild(img);
            card.appendChild(categoryLabel);
            cardContainer.appendChild(card);

            card.addEventListener('click', () => {
                document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        });

        if (seleccionCount === 9) {
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
            localStorage.setItem("selectedCategories", JSON.stringify(storedCategories));

            seleccionCount++;
            console.log(`Selección ${seleccionCount}:`, selectedCard.dataset.category);
            console.log("Historial de categorías guardadas:", storedCategories);

            contador++;
            h2Contador.innerHTML = `${contador}/10`;

            if (seleccionCount >= 10) {
                obtenerRecomendacion();
            } else {
                displayCards();
            }
        } else {
            console.log("No se ha seleccionado ninguna categoría.");
        }
    });

    function obtenerRecomendacion() {
        let storedCategories = JSON.parse(localStorage.getItem("selectedCategories")) || [];
        const recomendacion = getMostSelectedCategory();
        console.log("🔥 Categoría recomendada:", recomendacion);

        localStorage.setItem("categoriaRecomendada", recomendacion);
        window.location.href = "prediccion.html";
        localStorage.removeItem("selectedCategories");
        seleccionCount = 0;
    }

    displayCards();
});
