$(document).ready(function(){
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

  $(".lupa").click(function(){
    $(".form-control").focus();
});
});
