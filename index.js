var i = 0;
var txt = 'alert("Hello stranger");';
var changedTxt = "";
var rectStep = 13;
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    changedTxt += txt.charAt(i);
    $(".rect-top").css("margin-left", rectStep);
    $(".alert").html(changedTxt);

    i++;
    rectStep += 13;
    setTimeout(typeWriter, speed);
  }
}

function animateRect() {
  $(".rectangle-img").delay(500).fadeOut(300).fadeIn(200).delay(200).fadeOut(300).fadeIn(200);
}

animateRect();
setTimeout(typeWriter, 2000);
setTimeout(animateRect, 3600);
setTimeout(function() {$(".rect-top").fadeOut(600); }, 3800);
