var compra = productos.slice();
var e = new Usuario(compra);

function Usuario(compra){
  this.id = Math.random() * 1000 + 1;
  this.idioma = navigator.language;
  this.navegador = navigator.userAgent;
  this.compra = compra;
  this.importe = 0;

  this.eliminarCompra = function(){
    if (compra.length > 1) {
      this.compra.pop();
    }
  }

  this.calcularImporte = function(){
    for (var i in compra) {
      this.importe = 0;
      this.importe += compra[i].precio;
  }
}

  this.mostrarCompra = function(){
    var str = "";

    for (var i = 0; i < this.compra.length; i++) {
      str += "<div id='cuerpo'><div>";
      str += "<img src='" + this.compra[i].foto +"'>";
      str += "<p>" + this.compra[i].nombre + "</p>";
      str += "<p>" + this.compra[i].descripcion + "</p>";
      str += "<p><b>" + this.compra[i].precio + "€</b></p>";
      str += "</div></div>";
    }

    cuerpo.innerHTML = str;
  }



}
