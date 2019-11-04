$(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
    $('.carousel').carousel();

    $("#item1").on("click",function(){
        var section2 = $("#AboutUs").offset().top;;
        $("html, body").animate({
            scrollTop: section2
        }, 1000); 

    });
    $("#item2").on("click",function(){
        var section1 = $("#OurWork").offset().top;;
        $("html, body").animate({
            scrollTop: section1
        }, 1000); 

    });
    $("#item3").on("click",function(){
        var section3 = $("#Contact").offset().top;;
        $("html, body").animate({
            scrollTop: section3
        }, 1000); 

    });
    $(document).on("scroll", function(){
        var desplazamientoActual = $(document).scrollTop();
        var controlArriba = $("#btn-up");
        /*console.log("Estoy en " , desplazamientoActual); */
        if(desplazamientoActual > 100){
            controlArriba.fadeIn(500);
        }
        if(desplazamientoActual < 100 ){
            controlArriba.fadeOut(500);
        }
    });
    $("#btn-up").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000); 
    });
});