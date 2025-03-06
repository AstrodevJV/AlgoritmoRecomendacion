let clave = "12345";
let button = document.getElementById("initialbutton");

button.addEventListener("click", function() {
    let input = document.getElementById("inputCode").value;

    if (input === clave) {
        window.location.href = "ejercicio.html";
    } else {
        alert("Clave incorrecta");
    }
});
