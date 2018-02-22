onload = function(){
var xhr = new XMLHttpRequest();


  var url = "../products.php";
  xhr.open("GET",url,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var respuesta = JSON.parse(xhr.responseText);

      if (respuesta.estatus == true){

        for (var i = 0; i < respuesta.products.length; i++) {
          document.getElementsByClassName('filasProductos')[i].style.display = 'block';
          document.getElementsByClassName('imagen')[i].setAttribute("src",respuesta.products[i].img);
          document.getElementsByClassName('producto')[i].innerHTML = respuesta.products[i].name;
        }
          }
    }
  }

  var formulario = document.forms[0];
  var objFD = new FormData(formulario);
  xhr.send(objFD);

  function categorias(e){
    var xhr = new XMLHttpRequest();

    var url = "../categories.php?category_id="+e;
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        var respuesta = JSON.parse(xhr.responseText);

        if (respuesta.estatus == true){
          categoria.innerHTML = respuesta.categories[0].name;
        }
      }
    }


    xhr.send();
  }



}
