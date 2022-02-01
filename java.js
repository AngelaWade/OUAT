let correoElectronico = 'desafio1@desafio1';
let email = prompt ('Ingresar dirección de correo electrónico');
let contraseña = prompt ('Ingresar contraseña');
let nombreYapellido = prompt ('Ingresar nombre y apellido');
let correoCorreo = prompt('Ingresar correo electrónico');
let mensaje = prompt ('Ingresar mensaje');


function solicitarDato() {
    let dato = prompt('Campo obligatorio');
    alert (dato)
}

if (nombreYapellido == "") {
solicitarDato(nombreYapellido);
} 

if (correoCorreo == "") {
    solicitarDato(correoCorreo);
}

if (mensaje == "") {
    solicitarDato(mensaje);
}

if (email == "") {
    alert("No ingresaste dirección de correo electrónico");
} 

if (contraseña == "") {
    alert("No ingresaste contraseña ");
}

while( email != correoElectronico) {
    alert("Dirección de correo electrónico incorrecta");
    email = prompt ('Ingresar otro dato');

}




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
