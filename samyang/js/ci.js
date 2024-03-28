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
// let idx = $(this).index();
// $(".drop_menu .main_menu li")
//   .eq(idx)
//   .mouseenter(function () {});

//CI Meaning effect
$(".scroll_page .meaning").scroll(function () {
  let ht = $(".meaning").offsetHeigth();
  if (ht < "200vh") {
    $("");
  }
});

// footer family site button effect
$(".fam_site button").click(function () {
  $(".site_box").toggleClass("on");
});
