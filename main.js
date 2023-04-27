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


$('.send-email').on('click', function(){
  let subject = $(".Subject").val();
  let email = $('.email').val();
  let password = $('.password').val();
  let text = $('.text').val();

  Email.send({
    Host: "smtp.gmail.com",
    Username: `${email}`,
    Password: `${password}`,
    To: "amurf26@outlook.com",
    From: `${email}`,
    Subject: `${subject}`,
    Body: `${text}`,
    Port: 587,
    TLS: {
      ciphers: "SSLv3",
    },
})
  .then(function (message) {
    alert("Email sent successfully");
  })
  .catch(function (error) {
    alert("Error sending email: " + error);
  });
})