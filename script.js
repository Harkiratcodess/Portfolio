gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("no-scroll")

  const tl = gsap.timeline({
    onComplete: () => {
      const heroTl = gsap.timeline({ 
        delay: 0.1,          
        onComplete: () => {
          document.body.classList.remove("no-scroll") 
        }
      })

      heroTl
        .fromTo(".hero-label",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        )
        .fromTo(".hero-heading span",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power3.out" }
        )
        .fromTo(".hero-sub",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        )
        .fromTo(".hero-actions a",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power2.out", clearProps: "transform" }
        )
        .fromTo(".hero-footer",
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" }
        )
    }
  })

  tl.from(".logo", {
    x: -50,
    autoAlpha: 0,
    duration: 0.8,       
    ease: "power2.out",
  })
  
  .from(".cta-btn", {
    x: 50,
    autoAlpha: 0,
    duration: 0.5,       
    ease: "power2.out",
  }, "<" )
  .from(".nav-links li", {
    y: -20,
    autoAlpha: 0,
    duration: 0.3,       
    stagger: 0.08,
    ease: "power2.out",
  })
})
gsap.fromTo("#about .section-label",   
  { opacity: 0, x: -20 },
  {
    opacity: 1, x: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
       toggleActions: "play none none none"
    }
  }
)
gsap.fromTo(".about-title span",
  { opacity: 0, y: 40 },
  {
    opacity: 1, y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-title",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
)
gsap.fromTo(".about-num",
  { opacity: 0, x: -20 },
  {
    opacity: 1, x: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-numbers",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
)
gsap.fromTo(".about-big-desc",
  { opacity: 0, y: 30 },
  {
    opacity: 1, y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-big-desc",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
)
gsap.fromTo(".about-col",
  { opacity: 0, y: 20 },
  {
    opacity: 1, y: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-columns",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
)
gsap.fromTo(".table-col",
  { opacity: 0, y: 20 },
  {
    opacity: 1, y: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-table",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  }
)

gsap.fromTo("#skills .section-label",
  { opacity: 0, x: -20 },
  {
    opacity: 1, x: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
)
gsap.fromTo(".skills-title",
  { opacity: 0, y: 30 },
  {
    opacity: 1, y: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".skills-header",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
)
gsap.fromTo(".skill-card",
  { opacity: 0, y: 30 },
  {
    opacity: 1, y: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".skills-grid",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
)
gsap.fromTo("#projects .section-label",
  { opacity: 0, x: -20 },
  {
    opacity: 1, x: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
)

gsap.fromTo(".project-card",
  { opacity: 0, y: 60 },
  {
    opacity: 1, y: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#projects",
      start: "top 75%",
    }
  }
)
gsap.from("#statement .statement-label", {
  scrollTrigger: {
    trigger: "#statement",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out"
});

gsap.from("#statement .statement-text span", {
  scrollTrigger: {
    trigger: "#statement",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out"
});

gsap.from("#statement .statement-sub, #statement .btn-primary", {
  scrollTrigger: {
    trigger: "#statement",
    start: "top 70%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out"
});

gsap.fromTo("#contact .section-label",
  { opacity: 0, x: -20 },
  {
    opacity: 1, x: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
)


gsap.fromTo(".contact-title span",
  { opacity: 0, y: 40 },
  {
    opacity: 1, y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-title",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
)


gsap.fromTo(".contact-desc, .contact-email",
  { opacity: 0, y: 20 },
  {
    opacity: 1, y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-desc",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
)


gsap.fromTo(".contact-link",
  { opacity: 0, x: 30 },
  {
    opacity: 1, x: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-right",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
)

gsap.fromTo("#contact .section-label",
  { opacity: 0, x: -20 },
  {
    opacity: 1, x: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
)


gsap.fromTo(".contact-title span",
  { opacity: 0, y: 40 },
  {
    opacity: 1, y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-title",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
)

gsap.fromTo(".contact-desc, .contact-email",
  { opacity: 0, y: 20 },
  {
    opacity: 1, y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-desc",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
)

gsap.fromTo(".contact-link",
  { opacity: 0, x: 30 },
  {
    opacity: 1, x: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-right",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  }
)