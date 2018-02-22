$(document).ready(function(){

  $('#carricoche').css('display','none');

  var carrito = $('#carricoche');

  $("#carrico").click(function(){
    $('.tupac').html(carrito)
    $('#carricoche').css('display','block');

  });


  $("header img").click(function(){
    window.location.href = "index.html";
  });

$("#registro").submit(function(e) {
  e.preventDefault();

  var error = document.getElementById('errores');
  var errList ="";
  var ret,ret2,ret3,ret4,ret5 = true;

// validar nombre
var nomForm = document.forms["formulario"]["nombre"].value;
if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
ret = false;
   document.getElementById("nombre").style.border = '1px solid red';
 }else{
   ret = true;
   document.getElementById("nombre").style.border = '1px solid lightgray';
 }

 /* validar apellido*/
 var apeForm = document.forms["formulario"]["apellidos"].value;
 if ( apeForm == null || apeForm == "" || apeForm.length == 0  || /^\s+$/.test(apeForm) || !isNaN(apeForm) ) {
   ret2 = false;
    document.getElementById("apellidos").style.border = '1px solid red';
    }else{
      ret2 = true;
      document.getElementById("apellidos").style.border = '1px solid lightgray';
    }

           /* validar email*/
           var email = document.forms["formulario"]["email2"].value;
           if ( ! (/^\w+([\.\-\+]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,4})+$/.test(email)) ){
             ret3 = false;
             document.getElementById("email2").style.border = '1px solid red';

              }else{
                ret3 = true;
                document.getElementById("email2").style.border = '1px solid lightgray';
              }



                /*Validar contraseña*/
                var contra = document.forms["formulario"]["contraseña"].value;
                if ( ! (/^\w+([\.\-\+]?\w+)*\w+([\.\-]?\w+)*(\w{2,4})+$/.test(contra)) ){
                  ret4 = false;
                  document.getElementById("contraseña").style.border = '1px solid red';
                   }else{
                     ret4 = true;
                     document.getElementById("contraseña").style.border = '1px solid lightgray';
                   }


                   /*confirmar contraseña */
                   var contraseñaConf = document.forms["formulario"]["contraseñaConf"].value;
                   if(contra != contraseñaConf || contra == ""){
                     ret5 = false;
                     document.getElementById("contraseñaConf").style.border = '1px solid red';
                   }else{
                     ret5 = true;
                     document.getElementById("contraseñaConf").style.border = '1px solid lightgray';
                   }

        if (ret == true && ret2 == true && ret3 == true && ret4 == true && ret5 == true){
           document.getElementById("enviar").innerHTML = "Enviando...";
           document.getElementById("enviar").disabled = true;
           $("#popup2").delay("slow").fadeOut();
      }

      return ret;
});



categorias(1);




// arry = $('.elemento');
// // $(arry[2]).css("background-color","blue");
// $(arry[0]).click(function(){
//   categorias(1);
// });
// $(arry[1]).click(function(){
//   categorias(2);
// });
// $(arry[2]).click(function(){
//   categorias(3);
// });
// $(arry[3]).click(function(){
//   categorias(4);
// });
// $(arry[4]).click(function(){
//   categorias(5);
// });




// for (var i = 0; i < arry.length; i++) {
//   $(arry[i]).click(function(){
//     alert("hola "+i)
//   });
// }

});
