onload = function(){
var xhr = new XMLHttpRequest();



// localStorage
if (window.localStorage != null) {
   obtenerClaveLocal();
}

function obtenerClaveLocal() {
   if (window.localStorage != null) {
      var email = localStorage.getItem("email");
      var email_object = document.getElementById("email");
      email_object.value = email;
   }
}

function guardarClaveLocal() {
   if (window.localStorage != null) {
      var email_object = document.getElementById("email");
      var email = email_object.value;
      localStorage.setItem("email", email);
   }
}

// consulta login

formulariologin.onsubmit = function(e){
  e.preventDefault();
  var url = "../login.php";
  xhr.open("POST",url,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var respuesta = JSON.parse(xhr.responseText);
      if (respuesta.estatus == true){
          if (recordarme.checked){
            guardarClaveLocal();
            }

            document.getElementById('popup').style.display = "none";
            document.getElementsByClassName('login')[0].innerHTML = "Bienvenido "+document.getElementById("email").value+"! <a href='#'><i class='fas fa-shopping-cart fa-lg'></i>";
            // document.getElementsByClassName('login')[0].innerHTML = "<a href='#'><i class='fas fa-shopping-cart fa-lg'></i>"
          }else{
            var err = document.getElementsByClassName('errores')[0];
            err.style.color="red";
            err.innerHTML = "Usuario incorrecto";
      }
    }
  }

  var formulario = document.forms[0];
  var objFD = new FormData(formulario);
  xhr.send(objFD);
  }
}
