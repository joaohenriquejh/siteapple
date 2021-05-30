$(document).ready(function(){
    $('#slider').bxSlider({
        auto: true,
        control: false
    });
    
    $("#but-menu").click(function(){
        $(".menu").slideToggle();
    });
});