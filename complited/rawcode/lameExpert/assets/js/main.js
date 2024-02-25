$('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    }
    
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      dots:true
  });
});

$(document).ready(function(){
   //active menu class
$('.menu li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    
});
    
$('ul a[href^="#"]').click(function(e){
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


$(window).scroll(function(){
    var ourWindow = $(this).scrollTop();
   
    
    //sticky Menu 
if(ourWindow>100){
    $('body').addClass('sticky');
}else{
    $('body').removeClass('sticky'); 
}
}) ;
    
 new WOW().init();

    $('.count').rCounter ();
    
});






function openNav(){
    document.getElementById("myNav").style.width =" 100%";
}
function closeNav(){
    document.getElementById("myNav").style.width ="0%";
} 