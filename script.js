const tl = gsap.timeline({scrollTrigger: {
    trigger: ".part-2",
    start: "20% 50%",
    end: "100% 59%",
    scrub: 1,
    pin: true
}});

tl.to("#image-anim-1", {
    opacity: 0,
}, 'a')
.to(".image-anim", {
    rotateX: "0deg",
    top: "-10vh"
}, 'a')