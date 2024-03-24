$(".nav li").eq(0).find("a").addClass("on");
let intro = gsap.timeline();
intro
  .from(".hello", {
    x: -100,
  })
  .from(".point", {
    autoAlpha: 0,
    duration: 0.5,
  })
  .from(
    ".haeon",
    {
      autoAlpha: 0,
      duration: 0.8,
    },
    "txt"
  )
  .from(
    ".intro .img",
    {
      autoAlpha: 0,
      y: 500,
      duration: 0.8,
    },
    "txt"
  );
ScrollTrigger.create({
  animation: intro,
  trigger: ".intro",
  end: "70% 50%",
  onLeave: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(1).find("a").addClass("on");
    const nextSection = $(".profile");
    const scrollTop = nextSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
});
//profile 타임라인
let profile = gsap.timeline();
profile
  .from(
    ".profile h1",
    {
      x: -100,
      autoAlpha: 0,
      duration: 1,
    },
    "same"
  )
  .from(
    ".circle",
    {
      y: -20,
      autoAlpha: 0,
      duration: 0.5,
      ease: "bounce.out",
    },
    "same"
  )
  .from(
    ".right p:nth-child(2)",
    {
      x: -20,
      autoAlpha: 0,
      delay: 0.3,
    },
    "same"
  )
  .from(
    ".right p:nth-child(3), .right ul",
    {
      x: -20,
      autoAlpha: 0,
      delay: 0.4,
    },
    "same"
  );
ScrollTrigger.create({
  animation: profile,
  trigger: ".profile",
  start: "top 1%",
  pin: true,
  onLeave: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(2).find("a").addClass("on");
    const nextSection = $(".work1");
    const scrollTop = nextSection.offset().top;
    $("html, body").animate({ scrollTop: scrollTop }, 500);
  },
  onLeaveBack: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(0).find("a").addClass("on");
    const prevSection = $(".intro");
    const scrollTop = prevSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
});

let work1 = gsap.timeline();
work1
  .from(".work1 h1", {
    x: -20,
    autoAlpha: 0,
  })
  .to(".work1 .tit .highlight", { width: 160, delay: 0.2 });
ScrollTrigger.create({
  animation: work1,
  trigger: ".work1",
  start: "top 1%",
  // scrub: true,
  pin: true,
  onLeave: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(3).find("a").addClass("on");
    const nextSection = $(".work2");
    const scrollTop = nextSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
  onLeaveBack: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(1).find("a").addClass("on");
    const prevSection = $(".profile");
    const scrollTop = prevSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
});

let work2 = gsap.timeline();
work2
  .from(".work2 h1", {
    x: 20,
    autoAlpha: 0,
  })
  .to(".work2 .tit .highlight", { width: 308, delay: 0.2 });
ScrollTrigger.create({
  animation: work2,
  trigger: ".work2",
  start: "top 1%",
  pin: true,
  onLeave: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(4).find("a").addClass("on");
    const nextSection = $(".work3");
    const scrollTop = nextSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
  onLeaveBack: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(2).find("a").addClass("on");
    const prevSection = $(".work1");
    const scrollTop = prevSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
});
let work3 = gsap.timeline();
work3
  .from(".work3 h1", {
    x: -20,
    autoAlpha: 0,
  })
  .to(".work3 .tit .highlight", { width: 420, delay: 0.2 });
ScrollTrigger.create({
  animation: work3,
  trigger: ".work3",
  start: "top 1%",
  // scrub: true,
  pin: true,
  onLeaveBack: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(3).find("a").addClass("on");
    const prevSection = $(".work2");
    const scrollTop = prevSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
});

// 윈도우 스크롤 이벤트 핸들러
function updateSectionPositions() {
  sectionPositions = [];
  $("section").each(function () {
    sectionPositions.push($(this).offset().top);
  });
}

// 페이지 로드 시 초기화
updateSectionPositions();
$(".nav li").click(function (e) {
  e.preventDefault();
  let idx = $(this).index();

  // 해당 섹션으로 스크롤될 때 ScrollTrigger 애니메이션을 트리거
  if (idx === 0) {
    $("html, body").stop().animate({ scrollTop: sectionPositions[0] }, 500);
    intro.restart();
  } else if (idx === 1) {
    $("html, body").stop().animate({ scrollTop: sectionPositions[1] }, 500);
    profile.restart();
  } else if (idx === 2) {
    $("html, body").stop().animate({ scrollTop: sectionPositions[2] }, 500);
    work1.restart();
  } else if (idx === 3) {
    $("html, body").stop().animate({ scrollTop: sectionPositions[3] }, 500);
    work2.restart();
  } else if (idx === 4) {
    $("html, body").stop().animate({ scrollTop: sectionPositions[4] }, 500);
    work3.restart();
  }
  $(".nav li a").removeClass("on");
  $(".nav li").eq(idx).find("a").addClass("on");
  // ScrollTrigger 트리거 제거
  ScrollTrigger.getAll().forEach((trigger) => {
    trigger.kill();
  });
  setTimeout(function () {
    ScrollTrigger.create({
      animation: intro,
      trigger: ".intro",
      end: "70% 50%",
      onEnter: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(0).find("a").addClass("on");
      },
      onLeave: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(1).find("a").addClass("on");
        const nextSection = $(".profile");
        const scrollTop = nextSection.offset().top;
        $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
      },
    });
    ScrollTrigger.create({
      animation: profile,
      trigger: ".profile",
      start: "top 1%",
      end: "70% 50%",
      onEnter: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(1).find("a").addClass("on");
      },
      onLeave: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(2).find("a").addClass("on");
        const nextSection = $(".work1");
        const scrollTop = nextSection.offset().top;
        $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
      },
      onLeaveBack: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(0).find("a").addClass("on");
        const prevSection = $(".intro");
        const scrollTop = prevSection.offset().top;
        $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
      },
    });
    ScrollTrigger.create({
      animation: work1,
      trigger: ".work1",
      start: "top 1%",
      end: "70% 50%",
      onEnter: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(2).find("a").addClass("on");
      },
      onLeave: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(3).find("a").addClass("on");
        const nextSection = $(".work2");
        const scrollTop = nextSection.offset().top;
        $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
      },
      onLeaveBack: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(1).find("a").addClass("on");
        const prevSection = $(".profile");
        const scrollTop = prevSection.offset().top;
        $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
      },
    });
    ScrollTrigger.create({
      animation: work2,
      trigger: ".work2",
      start: "top 1%",
      end: "70% 50%",
      //scrub: true,
      onEnter: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(3).find("a").addClass("on");
      },
      onLeave: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(4).find("a").addClass("on");
        const nextSection = $(".work3");
        const scrollTop = nextSection.offset().top;
        $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
      },
      onLeaveBack: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(2).find("a").addClass("on");
        const prevSection = $(".work1");
        const scrollTop = prevSection.offset().top;
        $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
      },
    });
    ScrollTrigger.create({
      animation: work3,
      trigger: ".work3",
      start: "top 1%",
      end: "70% 50%",
      //scrub: true,
      onEnter: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(4).find("a").addClass("on");
      },
      onLeaveBack: () => {
        $(".nav li a").removeClass("on");
        $(".nav li").eq(3).find("a").addClass("on");
        const prevSection = $(".work2");
        const scrollTop = prevSection.offset().top;
        $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
      },
    });
    ScrollTrigger.refresh();
  }, 1000);
});
