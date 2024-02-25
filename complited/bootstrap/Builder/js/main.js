
$(document).ready(function(){
  $(".project-sect").owlCarousel({
  	items:4,
  	loop:true,
  	autoplay:true,
  	autoplayTimeout:2000,
  	 responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
  });


  $(".reviewsSec").owlCarousel({
  	items:1,
  	loop:true,
  	autoplay:true,
  	autoplayTimeout:3000



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



 $(window).scroll(function(){
    var ourWindow = $(this).scrollTop();
    if(ourWindow>100){
    $('body').addClass('sticky');
}else{
    $('body').removeClass('sticky');
}

    } );  //sticky Menu




});
