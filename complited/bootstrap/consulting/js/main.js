//slider carosel Bootstrap

$('.carousel').carousel({
  interval: 2000
})


$(function(){
2
  $('.count-num').rCounter({
      duration: 60
  });
3
});

// mix it update
var container = document.querySelector('.photo-gallery');
var mixer = mixitup(container, {
    selectors: {
        control: '[our-mix-control]'
    }   
});


$(document).ready(function(){
  $(".Testimonial").owlCarousel({
      items:1,
      loop:true
  });
});




$(document).ready(function(){
   //active menu class
$('.navbar li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    
});
    
$('.navbar-nav a[href^="#"]').click(function(e){
        e.preventDefault();
    var target = this.hash;
    $('html,body').animate({
        scrollTop:$(target).offset().top -80
    },500)
 });

    

$(window).scroll(function(){
    var ourWindow = $(this).scrollTop();
  
    //sticky Menu 
if(ourWindow>100){
    $('body').addClass('sticky');
}else{
    $('body').removeClass('sticky'); 
}
}) ;
//WOW JS
    new WOW().init();
    
});
