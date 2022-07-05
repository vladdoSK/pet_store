$(function(){
    
    var headerH=$("#header").innerHeight(), //висота навігації
        header=$("#header"),                //сам клас навігації
        scrollOffset=$(window).scrollTop(); //в значенні скрола поточне кладем
    
    
    /*Fixed header*/
    checkScroll(scrollOffset);              //перевіряєм скролл
    
    $(window).on("scroll", function(){      
        scrollOffset=$(this).scrollTop();
        
        checkScroll(scrollOffset);
        
    });

    function checkScroll(scrollOffset)
    {
        if(scrollOffset >= headerH)
            {
                header.addClass("fixed");
            }
        else{
            header.removeClass("fixed");
        }
    }
    
    
    /*Smoth scroll*/
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        var blockID = $(this).data('scroll'),
            blockOffset = $(blockID).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 300)
    });
    
    
    /*Slider*/
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    
});