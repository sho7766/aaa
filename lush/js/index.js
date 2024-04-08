let bg = document.querySelector(".lush_value");
let circle = document.querySelectorAll(".lush_value ul li");
let gnb = document.querySelectorAll(".topmain nav ul li a");

// menu
window.onscroll = function () {
  let ht = document.documentElement.scrollTop;
  if (ht >= 0 && ht < 440) {
    document.querySelector("header").style.background = "none";
    document.querySelector("header").style.borderBottom = "none";
    document.querySelector(".logo").style.backgroundImage =
      "url(images/logo.svg)";
    gnb.forEach(function (value, index) {
      value.style.color = "#fff";
    });
  } else {
    document.querySelector("header").style.background = "white";
    document.querySelector("header").style.borderBottom = "1px solid #ccc";
    document.querySelector(".logo").style.backgroundImage =
      "url(images/logo_black.svg)";
    gnb.forEach(function (value, index) {
      value.style.color = "#333";
    });
  }
};

//lush info
$(function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    grabCursor: true,
  });
});

// lush category
$(function () {
  /* lush_category 카테고리소개 > 상품이미지 */
  const $lush = $(".lush_pro_swiper");
  const lushAll = [];

  $lush.each(function () {
    const autoSwiper = new Swiper(this, {
      slidesPerView: "auto",
      grabCursor: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      on: {
        reachEnd: function () {
          categorySwiper.slideNext();
        },
      },
    });
    $(".lush_pro_swiper .swiper-slide").on("mouseenter", function () {
      autoSwiper.autoplay.stop();
    });
    $(".lush_pro_swiper .swiper-slide").on("mouseleave", function () {
      autoSwiper.autoplay.start();
    });
    lushAll.push(autoSwiper);
  });

  // lush_category main 카테고리소개 > 상품이미지 초기화
  function lushProInitiator() {
    lushAll.forEach(function (eachSWiper) {
      eachSWiper.autoplay.stop();
      $(".category_img").removeClass("on");
    });
  }
  lushProInitiator();

  // lush_category main 카테고리소개
  const categorySwiper = new Swiper(".lush_category_swiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 500,
    grabCursor: true,
    rewind: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        lushProInitiator();
        lushAll[categorySwiper.realIndex].slideTo(0, 0, false);
        lushAll[categorySwiper.realIndex].autoplay.start();
      },
    },
  });
  $("figure").on("click", function () {
    $(".category_img").toggleClass("on");
  });
});

// lush_value 시작
circle.forEach(function (value, index) {
  value.classList.add("on");
  value.onmouseenter = function () {
    bg.style.backgroundImage = "url(images/main_value" + (index + 1) + ".jpg)";
  };
});
bg.onmouseleave = function () {
  bg.style.backgroundImage = "none";
};
$(circle).mouseenter(function () {
  $(this).siblings().removeClass("on");
});
$(circle).mouseleave(function () {
  $(this).siblings().addClass("on");
});
// lush_value 끝

// qrbox숨기기
$(".mainqr button").click(function () {
  $(".qrbox").hide();
});

// 클릭시 최상단으로
$(".q_gotop").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 300);
});

// simpleparallax
$(function () {
  var image = document.querySelector(".survey_img img");
  new simpleParallax(image, {
    scale: 1.3,
    delay: 0.6,
    transition: "cubic-bezier(0,0,0,1)",
  });
  var image = document.querySelector(".share_img img");
  new simpleParallax(image, {
    scale: 1.3,
    delay: 0.6,
    transition: "cubic-bezier(0,0,0,1)",
  });
  var image = document.querySelector(".shop_img img");
  new simpleParallax(image, {
    scale: 1.3,
    delay: 0.6,
    transition: "cubic-bezier(0,0,0,1)",
  });
});
