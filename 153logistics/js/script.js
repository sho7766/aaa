let menu = document.querySelectorAll(".deps1");
let menuA = document.querySelectorAll(".deps1 > li >a");
let sub = document.querySelectorAll(".deps2");

// menu시작
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
  menuOut();
});
// 메뉴스크롤 이벤트
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  if (ht >= 0 && ht < 90) {
    $(".share_btn").removeClass("on");
  } else {
    $(menu).mouseenter(function () {
      menuIn();
    });
    $(menu).mouseleave(function () {
      menuOut();
      $("header").addClass("on");
      $(menuA).addClass("on");
      $(".logo a").addClass("on");
    });
    $("header").addClass("on");
    $(menuA).addClass("on");
    $(".logo a").addClass("on");
    $(".share_btn").addClass("on");
  }
};

// menu끝;

// main .slide_move play & pause button toggle
$(".autoplay-progress .btn").on("click", function () {
  $(this).toggleClass("on");
});

// // section .tit 스크롤 효과
let ani1 = gsap.timeline();
ani1.from(".service .inner .tit", { x: -100, autoAlpha: 0, duration: 1 });
ScrollTrigger.create({
  animation: ani1,
  trigger: ".service",
  start: "top 70%",
});
let ani2 = gsap.timeline();
ani2
  .from(".data .tit", { x: 100, autoAlpha: 0, duration: 1 })
  .from(".data .txt", { x: 100, autoAlpha: 0, duration: 1 })
  .from(".data .txt2", { x: 100, autoAlpha: 0, duration: 1 });
ScrollTrigger.create({
  animation: ani2,
  trigger: ".data",
  start: "top 70%",
});
let ani3 = gsap.timeline();
ani3.from(".special .tit_box .tit", { x: -100, autoAlpha: 0, duration: 1 });
ScrollTrigger.create({
  animation: ani3,
  trigger: ".special",
  start: "top 90%",
});
let ani4 = gsap.timeline();
ani4
  .from(".onestop .tit1", { x: -100, autoAlpha: 0, duration: 1 })
  .from(".onestop .tit2", {
    x: -100,
    autoAlpha: 0,
    duration: 1,
  });
ScrollTrigger.create({
  animation: ani4,
  trigger: ".onestop",
  start: "top 90%",
});
let ani5 = gsap.timeline();
ani5.from(".capa .tit_box .tit", { x: -100, autoAlpha: 0, duration: 1 });
ScrollTrigger.create({
  animation: ani5,
  trigger: ".capa",
  start: "top 70%",
});
let ani6 = gsap.timeline();
ani6.from(".partner .tit", { x: -100, autoAlpha: 0, duration: 1 });
ScrollTrigger.create({
  animation: ani6,
  trigger: ".partner",
  start: "top 70%",
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

// goTop 클릭시 상단으로 이동
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

gsap.to(".fade_box1", {
  autoAlpha: 0,
  scrollTrigger: { scrub: true, trigger: ".fade_box1" },
});

gsap.to(".fade_box2", {
  autoAlpha: 1,

  scrollTrigger: { scrub: true, trigger: ".fade_box2" },
});

gsap.to(".fixed_cont", {
  xPercent: -100,
  x: () => innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".fixed_cont",
    end: () => innerWidth * 4,
    scrub: true,
    pin: true,
    toggleClass: "on",
  },
});
gsap.to(".scroll_img", {
  x: -500,
  // autoAlpha: 0,
  scrollTrigger: {
    scrub: true,
    trigger: ".img_wrap .img",
    start: 2000,
    end: 2500,
    toggleClass: "on",
  },
});
gsap.to(".scroll_img", {
  x: -2500,
  // autoAlpha: 0,
  scrollTrigger: {
    scrub: true,
    trigger: ".img_wrap .img:nth-child(2n)",
    start: 2500,
    end: 4000,
    toggleClass: "on",
  },
});
