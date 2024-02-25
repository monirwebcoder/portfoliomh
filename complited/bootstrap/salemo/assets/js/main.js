//testimonial
$(document).ready(function(){
 
//testimonial
  $(".testimonial-theme").owlCarousel({
      items:1,
      loop:true,
      autoplay:true
  });
    
//mix it up

var container = document.querySelector('.amar-item');
var mixer = mixitup(container, {
    selectors: {
        control: '[our-mix-control]'
    }   
});
    
    
 $('[data-fancybox="gallery"]').fancybox({
	// Options will go here
}); 
    
//logo slider
  $(".logo-slider").owlCarousel({
            loop:true,
      autoplay:true,
      margin:10,
      autoplayTimeout:1000,
      responsiveClass:true,
      responsive:{
        0:{
            items:1,
            
        },
        767:{
            items:3,
            
        },
        1000:{
            items:5,
           
           
        }
    }
  });

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
    //sticky Menu 
$(window).scroll(function(){
    var ourWindow = $(this).scrollTop();
    
    
    
if(ourWindow>100){
    $('body').addClass('sticky');
}else{
    $('body').removeClass('sticky'); 
}
}) ;

    
    
});