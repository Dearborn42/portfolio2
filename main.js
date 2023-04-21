

$(window).on('load', function(){
    console.log( $(".bg-img").width() + " " +  $(".bg-img").height())
})

$(".carousel-control-next").on('click', function(){
        if (!$('#info').hasClass('active')) {
                $('#box1').delay(1000).animate({width: '50%'}, 1000).animate({height: '100%'}, 1000).animate({backgroundColor: 'white'}, 1000);
                $('#box2').delay(1000).animate({width: '50%'}, 1000).animate({height: '100%'}, 1000).animate({backgroundColor: 'white'}, 1000);
                $('#box3').delay(1000).animate({width: '50%'}, 1000).animate({height: '100%'}, 1000).animate({backgroundColor: 'white'}, 1000);
                $('#box4').delay(1000).animate({width: '50%'}, 1000).animate({height: '100%'}, 1000).animate({backgroundColor: 'white'}, 1000);
        }
    });