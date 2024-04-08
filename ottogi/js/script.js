let bg = document.querySelector("header");
let inner = document.querySelector(".inner");
let gnb = document.querySelectorAll(".gnb>li:not(:last-child)");
let sub = document.querySelectorAll(".sub");

$(".gnb > li:last-child").mouseenter(function () {
  $(".gnb > li:last-child a").css(
    "background",
    "url(images/btn_menu_w_hover.svg)center no-repeat"
  );
});
$(".gnb > li:last-child").mouseleave(function () {
  $(".gnb > li:last-child a").css(
    "background",
    "url(images/btn_menu_w.svg)center no-repeat"
  );
});
$(gnb).mouseenter(function () {
  $(".gnb>li>a").addClass("on");
  $(".lang a").css({ color: "#333", textShadow: "none" }).addClass("on");
  $(bg).addClass("on");
  $(sub).css("height", "358px");
  $(".gnb > li:last-child a").css(
    "background",
    "url(images/btn_menu_hover.svg)center no-repeat"
  );
});
$(gnb).mouseleave(function () {
  $(".gnb>li>a").removeClass("on");
  $(".lang a").css("color", "#fff");
  $(".lang a").removeClass("on");
  $(sub).css("height", "0");
  $(bg).removeClass("on");
  $(".gnb > li:last-child a").css(
    "background",
    "url(images/btn_menu_w.svg)center no-repeat"
  );
});

// 헤더 어디든 호버해도 서브메뉴가 사라지지 않도록 하기

// 홈페이지 첫 접속시 완두콩형태의 클립이미지 에니메이션 효과주기

// 스크롤할때 페이드효과 주기
