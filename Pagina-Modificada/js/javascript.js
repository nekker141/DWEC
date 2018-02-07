$(document).ready(function(){
  $(".navbar-nav li, .masamuscular").mouseenter(function(){
      $(".masamuscular").show();
    }).mouseleave(function(){
        $(".masamuscular").hide();
      });
});
