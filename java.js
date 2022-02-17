//let correoElectronico = 'desafio1@desafio1';
//let email = "" + "@" + "";
//let contraseña = prompt ('Ingresar contraseña');
//let nombreYapellido = prompt ('Ingresar nombre y apellido');
//let correoCorreo = prompt('Ingresar correo electrónico');
//let mensaje = prompt ('Ingresar mensaje');



//ARRAYS
const regnum = [1, 2, 3, 4, 5, 6];
const capitulos = ['Capítulo 1', 'Capítulo 2', 'Capítulo 3', 'Capítulo 4', 'Capítulo 5', 'Capítulo 6'];


console.log (regnum[0] + capitulos[0]);
console.log (regnum[1] + capitulos[1]);
console.log (regnum[2] + capitulos[2]);
console.log (regnum[3] + capitulos[3]);
console.log (regnum[4] + capitulos[4]);
console.log (regnum[5] + capitulos[5]);

console.log(regnum.length);
console.log(capitulos.length);


document.getElementById("c-elect").style.backgroundColor= "#000000";
document.getElementById("contra").style.backgroundColor= "#000000";



setTimeout(() => {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    document.getElementById("nombreYApellido").innerHTML.value = nombre + " " + apellido;


}, 2000);

//EVENTOS


let inicioSesion = document.getElementById("Inicio-sesion");
inicioSesion.addEventListener("submit", validarFormulario)

function validarFormulario(e){
    e.preventDefault();
    console.log("Enviar")
}

let email = document.getElementById("c-elect");
email.onkeydown = () => {console.log ("ingresar correo electronico")}

let contraseña = document.getElementById("contra");
contraseña.onkeydown = () => {console.log ("ingresar contraseña")}