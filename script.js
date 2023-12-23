// Create a GSAP timeline
const path = document.querySelector(".path");

const pathLength = path.getTotalLength();

const timeline = gsap.timeline({
  paused: true,
  scrollTrigger: {
    trigger: "#test1",
    markers: true,
    start: "top center",
    end: "bottom -2000px",
    scrub: true,
    pin: ".durability-section",
  },
});
const boxes = ["#test1", "#test2", "#test3"];

gsap.set(["#test1", "#test2", "#test3"], { opacity: 0 });

timeline.set("#test1", { opacity: 1 });

timeline
  .to("#test1", {
    motionPath: {
      path: ".path",
      align: ".path",
      alignOrigin: [0.5, 0.5],
      // autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: 3,

    ease: "slow(0.7,0.7,false)",
  })

  // Set opacity to 0 for #test1 when the animation ends
  .set("#test1", { opacity: 0 }, "+=0.1"); // Immediate opacity change after the animation ends
timeline
  .set("#test2", { opacity: 1 })
  // Add the second motion path animation after the first animation is one-third done
  .to("#test2", {
    opacity: 1, // Make #test2 immediately visible
    motionPath: {
      path: ".path",
      align: ".path",
      alignOrigin: [0.5, 0.5],
      // autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: 3,

    ease: "slow(0.7,0.7,false)",
  })
  // Set opacity to 0 for #test2 when the animation ends
  .set("#test2", { opacity: 0 }, "+=0.1");

timeline
  .set("#test3", { opacity: 1 })

  // Add the third motion path animation after the second animation is one-third done
  .to("#test3", {
    opacity: 1, // Make #test3 immediately visible
    motionPath: {
      path: ".path",
      align: ".path",
      alignOrigin: [0.5, 0.5],
      // autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: 3,
    ease: "slow(0.7,0.7,false)",
  })
  .set("#test3", { opacity: 0 }, "0.1"); // Immediate opacity change after the animation ends

// Create a ScrollTrigger to trigger the timeline and use scrubbing
