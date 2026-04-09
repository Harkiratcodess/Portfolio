
document.addEventListener("DOMContentLoaded", () => {

  const tl = gsap.timeline()

  tl.from(".logo", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  })
  .from(".nav-links li", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out"
  })
  .from(".cta-btn", {
    x: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  })

})