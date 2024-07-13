const lista = document.getElementById("menu")
const boton = document.getElementById("menu-button")
let HaClicado = false

boton.addEventListener("click", () => {
    if (HaClicado) {
        lista.classList.remove("Oculto");
        lista.classList.add("Visible")
        HaClicado = false;
      } else {
        lista.classList.add("Oculto");
        HaClicado = true;
      }
})

