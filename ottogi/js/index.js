// 메인페이지 로드시 마스크효과 해제
window.onload = function () {
  $(".mask").addClass("on");
};
//

// 메뉴 이벤트
let header = document.querySelector("header");
let inner = document.querySelector(".inner");
let gnb = document.querySelectorAll(".gnb>li:not(:last-child)");
let sub = document.querySelectorAll(".sub");

$(gnb).mouseenter(function () {
  $(".gnb>li>a").addClass("on");
  $(".lang > a").css({ color: "#333", textShadow: "none" }).addClass("on");
  $(header).addClass("on");
  $(sub).css("height", "358px");
  $(header).addClass("off");
});
$(header).mouseleave(function () {
  $(".gnb>li>a").removeClass("on");
  $(".lang > a").css("color", "#fff");
  $(".lang > a").removeClass("on");
  $(sub).css("height", "0");
  $(header).removeClass("on");
  $(header).removeClass("off");
});
//
// 헤더 언어 설정 버튼 클릭 효과
$(".lang > a").click(function () {
  $(".dropLang").toggleClass("on");
});
$(".dropLang ul li:first-child").addClass("on");
$(".dropLang ul li ").click(function () {
  $(this).addClass("on").siblings().removeClass("on");
});
//

// 메인 비주얼 슬라이드
var mySwiper = new Swiper(".swiper-container", {
  pagination1: {
    el: ".swiper-pagination-fraction",
    type: "fraction",
  },
  pagination: {
    el: ".swiper-pagination-progressbar ",
    type: "progressbar",
  },
  autoplay: {
    delay: 12000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  on: {
    slideChange: function () {
      var currentPage = this.realIndex + 1;
      $(".swiper-pagination1 .current").text(formatNumber(currentPage));
    },
  },
});
function formatNumber(number) {
  return number < 7 ? "0" + number : number;
}

$(".main .pause").click(function () {
  $("video").each(function () {
    this.pause();
  });
  $(this).css("display", "none");
  $(".main .play").addClass("on");
  mySwiper.autoplay.stop();
});

$(".main .play").click(function () {
  $("video").each(function () {
    this.play();
  });
  $(".main .pause").css("display", "block");
  $(".main .play").removeClass("on");
  mySwiper.autoplay.start();
});
//

// info섹션 스크롤 이벤트
let scrollDown = gsap.timeline();
scrollDown.from(".info .scroll_down ", {
  y: 100,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: scrollDown,
  trigger: ".info",
  start: "top 80%",
});
let infoTit = gsap.timeline();
infoTit.from(".info .main_tit ", {
  y: 100,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: infoTit,
  trigger: ".info",
  start: "top 60%",
});
// let one = gsap.timeline();
// one.from(".info .one", {
//   y: 100,
//   autoAlpha: 0,
//   duration: 1,
// });
// ScrollTrigger.create({
//   animation: one,
//   trigger: ".info",
//   start: "top 40%",
// });
let two = gsap.timeline();
two.from(".info .two", {
  y: 100,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: two,
  trigger: ".info .one",
  start: "top 10%",
});
let svg2 = gsap.timeline();
two.from(".info .svg2", {
  y: 100,
  autoAlpha: 0,
  duration: 0.5,
});
ScrollTrigger.create({
  animation: svg2,
  trigger: ".info .two",
  start: "top 50%",
});
let three = gsap.timeline();
three.from(".info .three", {
  y: 100,
  autoAlpha: 0,
  duration: 0.5,
});
ScrollTrigger.create({
  animation: three,
  trigger: ".info .two",
  start: "top 20%",
});
//

// global 섹션 스크롤 이벤트
let global1 = gsap.timeline();
global1.from(".global .sub_tit", {
  y: 50,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: global1,
  trigger: ".global",
  start: "top 70%",
});
let global2 = gsap.timeline();
global2.from(".global .main_tit", {
  y: 100,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: global2,
  trigger: ".global",
  start: "top 50%",
});
let global3 = gsap.timeline();
global3.from(".global .desc", {
  y: 100,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: global3,
  trigger: ".global",
  start: "top 30%",
});
let global4 = gsap.timeline();
global4.from(".global .btn_more", {
  y: 100,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: global4,
  trigger: ".global",
  start: "top 20%",
});

const popAni = document.addEventListener("DOMContentLoaded", function () {
  var imgWraps = document.querySelectorAll(".global_cont .img_wrap li");
  var imgWrapArray = Array.prototype.slice.call(imgWraps); // NodeList를 배열로 변환

  // 배열을 섞기 위한 함수
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // 아직 섞을 요소가 남아있는 동안
    while (0 !== currentIndex) {
      // 남아있는 요소 중에서 무작위 인덱스 선택
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // 현재 요소와 무작위로 선택된 요소를 교환
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // 배열을 섞은 후 요소에 클래스 추가하여 나타나도록 함
  var shuffledImgWrapArray = shuffle(imgWrapArray);
  shuffledImgWrapArray.forEach(function (imgWrap, index) {
    setTimeout(function () {
      imgWrap.classList.add("on");
    }, index * 50);
  });
});

// esg섹션 스크롤 이벤트
let esgTit = gsap.timeline();
esgTit.from(".esg .main_tit", {
  y: 100,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: esgTit,
  trigger: ".esg",
  start: "top 90%",
});
let esgSlide = gsap.timeline();
esgSlide.from(".esg .swiper", {
  y: 100,
  autoAlpha: 0,
  duration: 1,
});
ScrollTrigger.create({
  animation: esgSlide,
  trigger: ".esg",
  start: "top 50%",
});
//

// esg 섹션 슬라이드
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
});
$(".slide1").addClass("on");
$(".swiper-slide").mouseenter(function () {
  $(this).addClass("on").siblings().removeClass("on");
});
//

// product 섹션 진입시 마스크 효과
let product = document.querySelector(".product");
const bgAni = product.querySelector(".bg_ani");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};
function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      bgAni.classList.add("on");
      bgAni.style.transition = "width 4s, height 10s";
    }
  });
}
const observer = new IntersectionObserver(handleIntersection, options);
observer.observe(product);
//

// product 섹션 슬라이드
var swiper = new Swiper(".slider", {
  // spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
$(".product .pause").click(function () {
  $(this).css("display", "none");
  $(".product .play").addClass("on");
  swiper.autoplay.stop();
});
$(".product .play").click(function () {
  $(".product .pause").css("display", "block");
  $(".product .play").removeClass("on");
  swiper.autoplay.start();
});
//

// sns 섹션 슬라이드
$(".sns1").click(function () {
  $(".cont1").show();
  $(".cont2").hide();
  $(".cont3").hide();
});
$(".sns2").click(function () {
  $(".cont1").hide();
  $(".cont2").show();
  $(".cont3").hide();
});
$(".sns3").click(function () {
  $(".cont1").hide();
  $(".cont2").hide();
  $(".cont3").show();
});
//

// 스크롤할때 페이드효과 주기
