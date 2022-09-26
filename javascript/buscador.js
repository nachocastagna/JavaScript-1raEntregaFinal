let buscador = document.getElementById("buscador");
let perdidos = document.getElementById("perdidos");

let animalesCargados = JSON.parse(localStorage.getItem("animales"));

buscador.addEventListener("click",() => {
    perdidos.innerHTML = ""
    animalesCargados.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = [item.nombre, item.raza, item.tipo, item.color, item.telefono, item.email, item.provincia, item.barrio];
    perdidos.append(li);
  });
})
