$(document).ready(function(){
  $(".main-slider").owlCarousel({
  	items:1,
  	loop:true,
  	nav:true,
  	dotsEach:true,
  	autoplay:true
  });

  $(".who-we-are").owlCarousel({
  	items:3,
  	loop:true,
  	nav:true,
  	autoplay:true,
  	 responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        767:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            
        }
    }
  });

   $(".carousel-item").owlCarousel({
  	items:1,
  	loop:true,
  	dotsEach:true,
  	autoplay:true
  });


  $(".pricing-on").on({
  mouseenter: function(){
     $('.pricing-on').hide();
    $('.pricing-when-hover').show();
  }
          
}); 

 $('.count-num').rCounter();
  
});



$(document).ready(function(){
   //active menu class
$('.main-menu li').click(function(){
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
    

    
});






function openNav(){
    document.getElementById("myNav").style.width =" 100%";
}
function closeNav(){
    document.getElementById("myNav").style.width ="0%";
} 