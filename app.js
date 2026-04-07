"use strict";
function saludar() {
    let nombre = document.getElementById("nombre").value;
    document.getElementById("resultado").innerText = "Hola, " + nombre;
}
