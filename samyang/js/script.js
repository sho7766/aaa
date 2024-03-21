var swiper_horizontal = new Swiper("#swiper-container-horizontal", {
  direction: "horizontal",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper_vertical = new Swiper("#swiper-container-vertical", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$("header.white .close").click(function () {
  $(".drop_box").css("display", "none");
});
$(".menu .lines").click(function () {
  $(".drop_box").css("display", "block");
});
