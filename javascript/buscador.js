
let animalesCargados = JSON.parse(localStorage.getItem("AnimalesGuardados"));

for(i = 0; i < animalesCargados.length; i++){
  const card = `<div class="card mx-5 my-5" style="width: 18rem;">
  <img src="https://arbolabc.nyc3.cdn.digitaloceanspaces.com/Science/animals/articles/animales-domesticos/cat.jpg" class="card-img-top h-100" alt="...">
  <div class="card-body">
    <h5 class="card-title">${animalesCargados[i].nombre} / ${animalesCargados[i].raza} / ${animalesCargados[i].color}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`

const cardAnimales = document.getElementById("card-conteiner");
cardAnimales.innerHTML+=card

}

