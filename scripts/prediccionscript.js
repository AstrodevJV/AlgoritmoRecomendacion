document.addEventListener("DOMContentLoaded", () => {
    const resultadoCarta = document.getElementById("resultadoCarta");

    const categoriaRecomendada = localStorage.getItem("categoriaRecomendada");
    const imagenesRonda10 = JSON.parse(localStorage.getItem("imagenesRonda10")) || [];

    if (!categoriaRecomendada || imagenesRonda10.length === 0) {
        resultadoCarta.innerHTML = "<p>No hay datos suficientes para mostrar una recomendación.</p>";
        return;
    }

    const imagenRecomendada = imagenesRonda10.find(img => img.categoria === categoriaRecomendada);

    if (imagenRecomendada) {
        resultadoCarta.innerHTML = `
            <img src="${imagenRecomendada.url}" alt="Recomendación">
            <p>Tu última elección pudo ser</p>
        `;
    } else {
        resultadoCarta.innerHTML = `<p>No se encontró una imagen que coincida con la categoría recomendada: ${categoriaRecomendada}.</p>`;
    }

    var h1 = document.getElementById("principal");
    h1.innerHTML = `Creemos que te gusta: ${categoriaRecomendada}`;

});
