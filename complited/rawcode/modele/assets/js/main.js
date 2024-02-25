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