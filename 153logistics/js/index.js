// menu시작
let menu = document.querySelectorAll(".deps1");
let menuA = document.querySelectorAll(".deps1 > li >a");
let sub = document.querySelectorAll(".deps2");
function menuIn() {
  $("header").addClass("on");
  $(".deps1_bg").addClass("on");
  $(menuA).addClass("on");
  $(sub).addClass("on");
  $(".deps2  a").css("color", "#000");
  $(".logo a").addClass("on");
}
function menuOut() {
  $("header").removeClass("on");
  $(".deps1_bg").removeClass("on");
  $(menuA).removeClass("on");
  $(sub).removeClass("on");
  $(".logo a").removeClass("on");
}
$(menu).mouseenter(function () {
  menuIn();
});
$(menu).mouseleave(function () {
  if ($(document).scrollTop() > 0) {
    $(".deps1_bg").removeClass("on");
    $(sub).removeClass("on");
  } else {
    menuOut();
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 0) {
    menuIn();
    $(sub).removeClass("on");
    $(".deps1_bg").removeClass("on");
    $(".share_btn").addClass("on");
  } else {
    menuOut();
    $(".share_btn").removeClass("on");
  }
});
// menu끝;

// slide
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
    },
  },
});
//

// main .slide_move play & pause button toggle
$(".slide_btn").click(function () {
  swiper.autoplay.stop();
  $(this).toggleClass("on");
  $(progressCircle).css({
    "stroke-dashoffset": "292.273",
    "stroke-dasharray": "292.273, 292.273",
  });
});
// service 섹션 스크롤 에니메이션
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
let scroll = gsap.timeline();
scroll.to(".img_wrap", { x: -2300 });
ScrollTrigger.create({
  animation: scroll,
  trigger: ".img_wrap",
  scrub: true,
  start: "+=0",
  end: "+=8200",
});
ScrollTrigger.create({
  trigger: ".img1",
  scrub: true,
  start: "+=0",
  end: "+=2000",
  toggleClass: "on",
});
ScrollTrigger.create({
  trigger: ".img2",
  scrub: true,
  start: "+=1100",
  end: "+=1130",
  toggleClass: "on",
});
ScrollTrigger.create({
  trigger: ".img3",
  scrub: true,
  start: "+=2300",
  end: "+=2300",
  toggleClass: "on",
});
ScrollTrigger.create({
  trigger: ".img4",
  scrub: true,
  start: "+=4500",
  end: "+=4500",
  toggleClass: "on",
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 1420) {
    $(".fixed_cont").addClass("on");
  } else {
    $(".fixed_cont").removeClass("on");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 2500) {
    $(".img1").css("opacity", "0");
  } else {
    $(".img1").css("opacity", "1");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 3000) {
    $(".fade_box1").css("opacity", "0");
    $(".fade_box2").addClass("on");
  } else {
    $(".fade_box1").css("opacity", "1");
    $(".fade_box2").removeClass("on");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 4200) {
    $(".img2").css("opacity", "0");
  } else {
    $(".img2").css("opacity", "1");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 4300) {
    $(".fade_box2").removeClass("on");
    $(".fade_box3").addClass("on");
  } else {
    $(".fade_box3").removeClass("on");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 6400) {
    $(".fade_box3").removeClass("on");
    $(".fade_box4").addClass("on");
  } else {
    $(".fade_box4").removeClass("on");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 6500) {
    $(".img3").css("opacity", "0");
  } else {
    $(".img3").css("opacity", "1");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 8200) {
    $(".fixed_cont").addClass("end");
  } else {
    $(".fixed_cont").removeClass("end");
  }
});
//

// data title 스크롤 애니메이션
let dataTit = gsap.timeline();
dataTit
  .from(
    ".data .inner .tit_box .tit",
    {
      x: 200,
      autoAlpha: 0,
      duration: 1,
    },
    "data"
  )
  .from(
    ".data .inner .tit_box .txt",
    {
      x: 200,
      autoAlpha: 0,
      duration: 1,
      delay: 0.5,
    },
    "data"
  )
  .from(
    ".data .inner .tit_box .txt2",
    {
      x: 200,
      autoAlpha: 0,
      duration: 1,
      delay: 0.8,
    },
    "data"
  );
ScrollTrigger.create({
  animation: dataTit,
  trigger: ".data",
  start: "top 60%",
});

// data 섹션 숫자 카운트 애니메이션
var elements = $(".cont");
var index = 0;

function applyClass() {
  if (index < 5) {
    var currentElement = $(elements[index]);
    currentElement.addClass("on");
    setTimeout(function () {
      currentElement.removeClass("on");
      index++;
      applyClass();
    }, 3000);
  } else {
    index = 0;
    applyClass();
  }
}
applyClass();

$(".counterup_obj").counterUp({
  time: 700,
});
$(".counterup_obj1").counterUp({
  time: 500,
});
$(".counterup_obj2").counterUp({
  time: 1000,
});
//

// special title 스크롤 애니메이션
let special = gsap.timeline();
special.from(".special .inner .tit_box .tit", {
  x: -200,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: special,
  trigger: ".special",
  start: "top 90%",
});
// .special section 마우스이벤트
const sec = document.querySelector(".special");
gsap.set(".pointer", { xPercent: -50, yPercent: -50 });

let xSetter = gsap.quickSetter(".pointer", "x", "px");
let ySetter = gsap.quickSetter(".pointer", "y", "px");

$(".special .con").mouseenter(() => {
  $(".circle_v").addClass("on");
});
$(".special .con").mouseleave(() => {
  $(".circle_v").removeClass("on");
});

window.addEventListener("mousemove", (e) => {
  xSetter(e.x);
  ySetter(e.y);
});

//onestop 스크롤 이벤트
let onestop = gsap.timeline();
onestop
  .from(
    ".onestop .tit1",
    {
      x: -100,
      autoAlpha: 0,
      duration: 1.2,
    },
    "same"
  )
  .from(
    ".onestop .tit2",
    { x: -100, autoAlpha: 0, duration: 1.2, delay: 0.3 },
    "same"
  )
  .to(
    ".onestop .tit2 .tit2_bg",
    { width: 730, duration: 0.9, delay: 0.4 },
    "same"
  );
ScrollTrigger.create({
  animation: onestop,
  trigger: ".onestop",
  start: "top 70%",
  end: "top 50%",
});
ScrollTrigger.create({
  trigger: ".onestop .circle_box",
  start: "top 80%",
  end: "top 50%",
  onEnter: () => {
    $(".circle_box").addClass("on");
  },
});
ScrollTrigger.create({
  trigger: ".onestop .icon_box",
  start: "top 90%",
  onEnter: () => {
    $(".i_con").addClass("on");
  },
});

//capa섹션 스크롤 애니메이션
let capaTit = gsap.timeline();
capaTit.from(".capa .tit_box .tit", {
  x: -200,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: capaTit,
  trigger: ".capa",
  start: "top 80%",
});
let capaImg1 = gsap.timeline();
capaImg1
  .from(
    ".capa .cont1 .img_box",
    {
      y: 50,
      autoAlpha: 0,
      duration: 1,
    },
    "one"
  )
  .from(
    ".capa .cont1 .text_box",
    {
      x: -100,
      autoAlpha: 0,
      duration: 1,
    },
    "one"
  );
ScrollTrigger.create({
  animation: capaImg1,
  trigger: ".cont1",
  start: "top 90%",
  end: "top 50%",
});
let capaImg2 = gsap.timeline();
capaImg2
  .from(
    ".capa .cont2 .img_box",
    {
      y: 50,
      autoAlpha: 0,
      duration: 1,
    },
    "two"
  )
  .from(
    ".capa .cont2 .text_box",
    {
      x: 100,
      autoAlpha: 0,
      duration: 1,
    },
    "two"
  );
ScrollTrigger.create({
  animation: capaImg2,
  trigger: ".cont2",
  start: "top 90%",
  end: "top 50%",
});
let capaImg3 = gsap.timeline();
capaImg3
  .from(
    ".capa .cont3 .img_box",
    {
      y: 50,
      autoAlpha: 0,
      duration: 1,
    },
    "three"
  )
  .from(
    ".capa .cont3 .text_box",
    {
      x: -100,
      autoAlpha: 0,
      duration: 1,
    },
    "three"
  );
ScrollTrigger.create({
  animation: capaImg3,
  trigger: ".cont3",
  start: "top 90%",
  end: "top 50%",
});
let capaImg4 = gsap.timeline();
capaImg4
  .from(
    ".capa .cont4 .img_box",
    {
      y: 50,
      autoAlpha: 0,
      duration: 1,
    },
    "four"
  )
  .from(
    ".capa .cont4 .text_box",
    {
      x: 100,
      autoAlpha: 0,
      duration: 1,
    },
    "four"
  );
ScrollTrigger.create({
  animation: capaImg4,
  trigger: ".cont4",
  start: "top 90%",
  end: "top 50%",
});
let capaImg5 = gsap.timeline();
capaImg5
  .from(
    ".capa .cont5 .img_box",
    {
      y: 50,
      autoAlpha: 0,
      duration: 1,
    },
    "five"
  )
  .from(
    ".capa .cont5 .text_box",
    {
      x: -100,
      autoAlpha: 0,
      duration: 1,
    },
    "five"
  );
ScrollTrigger.create({
  animation: capaImg5,
  trigger: ".cont5",
  start: "top 90%",
  end: "top 50%",
});
let capaImg6 = gsap.timeline();
capaImg6
  .from(
    ".capa .cont6 .img_box",
    {
      y: 50,
      autoAlpha: 0,
      duration: 1,
    },
    "six"
  )
  .from(
    ".capa .cont6 .text_box",
    {
      x: 100,
      autoAlpha: 0,
      duration: 1,
    },
    "six"
  );
ScrollTrigger.create({
  animation: capaImg6,
  trigger: ".cont6",
  start: "top 90%",
  end: "top 50%",
});
let capaImg7 = gsap.timeline();
capaImg7
  .from(
    ".capa .cont7 .img_box",
    {
      y: 50,
      autoAlpha: 0,
      duration: 1,
    },
    "seven"
  )
  .from(
    ".capa .cont7 .text_box",
    {
      x: -100,
      autoAlpha: 0,
      duration: 1,
    },
    "seven"
  );
ScrollTrigger.create({
  animation: capaImg7,
  trigger: ".cont7",
  start: "top 90%",
  end: "top 50%",
});
let capaImg8 = gsap.timeline();
capaImg8
  .from(
    ".capa .cont8 .img_box",
    {
      y: 50,
      autoAlpha: 0,
      duration: 1,
    },
    "eight"
  )
  .from(
    ".capa .cont8 .text_box",
    {
      x: 100,
      autoAlpha: 0,
      duration: 1,
    },
    "eight"
  );
ScrollTrigger.create({
  animation: capaImg8,
  trigger: ".cont8",
  start: "top 90%",
  end: "top 50%",
});
let capaImg9 = gsap.timeline();
capaImg9
  .from(
    ".capa .cont9 .img_box",
    {
      y: 50,
      autoAlpha: 0,
      duration: 1,
    },
    "nine"
  )
  .from(
    ".capa .cont9 .text_box",
    {
      x: -100,
      autoAlpha: 0,
      duration: 1,
    },
    "nine"
  );
ScrollTrigger.create({
  animation: capaImg9,
  trigger: ".cont9",
  start: "top 90%",
  end: "top 50%",
});
//

// partner title 스크롤 애니메이션
let partnerTit = gsap.timeline();
partnerTit.from(".partner .tit_box .tit", {
  x: -100,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: partnerTit,
  trigger: ".partner",
  start: "top 90%",
});
//

//상단이동버튼
$(".goTop_btn").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 300);
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".goTop_btn").addClass("on");
  } else {
    $(".goTop_btn").removeClass("on");
  }
});
//
