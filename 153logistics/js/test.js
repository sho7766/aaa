let service = gsap.timeline();
service.from(".service .inner .tit_box .tit", {
  x: -100,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: service,
  trigger: ".service",
  start: "top 70%",
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 1500) {
    $(".fixed_cont").addClass("on");
  } else {
    $(".fixed_cont").removeClass("on");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 3100) {
    $(".img1").css("opacity", "0");
  } else if ($(document).scrollTop() < 3000) {
    $(".img1").css("opacity", "1");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 3800) {
    $(".fade_box1").css("opacity", "0");
    $(".fade_box2").addClass("on");
  } else {
    $(".fade_box1").css("opacity", "1");
    $(".fade_box2").removeClass("on");
  }
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 5500) {
    $(".fade_box2").removeClass("on");
    $(".fade_box3").addClass("on");
  } else {
    $(".fade_box3").removeClass("on");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 7200) {
    $(".fade_box3").removeClass("on");
    $(".fade_box4").addClass("on");
  } else {
    $(".fade_box4").removeClass("on");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 8900) {
    $(".fixed_cont").addClass("end");
  } else {
    $(".fixed_cont").removeClass("end");
  }
});

let moveImg = gsap.timeline();
moveImg.to(".img", { x: -2000 });
ScrollTrigger.create({
  animation: moveImg,
  start: "+=1400",
  end: "+=8000",
  trigger: ".img1",
  toggleClass: "on",
  scrub: true,
});
