let buscador = document.getElementById("buscador");
let perdidos = document.getElementById("perdidos");

let animalesCargados = JSON.parse(localStorage.getItem("animales"));

buscador.addEventListener("click",() => {
    animalesCargados.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item;
    perdidos.append(li);
  });
})
