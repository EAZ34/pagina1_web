// Función que genera un elemento HTML reutilizable
function generarElemento() {
    var elemento = document.createElement('p');
    elemento.textContent = 'Este es un elemento HTML reutilizable';
    return elemento;
}


var miElemento = generarElemento();
document.body.appendChild(miElemento);