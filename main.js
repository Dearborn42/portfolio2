

function animateBox(box){
    $(box).delay(1000).animate({width: '50%'}, 1000).animate({height: '100%'}, 1000);
    $('.toggle').delay(3500).fadeIn();
}

var i = 0;

// Slide to the next item
function slideNext() {
  if (i != 1) {
    i++;
    $('#carouselExample').carousel(1);
  } else {
    i--;
    $('#carouselExample').carousel(0);
  }
}

// Slide to the previous item
function slidePrev() {
  if (i != 0) {
    $('#carouselExample').carousel('prev');
    i--;
  } else {
    $('#carouselExample').carousel('next');
    i++;
  }
}

// Bind the slideNext and slidePrev functions to the next and previous buttons

$('.carousel-control-prev').click(slidePrev);

$(".carousel-control-next").on('click', function(){
    slideNext();
    if (!$('#info').hasClass('active')) {
        $(".divider").delay(1000).animate({height: '100%'}, 1000);
        animateBox('#box1');
        animateBox('#box2');
        animateBox('#box3');
        animateBox('#box4');
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