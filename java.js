
//roles
//admin=1
//usuario=2




function obtenerListaDeUsuarios (){

    var listaDeUsuarios = JSON.parse(localStorage.getItem("usuarios"));

if (listaDeUsuarios == null){
    listaDeUsuarios=
    [
//       id   nombre   correo    contraseña apell  fechaNac    rol
        ['1','Angela','admin@admin','1234','Wade','21/04/1995','1']
        ['2','Usuario','user@user','4321','Primero','22/02/1992','2']
        

        ]

}
return listaDeUsuarios;

}

function validarCredenciales (correo, contraseña){

    var listaDeUsuarios = obtenerListaDeUsuarios();
    var acceso = false;

    for (var i = 0; i < listaDeUsuarios.length; i++){
        if (correo == listaDeUsuarios[i][2] && contraseña == listaDeUsuarios[i][3]){
            acceso= true;
            sessionStorage.setItem('usuarioActivo', listaDeUsuarios[i][1] + ' ' + listaDeUsuarios[i][4]);
            sessionStorage.setItem('rolUsuarioActivo', listaDeUsuarios[i][6]);
        } 
        return acceso;
    
    }
    }

//INICIO SESION

    document.querySelector('#btniniciar').addEventListener('click', inicioSesion);

    function inicioSesion(){
        var eCorreo = '';
        var eContraseña = '';
        var acceso = false;

        eCorreo = document.querySelector("#c-elect").value;
        eContraseña = document.querySelector("#contra").value;

        acceso = validarCredenciales(eCorreo, eContraseña);
        console.log(acceso);
    }