function animateBox(box){
    $(box).delay(1000).animate({width: '50%'}, 1000).animate({height: '100%'}, 1000);
    $('.toggle').delay(3500).fadeIn();
}

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
  $('#collapseOne').collapse('hide');

  $('#accordion1 .card-header').click(function() {
    $('#collapseOne').collapse('toggle');
  });
  $('#collapseTwo').collapse('hide');

  $('#accordion2 .card-header').click(function() {
    $('#collapseTwo').collapse('toggle');
  });
});



const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fd = new FormData(form);

  const urlEncoded = new URLSearchParams(fd).toString();

  fetch('http://localhost:3000/email', {
    method: "POST",
    body: urlEncoded,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })


});

   // let subject = $(".Subject").val();
    // let email = $('.email').val();
    // let text = $('.text').val();

    // // Send form data to server using Ajax
    // const xhr = new XMLHttpRequest();
    // xhr.open('POST', endpoint);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.onload = function() {
    //   if (xhr.status === 200) {
    //     console.log(xhr.responseText);
    //     // Handle success response from server here
    //   } else {
    //     console.log('Error');
    //     // Handle error response from server here
    //   }
    // };

    // xhr.send(JSON.stringify({ email, text, subject }));

