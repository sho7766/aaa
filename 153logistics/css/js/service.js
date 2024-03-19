gsap.to(".fade_box1", {
  autoAlpha: 0,
  scrollTrigger: {
    scrub: true,
    trigger: ".fade_box1",
    start: 2000,
    end: 2500,
  },
});

gsap.to(".fade_box2", {
  autoAlpha: 1,

  scrollTrigger: {
    scrub: true,
    trigger: ".fade_box2",
    start: 2500,
    end: 2500,
  },
});

gsap.to(".fixed_cont", {
  xPercent: -100,
  x: () => innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".fixed_cont",
    start: "top top",
    end: () => innerWidth * 4,
    scrub: true,
    pin: true,
    toggleClass: "on",
    start: 500,
    end: 20000,
  },
});

gsap.to(".scroll_img", {
  x: -500,
  // autoAlpha: 0,
  scrollTrigger: {
    scrub: true,
    trigger: ".img_wrap .img",
    start: 2000,
    end: 2500,
    toggleClass: "on",
  },
});
gsap.to(".scroll_img", {
  x: -2500,
  // autoAlpha: 0,
  scrollTrigger: {
    scrub: true,
    trigger: ".img_wrap .img:nth-child(2n)",
    start: 2500,
    end: 4000,
    toggleClass: "on",
  },
});
