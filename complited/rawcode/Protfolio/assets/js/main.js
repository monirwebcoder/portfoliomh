$(document).ready(function(){
 $(".owl-carousel").owlCarousel({
  items:1,
      autoplay:true,
     nav:true,
     loop:true
 });

$('.menu-area li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    
});


});