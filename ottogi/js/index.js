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
