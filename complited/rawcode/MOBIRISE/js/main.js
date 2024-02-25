$(document).ready(function(){
 
    $('.js--services-section').waypoint(function(direction){
        if(direction == "down"){
           $("header").addClass("sticky");
           }else{
           $("header").removeClass("sticky");
           }
    });


 var myText = ["Photographer  ","Designer  ","Dreamer  "]

var myDuration = [2000, 2000, 2000]

 

$("#textTimeSliderName" ).textTimeSlider(myText, myDuration);

    
   
    

 

});
