$(document).ready(function(){
 
    $('.js--services-section').waypoint(function(direction){
        if(direction == "down"){
           $("nav").addClass("sticky");
           }else{
           $("nav").removeClass("sticky");
           }
    });
    
   
    
  //MIXIT UP
    
    var mixer = mixitup('.isotope-container');
 

});


function openNav(){
    document.getElementById("myNav").style.width =" 100%";
}
function closeNav(){
    document.getElementById("myNav").style.width ="0%";
} 


