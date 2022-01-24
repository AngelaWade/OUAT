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

