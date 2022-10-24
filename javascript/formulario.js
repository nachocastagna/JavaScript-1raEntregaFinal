let contenedor = document.getElementById("contenedor"); //trae desde HTML id "contenedor"
let formulario = document.getElementById("formulario");//trae desde HTML id "formulario"
let animales = document.getElementById("animales");//trae desde HTML id "animales"


const animalesArray = [];
// array o arreglo

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.children;
  const nombre = inputs[0].value ;
  const raza = inputs[1].value ;
  const color = inputs[2].value ;
  const telefono = inputs[3].value ;
  const barrio = inputs[4].value ;

 let condicion = nombre && raza && color && telefono && barrio; // Condicion para agregar cartel si falta completar informacion en formulario

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
      constructor(nombre, raza, color, telefono, barrio){
        this.nombre =  nombre;
        this.raza = raza;
        this.color = color;
        this.telefono = telefono;
        this.barrio = barrio;

      }
    }     
    
    let agregar = new Animal (nombre, raza, color, telefono, barrio);

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