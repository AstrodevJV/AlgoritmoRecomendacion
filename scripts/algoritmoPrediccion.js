const CATEGORIAS = ["Moda", "Medios de comunicación", "Música", "Fitness", "Bienestar", "Arte"];

function predecirGusto(elecciones) {
    let conteo = {};
    CATEGORIAS.forEach(categoria => conteo[categoria] = 0);

    elecciones.forEach(etiqueta => {
        if (CATEGORIAS.includes(etiqueta)) {
            conteo[etiqueta]++;
        }
    });

    let max = Math.max(...Object.values(conteo));
    let mejoresCategorias = Object.keys(conteo).filter(categoria => conteo[categoria] === max);

    // Si hay empate, tomar la categoría más reciente en la selección
    for (let i = elecciones.length - 1; i >= 0; i--) {
        if (mejoresCategorias.includes(elecciones[i])) {
            return elecciones[i];
        }
    }

    return mejoresCategorias[0]; // En caso de empate total, devolver la primera opción
}

// Recuperar selección del usuario
const eleccionesUsuario = JSON.parse(localStorage.getItem("selectedCategories")) || [];

if (eleccionesUsuario.length > 0) {
    const recomendacion = predecirGusto(eleccionesUsuario);
    console.log("Categoría recomendada:", recomendacion);
} else {
    console.log("No hay elecciones guardadas.");
}

const eleccionesUsuario = [
    "Música", "Fitness", "Música", "Arte", "Moda",
    "Música", "Bienestar", "Música", "Fitness", "Arte",
    "Medios de comunicación", "Música", "Moda", "Fitness", "Música"
];

console.log(predecirGusto(eleccionesUsuario));