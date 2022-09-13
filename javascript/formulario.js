let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.children;

  if(!inputs[4].value.includes("@")){
    contenedor.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = "Email no válido";
    div.className = "rojo";
    contenedor.append(div);
    console.log(inputs);
  }else{
    contenedor.innerHTML = "";
}
}
);

function envioFormulario(){
    let animal = document.querySelector('#animales');
    let infomacionRecopilada = document.getElementsByClassName('texto');
    agregado = [];
    for(let i = 0; i < infomacionRecopilada.length; i++){
        agregado[i] = infomacionRecopilada[i].value;
        animal.innerHTML = `<p>${agregado}</p>`
    }


}



