let contenedor = document.getElementById("contenedor"); //trae desde HTML id "contenedor"
let formulario = document.getElementById("formulario");//trae desde HTML id "formulario"
let animales = document.getElementById("animales");//trae desde HTML id "animales"

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


  class Animal{ //clase generadora de animales con estas caracteristicas
    constructor(nombre, raza, tipo, color, telefono, email, provincia, barrio){
        this.nombre =  nombre;
        this.raza = raza;
        this.tipo = tipo;
        this.color = color;
        this.telefono = telefono;
        this.email = email;
        this.provincia = provincia;
        this.barrio = barrio;
    }
  } 
  
  animalesArray = [] // array o arreglo
  
  let agregar = new Animal (nombre, raza, tipo, color, telefono, email, provincia, barrio);
  
  animalesArray.push(agregar); // se agrega animal al arreglo o array
  
  localStorage.setItem("ANIMAL", JSON.stringify(animalesArray)); // se guarda en localStorage 

  let condicion = nombre && raza && tipo && color && telefono && email && provincia && barrio; // Condicion para agregar cartel si falta completar informacion en formulario

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




