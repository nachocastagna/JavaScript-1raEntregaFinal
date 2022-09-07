class Animal{ //clase generadora de animales con estas caracteristicas
    constructor(nombre, tipo, color, raza){
        this.nombre =  nombre;

        this.tipo = tipo;

        this.color = color;

        this.raza = raza;
    }
} 

const animales = [ //arrays
     
    {nombre:"jacinto",tipo:"gato", color:"gris", raza:"otro"},

    {nombre:"polo",tipo:"perro", color:"blanco", raza:"golden"},

    {nombre:"kalu",tipo:"perro", color:"gris", raza:"golden"},

    {nombre:"roman",tipo:"gato", color:"azul", raza:"siames"},
];

//AGREGAR ANIMAL PERDIDO AL ARRAYS
alert("Aqui podras poner en busqueda tu animal perdido!"); // alert para agregar animales con las siguientes caracateristicas
  
    let nombre = prompt("Nombre del animal");

    let tipo = prompt("Perro - Gato - Otro");

    let color = prompt("Color del animal");

    let raza = prompt("Raza");

    
    let agregar = new Animal(nombre, tipo, color, raza); 

    animales.unshift(agregar);
    
    alert(
        `${nombre} fue agregado a la lista de animales perdidos`); 



let busquedaNombre = prompt("Escriba nombre del animal perdido");

let buscar = animales.find(animal => animal.nombre === busquedaNombre.toLocaleLowerCase());


if(buscar === undefined){
    alert("Animal no encontrado. Lo siento! ")
}
else{
    let mensaje = (`Nombre: ${buscar.nombre}

Tipo: ${buscar.tipo}

Color: ${buscar.color}

Raza: ${buscar.raza}`);

alert(mensaje);}
