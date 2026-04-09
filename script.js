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

const heroTl = gsap.timeline({ delay: 0.5 })

heroTl.from(".hero-label", {
  y: -20,
  autoAlpha: 0,
  duration: 0.6,
  ease: "power2.out"
})


.from(".hero-heading span", {
  y: 60,
  autoAlpha: 0,
  duration: 0.8,
  stagger: 0.2,       
  ease: "power3.out"
})


.from(".hero-sub", {
  y: 30,
  autoAlpha: 0,
  duration: 0.6,
  ease: "power2.out"
})

.from(".hero-actions a", {
  y: 20,
  autoAlpha: 0,
  duration: 0.5,
  stagger: 0.15,
  ease: "power2.out"
})

.from(".hero-footer", {
  autoAlpha: 0,
  duration: 0.5,
  ease: "power2.out"
})