var p = new Surtido(productos);
p.dibujarSurtido();

function verPorPreciosMas(p){
  p.ordenPrecioMas();
  p.dibujarSurtido();
}
