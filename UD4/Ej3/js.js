onload = function(){
  function ponFoco(e){
    e.target.style.outline = "purple solid 2px";
  }

  nombre.onfocus = ponFoco;
  apellidos.onfocus = ponFoco;
  email.onfocus = ponFoco;
  emailRepe.onfocus = ponFoco;
  dni.onfocus = ponFoco;
  fecha.onfocus = ponFoco;


  nombre.onblur = function quitaFocoUsuario(e){
    nombre.style.outline = "none";
  }

  apellidos.onblur = function quitaFocoUsuario(e){
    apellidos.style.outline = "none";
  }

  email.onblur = function quitaFocoEmail(e){
    email.style.outline = "none";
  }

  emailRepe.onblur = function quitaFocoEmailRepe(e){
    emailRepe.style.outline = "none";
  }

  dni.onblur = function quitaFocoDni(e){
    dni.style.outline = "none";
  }

  fecha.onblur = function quitaFocoFecha(e){
    fecha.style.outline = "none";
  }


  var formu = document.getElementById('formulario');


  formu.onsubmit = function validacion(){

      var err = document.getElementsByClassName('errores')[0];
      var errList ="";
      var ret = true;

//Nombre
      var nom = document.getElementsByName('nombre')[0].value;

      if (nom == null || nom.length == 0 || !(/^\S+[\s?\S+]*$/.test(nom))){
           errList += "El nombre es erróneo <br/>"
           ret = false;
      }

//Apellidos

var ape = document.getElementsByName('apellidos')[0].value;

if (ape == null || ape.length == 0 || !(/^\S+[\s?\S+]*$/.test(ape))){
     errList += "El apellido es erróneo <br/>"
     ret = false;
}

//Email
var email = document.getElementsByName("email")[0].value;

if ( !/^\w+@\w+\.\w+$/.test(email) ){
  errList += "El email es incorrecto <br/>";
  ret = false;
}

var emailRepe = document.getElementById("emailRepe").value;
if(email != emailRepe){
  errList += "El email repetido debe coincidir con el primer email que introdujo <br/>";
  ret = false;
}

//dni

var dni = document.getElementsByName('dni')[0].value;
var v = /^\d{8}[a-zA-Z]$/;

if (v.test(dni) == false){
     errList += "El DNI es erróneo <br/>"
     ret = false;
}

//fecha

var fecha = (document.getElementsByName('fecha')[0].value).split('-');
var ano =fecha[0];
var mes =fecha[1];
var dia =fecha[2];

var nf= new Date(ano,(mes - 1),dia);

var hoy = new Date();

var edad = hoy.getFullYear()- ano - 1;

if (hoy.getMonth() + 1 - mes > 0){
    edad++;
}

if (hoy.getUTCDate() - dia >= 0){
    edad++;
}

if (edad < 18){
  errList += "Debe ser mayor de edad para inscribirse <br/>"
  ret = false;
}

//seccion

var sec = document.getElementsByName("seccion")[0].selectedIndex;
if (sec == null || sec == 0){
    errList += "Escoja una seccion <br/>";
    ret = false;
}

<<<<<<< HEAD
=======
if(sec == 1 ){
  formu.action = "discos.html";
}else if(sec == 2 ){
  formu.action = "libros.html";
}else if(sec == 3 ){
  formu.action = "Tecnología.html";
}




>>>>>>> 3e205052b073325809d6debe131092d5718bc5ea
//metodo de pago

if(efectivo.checked == false && tarjeta.checked == false ){
  errList += "Pon un metodo de pago <br/>";
  ret = false;
}


//aceptar condiciones de alta
if(cond.checked == false){
  errList += "Acepta las condiciones de alta <br/>";
  ret = false;
}


//Final
      if (ret == false){
        err.style.color="red";
      }

      err.innerHTML = errList;
      return ret;
      enviar.disabled = true;
  }
}
