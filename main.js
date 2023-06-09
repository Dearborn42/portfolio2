
window.addEventListener("orientationchange", function() {
  this.location.reload();
  // this will help with layout issues
})

function animateBox(box){

  if(window.innerWidth >= 462){
    $(box).delay(1000).animate({width: '50%'}, 1000).animate({height: '100%'}, 1000);
    $('.toggle').delay(3500).fadeIn();
  }else{
    $(box).delay(1000).animate({width: '100%'}, 1000).animate({height: '100%'}, 1000);
    $('.toggle').delay(3500).fadeIn();
  }
}
// toggles animation
$(".carousel-control-next").on('click', function(){
    if (!$('.info').hasClass('active')) {
        $(".divider").delay(1000).animate({height: '100%'}, 1000);
        animateBox('#box1');
        animateBox('#box2');
        animateBox('#box3');
        animateBox('#box4');
    }
});


// $(".carousel-control-next").on('click', function(){$("#carouselExampleCaptions").carousel('next')});

$(document).ready(function(){
  // functions control for acordians
  $('#collapseOne').collapse('hide');

  $('#accordion1 .card-header').click(function() {
    $('#collapseOne').collapse('toggle');
  });
  $('#collapseTwo').collapse('hide');

  $('#accordion2 .card-header').click(function() {
    $('#collapseTwo').collapse('toggle');
  });


  // this is the layout change
  let layout2 = $(".container-2");
  let carouselItem = $("#carouselExample > div > div.info.carousel-item.w-100.h-100.item-2");
  if(window.innerWidth <= 462){
    layout2.addClass("carousel-item")
    layout2.insertAfter(carouselItem);
  }
  if(window.innerHeight <= 347){
    $(".navbar-brand").addClass('fs-6');
  }
});
