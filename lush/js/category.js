$(function () {
  /* main 카테고리소개 > 상품이미지 */
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

  // main 카테고리소개 > 상품이미지 초기화
  function lushInitiator() {
    lushAll.forEach(function (eachSWiper) {
      eachSWiper.autoplay.stop();
    });
  }
  lushInitiator();

  // main 카테고리소개
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
        lushInitiator();
        lushAll[categorySwiper.realIndex].slideTo(0, 0, false);
        lushAll[categorySwiper.realIndex].autoplay.start();
      },
    },
  });
});
