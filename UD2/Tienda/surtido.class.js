function Surtido(productos){
  this.productos = productos;
  this.dibujarSurtido = function(produ){
    cuerpo.innerHTML = "";
    var str = "";
    if (produ == undefined){
      for (var i = 0; i < this.productos.length; i++) {
        str += "<div>";
        str += "<img src='" + this.productos[i].foto + "' alt = '";
        str += this.productos[i].nombre + "'>";
        str += "<p>" + this.productos[i].descripcion + "</p>";
        str += "<p><b>" + this.productos[i].precio + "€</b></p>";
        str += "</div>";
      }
    }else {

      for (var i = 0; i < produ.length; i++) {
        str += "<div>";
        str += "<img src='" + produ[i].foto + "' alt = '";
        str += produ[i].nombre + "'>";
        str += "<p>" + produ[i].descripcion + "</p>";
        str += "<p><b>" + produ[i].precio + "€</b></p>";
        str += "</div>";
    }
  }
  cuerpo.innerHTML = str;
}

  this.ordenPrecioMas = function(){
    productos.sort(function(a,b){
      return (a.precio - b.precio);
    });
  }

  this.ordenPrecioMenos = function(){
    productos.sort(function(a,b){
      return (b.precio - a.precio);
    });
  }

  this.filtrarVegano = function(){
    var prodveganos = new Array();

    for (var i in productos) {
      if (productos[i].vegano == true) {
        prodveganos.push(productos[i]);
      }
    }
    return prodveganos;
  }


}
