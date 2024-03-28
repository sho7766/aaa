// header
let lastScrollTop = 0;
delta = 15;
$(window).scroll(function (e) {
  let st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && lastScrollTop > 0) {
    $(".wrap header").css("top", "-70px");
  } else {
    $(".wrap header").css("top", "0px");
  }
  lastScrollTop = st;
});
//

// 메뉴 클릭시
$(".drop_box,.dimmed").css("display", "none");
$(".menu .lines").click(function () {
  $(".drop_box,.dimmed").show();
  $(".img1").show().siblings().hide();
  $(".sub_menu > div").hide();
  $(window).scroll(function () {
    $("html,body").css("display", "fixed");
  });
});
$("header.white .close").click(function () {
  $(".drop_box,.dimmed").hide();
});
//

// drop_box 에 drop_menu 메인 메뉴 호버시 서브메뉴와 이미지 체인지
$(".g").mouseenter(function () {
  $(".group").show().siblings().hide();
  $(".img1").show().siblings().hide();
});
$(".bu").mouseenter(function () {
  $(".drop_box .business").show().siblings().hide();
  $(".img2").show().siblings().hide();
});
$(".br").mouseenter(function () {
  $(".brands").show().siblings().hide();
  $(".img3").show().siblings().hide();
});
$(".i").mouseenter(function () {
  $(".ir").show().siblings().hide();
  $(".img4").show().siblings().hide();
});
$(".e").mouseenter(function () {
  $(".esg").show().siblings().hide();
  $(".img5").show().siblings().hide();
});
$(".n").mouseenter(function () {
  $(".news").show().siblings().hide();
  $(".img6").show().siblings().hide();
});
$(".c").mouseenter(function () {
  $(".careers").show().siblings().hide();
  $(".img7").show().siblings().hide();
});
//

$(".lang div p").eq(0).css("color", "#000");
$(".lang div p").click(function () {
  $(this).css("color", "#000").siblings().css("color", "#848484");
});

// section.brand slide
var swiper = new Swiper(".mySwiper1", {
  direction: "horizontal",
  loop: true,
  // cssMode: 0.5,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper2", {
  direction: "vertical",
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
//

// footer family site button effect
$(".fam_site button").click(function () {
  $(".site_box").toggleClass("on");
});
