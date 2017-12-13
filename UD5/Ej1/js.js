onload = function(){


  var formu = document.getElementById('formulario');


  formu.onsubmit = function validacion(){

      var err = document.getElementsByClassName('errores')[0];
      var ret = true;

//Nombre
      var nom = document.getElementsByName('nombre')[0].value;

      if (nom == null){
           ret = false;
      }

//Apellidos

var ape = document.getElementsByName('apellidos')[0].value;

if (ape == null){
     ret = false;
}

//Email
var email = document.getElementsByName("email")[0].value;

if (email == null){
  ret = false;
}

var emailRepe = document.getElementById("emailRepe").value;
if(email != emailRepe){
  ret = false;
}

//dni

var dni = document.getElementsByName('dni')[0].value;

if (dni == null){
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
if (sec == null){
    ret = false;
}

//metodo de pago

if(efectivo.checked == false && tarjeta.checked == false ){
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
