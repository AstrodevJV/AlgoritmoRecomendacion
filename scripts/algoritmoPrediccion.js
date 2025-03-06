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

    // Si empatan, elegir la categoría más reciente en la lista de elecciones
    for (let i = elecciones.length - 1; i >= 0; i--) {
        if (mejoresCategorias.includes(elecciones[i])) {
            return elecciones[i];
        }
    }

    return mejoresCategorias[0]; // Por si acaso
}

// pruba por si lo quiere ver en el navegador
const eleccionesUsuario = [
    "Música", "Fitness", "Música", "Arte", "Moda",
    "Música", "Bienestar", "Música", "Fitness", "Arte",
    "Medios de comunicación", "Música", "Moda", "Fitness", "Música"
];

console.log("Categoría recomendada:", predecirGusto(eleccionesUsuario));
