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
$(".lang").click(function () {
  $(".dropLang").toggleClass("on");
});
//

// 스크롤할때 페이드효과 주기

var swiper = new Swiper(".swiper-container", {
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
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
});

// product sec 진입시 마스크 효과

var swiper = new Swiper(".slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// const animationContainer = document.querySelector(".lottie-animation");

// // Lottie 애니메이션 로드
// const animation = bodymovin.loadAnimation({
//   container: animationContainer, // 애니메이션을 표시할 요소
//   renderer: "svg", // 애니메이션 렌더링 방식 (svg 또는 canvas)
//   loop: true, // 반복 여부
//   autoplay: true, // 자동 재생 여부
//   path: "js/svg1.json", // 다운로드한 Lottie 파일의 경로
// });
// function randomSize() {
//   return Math.random() * 200 + 100; // Adjust the range of random size as needed
// }
// gsap.to(".global_cont img", {
//   duration: 1, // Duration of the animation
//   scaleX: randomSize(), // Random scaleX value
//   scaleY: randomSize(), // Random scaleY value
//   ease: "power2.out", // Easing function
//   onComplete: function () {
//     // After the animation completes, repeat the animation
//     gsap.to(".global_cont img", {
//       duration: 1,
//       scaleX: randomSize(),
//       scaleY: randomSize(),
//       ease: "power2.out",
//       onComplete: function () {
//         // Repeat the animation indefinitely
//         gsap.delayedCall(0, randomSize);
//       },
//     });
//   },
// });
