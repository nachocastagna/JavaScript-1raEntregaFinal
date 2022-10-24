//PRACTICA CON LOCALSTORAGE

let animalesCargados = JSON.parse(localStorage.getItem("AnimalesGuardados"));

for(i = 0; i < animalesCargados.length; i++){
  const card = `<div class="card mx-5 my-5" style="width: 18rem;">
  <img src="https://arbolabc.nyc3.cdn.digitaloceanspaces.com/Science/animals/articles/animales-domesticos/cat.jpg" class="card-img-top h-100" alt="...">
  <div class="card-body">
    <h5 class="card-title">${animalesCargados[i].nombre} / ${animalesCargados[i].raza} / ${animalesCargados[i].color}</h5>
    <p class="card-text"></p>
    <button id="encontrado" class="btn btn-primary">Contactar al dueño</button>
    <button id="eliminar" class="btn btn-primary">Encontrado</button>
  </div>
</div>`

const cardAnimales = document.getElementById("card-conteiner");
cardAnimales.innerHTML+=card
let encontrado = document.getElementById("encontrado");  

    encontrado.addEventListener("click", function(){
    let animalesCargados = JSON.parse(localStorage.getItem("AnimalesGuardados"));
    Swal.fire(animalesCargados)});



    let eliminar = document.getElementById("eliminar");
    eliminar.addEventListener("click", function(){  
    Swal.fire({
      title: 'Quieres eliminar de la lista de animales perdidos?',
      text: "Si eliminas, daremos por encontrado el animal",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, lo encontre!'
      }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Animal eliminado!',
          'Estamos muy felices',
          'success'
          )}})
        });

  };
;


//Fetch

/* const traerDatos = async () => {
  const lista = document.getElementById("card-conteiner");
  
  try {
    const response = await fetch("../datos/datos.json");
    const data = await response.json();

    data.forEach((publicacion) => {
      const card = `<div class="card">
      <img src="${publicacion.imagen}" alt="...">
      <div class="card-body">
        <h5 class="card-title">${publicacion.nombre} / ${publicacion.raza} / ${publicacion.color} / ${publicacion.tipo}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button id="encontrado" class="btn btn-primary">Contactar al dueño</button>
        <button id="eliminar" class="btn btn-primary">Encontrado</button>
      </div>
    </div>`

    const cardAnimales = document.getElementById("card-conteiner");
    cardAnimales.innerHTML+=card

    let encontrado = document.getElementById("encontrado");  

    encontrado.addEventListener("click", function(){
    let animalesCargados = JSON.parse(localStorage.getItem("AnimalesGuardados"));
    Swal.fire(animalesCargados)});



    let eliminar = document.getElementById("eliminar");
    eliminar.addEventListener("click", function(){  
    Swal.fire({
      title: 'Quieres eliminar de la lista de animales perdidos?',
      text: "Si eliminas, daremos por encontrado el animal",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, lo encontre!'
      }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Animal eliminado!',
          'Estamos muy felices',
          'success'
          )}})
        });

  });
} catch (error) {
  console.log(error);
  }
};

traerDatos(); */

