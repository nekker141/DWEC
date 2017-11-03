var p = new Surtido(productos);
p.dibujarSurtido();

function verPorPrecioMas(p){
  p.ordenPrecioMas();
  p.dibujarSurtido();
}

function verPorPrecioMenos(p){
  p.ordenPrecioMenos();
  p.dibujarSurtido();
}

function verVegano(){
  p.dibujarSurtido(p.filtrarVegano());
}

function recarga(){
  location.reload();
}

function navegarCarrito(){
  window.open("carrito.html");
}

function condCompraOnline(){
  window.open("carrito.html");
}
