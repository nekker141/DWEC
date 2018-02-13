$(document).ready(function(){

  // Menu
  $(".navbar-nav li:nth-child(1), .masamuscular").mouseenter(function(){
      $(".masamuscular").show();
    }).mouseleave(function(){
      $(".masamuscular").hide();
    });

  $(".navbar-nav li:nth-child(2), .quemadoresdegrasa").mouseenter(function(){
      $(".quemadoresdegrasa").show();
    }).mouseleave(function(){
      $(".quemadoresdegrasa").hide();
    });

  $(".navbar-nav li:nth-child(3), .energia").mouseenter(function(){
      $(".energia").show();
    }).mouseleave(function(){
      $(".energia").hide();
    });
  $(".navbar-nav li:nth-child(4), .productosalimenticios").mouseenter(function(){
      $(".productosalimenticios").show();
    }).mouseleave(function(){
      $(".productosalimenticios").hide();
    });
  $(".navbar-nav li:nth-child(5), .marcas").mouseenter(function(){
      $(".marcas").show();
    }).mouseleave(function(){
      $(".marcas").hide();
    });

// Buscador
  $(".lupa").click(function(){
    $(".form-control").focus();
  });
});

<<<<<<< HEAD:Pagina-Modificada/js/javascript.js


});
=======
function login(){
  var v = window.open("login.html","","height=550 width=400");
}
>>>>>>> aa47035e7522e2f67e24ba6d0f819c90185d9c07:Pagina/js/javascript.js
