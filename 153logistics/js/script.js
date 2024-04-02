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
  rewind: true,
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
$(".autoplay-progress .btn").on("click", function () {
  $(this).toggleClass("on");
});
$(".autoplay-progress .btn").click(function () {
  $(".swiper").stop();
  $(".autoplay-progress svg").toggleClass("no");
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

// let number = document.querySelectorAll(".number .text span");
// let interval = 5000;

// number.forEach((number) => {
//   let startNumber = 0;
//   let endNumber = parseInt(number.getAttribute("data-val"));
//   let duration = Math.floor(interval / endNumber);
//   let counter = setInterval(function () {
//     startNumber += 1;
//     number.textContent = startNumber;
//     if (startNumber == endNumber) {
//       clearInterval(counter);
//     }
//   });
// });

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
let moveImg1 = gsap.timeline();
moveImg1.to(".img1", { x: -700 });
ScrollTrigger.create({
  animation: moveImg1,
  trigger: ".img1",
  start: "+=1400",
  end: "+=3100",
  toggleClass: "on",
  scrub: true,
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 1400) {
    $(".fixed_cont").addClass("on");
  } else {
    $(".fixed_cont").removeClass("on");
  }
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 3100) {
    $(".img1").css("opacity", "0");
  } else {
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
  if ($(document).scrollTop() > 5000) {
    $(".fade_box2").removeClass("on");
    $(".fade_box3").addClass("on");
  } else {
    $(".fade_box3").removeClass("on");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 6200) {
    $(".fade_box3").removeClass("on");
    $(".fade_box4").addClass("on");
  } else {
    $(".fade_box4").removeClass("on");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 8000) {
    $(".fixed_cont").addClass("end");
  } else {
    $(".fixed_cont").removeClass("end");
  }
});
