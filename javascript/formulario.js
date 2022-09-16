let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.children;

  const nombre = inputs[0].value ;
  const raza = inputs[1].value ;
  const tipo = inputs[2].value ;
  const color = inputs[3].value ;
  const telefono = inputs[4].value ;
  const email = inputs[5].value ;
  const provincia = inputs[6].value ;
  const barrio = inputs[7].value ;

  let condicion = nombre && raza && tipo && color && telefono && email && provincia && barrio;

  if(condicion === ""){
    contenedor.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = "Falta completar informacíon";
    div.className = "letraAlerta";
    contenedor.append(div);
    console.log(inputs);
  }else{
    contenedor.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = "Animal agregado con exito";
    div.className = "letraAgregado";
    contenedor.append(div);
    console.log(inputs);
    }
  }
);


/* function envioFormulario(){
    let animal = document.getElementById("animales");
    let infomacionRecopilada = document.getElementsByClassName('texto');
    const agregado = [];
    for(let i = 0; i < infomacionRecopilada.length; i++){
        agregado[i] = ` ${infomacionRecopilada[i].value}  `;
      }
        animal.innerHTML += ` ${agregado}<br>`}   */