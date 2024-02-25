var container = document.querySelector('.photo-gallery');
var mixer = mixitup(container, {
    selectors: {
        control: '[our-mix-control]'
    }   
});

$('.owl-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    autoplayTimeout:1000,
      responsiveClass:true,
    responsive:{
        0:{
            items:1
           
        },
        600:{
            items:2
           
        },
        768:{
            items:3
           
        },
        1000:{
            items:4
            
        }
    }
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

    
    //scrol menu 
$('.top-bar').click(function(){
    $("html,boby").animate({
        scrollTop:50
    },1000);
});

$('.top-bar').hide();
$(window).scroll(function(){
    var ourWindow = $(this).scrollTop();
    if(ourWindow<200){
        $('.top-bar').fadeOut();
    }else{
          $('.top-bar').fadeIn();
    }
    
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
