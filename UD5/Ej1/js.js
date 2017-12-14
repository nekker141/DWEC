onload = function(){


  if (window.localStorage != null) {
     obtenerClavesLocal();
  }

  if (window.sessionStorage != null) {
     obtenerClavesSesion();
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

formulario.action = "alta.html"

//Cookies

function setCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = ";expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+";path=/";
  console.log(document.cookie);
  }





//Final
      if (ret){
        nombre = document.getElementsByTagName('input')[0];
        var name="nombre";
        var value=nombre.value;
        var days=360;
        setCookie(name,value,days);

        apellidos = document.getElementsByTagName('input')[1];
        var name1="apellidos";
        var value1=apellidos.value;
        var days1=360;
        setCookie(name1,value1,days1);

        guardarClavesLocal();
        guardarClavesSesion();
        document.getElementById("enviar").value = "Enviando...";
        document.getElementById("enviar").disabled = true;

      }else{
        err.style.color="red";
      }

      err.innerHTML = errList;
      return ret;
      enviar.disabled = true;
  }

  function obtenerClavesLocal() {
        var email = localStorage.getItem("email");
        var email_object = document.getElementById("email");
        email_object.value = email;
  }

  function guardarClavesLocal() {
        var email_object = document.getElementById("email");
        var email = email_object.value;
        localStorage.setItem("email", email);
  }

  function obtenerClavesSesion() {
        var dni = localStorage.getItem("dni");
        var dni_object = document.getElementById("dni");
        dni_object.value = dni;
  }
  
  function guardarClavesSesion() {
        var dni_object = document.getElementById("dni");
        var dni = dni_object.value;
        sessionStorage.setItem("dni", dni);

  }
}
