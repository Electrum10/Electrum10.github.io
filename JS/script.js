const QuienSoyProgramación = document.getElementById("QuienSoyProgramación");
const QuienSoyFotografia = document.getElementById("QuienSoyFotografia");
const QuienSoySEO = document.getElementById("QuienSoySEO");
const BotónProgramacion = document.getElementById("BotónProgramacion");
const BotónFotografia = document.getElementById("BotónFotografia");
const BotónSEO = document.getElementById("BotónSEO");
const CajaProgramación = document.getElementById("Programacion");
const CajaFotografia = document.getElementById("Fotografia");

document.addEventListener("DOMContentLoaded", () => {
    Fotografia();
})

function Programacion() {
    QuienSoyProgramación.style.display = "grid";
    QuienSoyFotografia.style.display = "none";
    QuienSoySEO.style.display = "none";
    CajaProgramación.style.display = "contents";
    CajaFotografia.style.display = "none";
}

function Fotografia() {
    QuienSoyProgramación.style.display = "none";
    QuienSoyFotografia.style.display = "grid";
    QuienSoySEO.style.display = "none";
    CajaProgramación.style.display = "none";
    CajaFotografia.style.display = "contents";
}

function SEO() {
    QuienSoyProgramación.style.display = "none";
    QuienSoyFotografia.style.display = "none";
    QuienSoySEO.style.display = "grid";
    CajaProgramación.style.display = "none";
}

BotónProgramacion.addEventListener("click", Programacion);
BotónFotografia.addEventListener("click", Fotografia)
BotónSEO.addEventListener("click", SEO);