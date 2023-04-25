

$(window).on('load', function(){
    console.log( $(".bg-img").width() + " " +  $(".bg-img").height())
})


function animateBox(box){
    $(box).delay(1000).animate({width: '50%'}, 1000).animate({height: '100%'}, 1000);
    $('.toggle').delay(3500).fadeIn();
}
function deanimateBox(box){
  $(box).animate({width: '0%'}, 1).animate({height: '2px'}, 1);
  $('.toggle').fadeOut();
}

$(".carousel-control-next").on('click', function(){
        if (!$('#info').hasClass('active')) {
          $(".divider").delay(1000).animate({height: '100%'}, 1000);
          animateBox('#box1');
          animateBox('#box2');
          animateBox('#box3');
          animateBox('#box4');
        }else{
          $(".divider").animate({height: '0%'}, 1);
          deanimateBox('#box1');
          deanimateBox('#box2');
          deanimateBox('#box3');
          deanimateBox('#box4');
        }
    });

$(document).ready(function(){
  $('#collapseOne').collapse('hide');

  $('#accordion1 .card-header').click(function() {
    $('#collapseOne').collapse('toggle');
  });
  $('#collapseTwo').collapse('hide');

  $('#accordion2 .card-header').click(function() {
    $('#collapseTwo').collapse('toggle');
  });
});