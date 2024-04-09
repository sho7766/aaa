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
  $("html, body").css({ overflow: "hidden", height: "100%" });
});
$("header .close").click(function () {
  $(".drop_box, .dimmed").hide();
  $("html, body").css({ overflow: "visible", height: "100%" });
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
$(".lang div p").eq(0).css("color", "#000");
$(".lang div p").click(function () {
  $(this).css("color", "#000").siblings().css("color", "#848484");
});
//

//CI Meaning effect
$(window).scroll(function () {
  if ($(document).scrollTop() > 4200) {
    $(".first").hide();
    $(".second").show();
    $(".third").hide();
    $(".logo_txt .txt1 svg").css({ opacity: "0.3", transition: "0.8s" });
    $(".logo_txt svg:nth-child(2)").css({ opacity: "1", transition: "0s" });
    $(".pro").css("height", "60%");
  } else if ($(document).scrollTop() < 3600) {
    $(".first, .second, .third, .fourth").hide();
    $(".logo_txt svg:nth-child(2)").css({ opacity: "1", transition: "0s" });
    $(".pro").css("height", "20%");
  } else {
    $(".first").show();
    $(".second").hide();
    $(".third").hide();
    $(".logo_txt .txt1 svg").css({ opacity: "1", transition: "0s" });
    $(".logo_txt svg:nth-child(2)").css({ opacity: "0.3", transition: "0.8s" });
    $(".pro").css("height", "40%");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 4800) {
    $(".second").hide();
    $(".third").show();
    $(".logo_txt .txt1 svg").css({ opacity: "1", transition: "0s" });
    $(".logo_txt svg:nth-child(2)").css("opacity", "1");
    $(".pro").css("height", "80%");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 5400) {
    $(".third").hide();
    $(".fourth").show();
    $(".pro").css("height", "100%");
  } else {
    $(".fourth").hide();
  }
});

// footer family site button effect
$(".fam_site button").click(function () {
  $(".site_box").toggleClass("on");
});
