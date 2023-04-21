

$(".carousel-control-next").on('click', function(){
    if (!$('#info').hasClass('active')) {
        console.log('The element has the class "my-class"');
    }
})

$(window).on('load', function(){
    console.log( $(".bg-img").width() + " " +  $(".bg-img").height())
})