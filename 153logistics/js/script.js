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

// section .tit 스크롤 효과
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
  end: "70% 50%",
});
ScrollTrigger.create({
  trigger: ".fixed_cont",
  start: "top 1%",
  pin: true,
  scrub: true,
  toggleClass: "on",
});
let fade_box = gsap.timeline();
fade_box.to(".fade_box1", { opacity: 0, duration: 0.1 });
ScrollTrigger.create({
  animation: fade_box,
  trigger: ".slide_box",
  scrub: true,
  markers: true,
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

let number = document.querySelectorAll(".number .text span");
let interval = 5000;

number.forEach((number) => {
  let startNumber = 0;
  let endNumber = parseInt(number.getAttribute("data-val"));
  let duration = Math.floor(interval / endNumber);
  let counter = setInterval(function () {
    startNumber += 1;
    number.textContent = startNumber;
    if (startNumber == endNumber) {
      clearInterval(counter);
    }
  });
});
