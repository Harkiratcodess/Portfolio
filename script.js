gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("no-scroll")

  const tl = gsap.timeline({
    onComplete: () => document.body.classList.remove("no-scroll")
  })

  tl.from(".logo", {
    x: -40, autoAlpha: 0, duration: 0.5, ease: "power2.out"
  })
  .from(".cta-btn", {
    x: 40, autoAlpha: 0, duration: 0.5, ease: "power2.out"
  }, "<")
  .from(".nav-links li", {
    y: -16, autoAlpha: 0, duration: 0.3, stagger: 0.06, ease: "power2.out"
  })
  .fromTo(".hero-label",
    { opacity: 0, y: -15 },
    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
    "-=0.05"
  )
  .fromTo(".hero-heading span",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.45, stagger: 0.12, ease: "power3.out" },
    "-=0.1"
  )
  .fromTo(".hero-sub",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
    "-=0.1"
  )
  .fromTo(".hero-actions a",
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.25, stagger: 0.08, ease: "power2.out", clearProps: "transform" },
    "-=0.15"
  )
  .fromTo(".hero-footer",
    { opacity: 0 },
    { opacity: 1, duration: 0.25, ease: "power1.out" },
    "-=0.05"
  )
})


gsap.fromTo("#about .section-label",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
    scrollTrigger: { trigger: "#about", start: "top 80%", toggleActions: "play none none none" }
  }
)
gsap.fromTo(".about-title span",
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
    scrollTrigger: { trigger: ".about-title", start: "top 80%", toggleActions: "play none none none" }
  }
)
gsap.fromTo(".about-num",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
    scrollTrigger: { trigger: ".about-numbers", start: "top 85%", toggleActions: "play none none none" }
  }
)
gsap.fromTo(".about-big-desc",
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
    scrollTrigger: { trigger: ".about-big-desc", start: "top 85%", toggleActions: "play none none none" }
  }
)
gsap.fromTo(".about-col",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out",
    scrollTrigger: { trigger: ".about-columns", start: "top 85%", toggleActions: "play none none none" }
  }
)
gsap.fromTo(".table-col",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out",
    scrollTrigger: { trigger: ".about-table", start: "top 90%", toggleActions: "play none none none" }
  }
)
gsap.fromTo("#skills .section-label",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
    scrollTrigger: { trigger: "#skills", start: "top 80%", toggleActions: "play none none none" }
  }
)
gsap.fromTo(".skills-title",
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
    scrollTrigger: { trigger: ".skills-header", start: "top 80%", toggleActions: "play none none none" }
  }
)
gsap.fromTo(".skill-card",
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
    scrollTrigger: { trigger: ".skills-grid", start: "top 85%", toggleActions: "play none none none" }
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
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-links a")

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

    
      navLinks.forEach(link => link.classList.remove("active"))

      const id = entry.target.getAttribute("id")
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`)
      if (activeLink) activeLink.classList.add("active")
    }
  })
}, {
  threshold: 0.3
})

sections.forEach(section => observer.observe(section))
const hamburger = document.getElementById("hamburger")
const navLinkss = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open")
  navLinkss.classList.toggle("open")
})

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open")
    navLinks.classList.remove("open")
  })
})