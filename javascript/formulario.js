let contenedor = document.getElementById("contenedor"); //trae desde HTML id "contenedor"
let formulario = document.getElementById("formulario");//trae desde HTML id "formulario"
let animales = document.getElementById("animales");//trae desde HTML id "animales"

const animalesArray = [] // array o arreglo

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

 let condicion = nombre && raza && tipo && color && telefono && email && provincia && barrio; // Condicion para agregar cartel si falta completar informacion en formulario

  if(condicion === ""){ 
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Falta completar informacion',
    })
    
  }else{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu animal ha sido agregado con exito',
      showConfirmButton: false,
      timer: 2500
      })

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

    let agregar = new Animal (nombre, raza, tipo, color, telefono, email, provincia, barrio);

    animalesArray.push(agregar); // se agrega animal al arreglo o array

    localStorage.setItem("AnimalesGuardados", JSON.stringify(animalesArray));
    
  }
}
);

/* function getAnimalesArray() {
  if(localStorage.setItem("AnimalesGuardados", JSON.stringify(animalesArray))  == null){
    animalesArray =  [];
  }else{
    animales = [localStorage.getItem("AnimalesGuardados", JSON.parse(animalesArray))]
  }
  return animalesArray;
}

 */