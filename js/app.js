$(function(){
    // fixed header

    let header_b = $("#header-main"),
        header_t = $("#header-top").innerHeight(),
        scrollMouse = $(window).scrollTop();
        CheckScroll(scrollMouse,header_t);

    $(window).on("scroll resize", function(){
        header_t = $("#header-top").innerHeight();
        scrollMouse = $(this).scrollTop();
        CheckScroll(scrollMouse,header_t);
    });

    function CheckScroll(scrollMouse,header_t){
        if(scrollMouse > header_t){
            header_b.addClass("fixed");
        }
        else{
            header_b.removeClass("fixed");
        }
    }

    // SmoothScroll

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let scrollBlock = $(this).data("scroll"),
            scrolloffset = $(scrollBlock).offset().top;

        $("#nav-toggle").removeClass("active");
        $("#header-menu").removeClass("active");

        $("html,body").animate({
            scrollTop: scrolloffset - 70
        },700);
    });
    
    // Burger

    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#header-menu").toggleClass("active")
    })

    // SlickSlider

    $('.intro__slider').slick({
        dots: true,
        arrows:false,
        infinite: true,
        slidesToScroll:1,
        slidesToShow: 1,
        fade:true
      });
});