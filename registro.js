//REGISTRARSE

const nombreYapellido = document.getElementById("nYa");
const fechaNacimiento = document.getElementById("bDate");
const emailRegistro = document.getElementById("eReg");
const contraseñaRegistro = document.getElementById("cReg");
const repetirContraseña = document.getElementById("rcReg");
const terminosYcondiciones = document.getElementById("tYc");
const form = document.getElementById("form");
const parrafo = document.getElementById("warning");




let registrarse = document.getElementById("bReg")
registrarse.addEventListener("click", e=> {
    e.preventDefault();
    let invEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let warning = " ";
    let valido = false;
   parrafo.innerHTML = "";
    if (nombreYapellido.value.lenght < 6){
    warning += 'El nombre es muy corto <br>'
    valido = true
    }

    if(!invEmail.test(emailRegistro.value)){
     warning += 'El email no es valido <br>'
        valido = true
    }

    if (contraseñaRegistro.value.lenght < 8){
        warning += 'La contraseña es muy corta <br>'
        valido = true
    }

    if (valido){

    }

    if (valido){
        parrafo.innerHTML = warning;
    } else {

        return iniciar();

    }
});


function iniciar(){
    swal({
        icon: "success",
      });
}
