document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    onComplete: () => {

      const heroTl = gsap.timeline({ delay: 0.3 });

     heroTl
  .fromTo(".hero-label",
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
  )
  .fromTo(".hero-heading span",
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
  )
  .fromTo(".hero-sub",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
  )
  .fromTo(".hero-actions a",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" }
  )
  .fromTo(".hero-footer",
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  )
    },
  });

  tl.from(".logo", {
    x: -50,
    autoAlpha: 0,
    duration: 0.8,
    ease: "power2.out",
  })
    .from(".nav-links li", {
      y: -20,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    })
    .from(".cta-btn", {
      x: 50,
      autoAlpha: 0,
      duration: 0.5,
      ease: "power2.out",
    });
});
