let correoElectronico = 'desafio1@desafio1';
let email = prompt ('Ingresar dirección de correo electrónico');
let contraseña = prompt ('Ingresar contraseña');

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