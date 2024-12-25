const botonRegalo = document.getElementById("botonRegalo");

function mostrarRegalo() {
    // Crear un nuevo elemento div
    const regaloDiv = document.createElement("div");

    // Añadir contenido al div
    regaloDiv.innerHTML = "Voucher por 50 dls para Steam o un libro, te amo :D";

    // Añadir la clase 'regalo' para los estilos
    regaloDiv.classList.add("estilosRegalo");

    // Añadir el div al cuerpo del documento (puedes cambiar esto por otro contenedor)
    document.body.appendChild(regaloDiv);
}

botonRegalo.addEventListener("click", mostrarRegalo);
