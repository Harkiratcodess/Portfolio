# IDENTITY_PROTOCOL — Personal Portfolio

> A dark, minimal developer portfolio built with raw HTML, CSS, and GSAP scroll animations.

---

## Overview

This is my personal portfolio site — designed around a terminal/monospace aesthetic. It focuses on clean layout, scroll-triggered animations, and a no-framework approach. Built to represent who I am as a BCA student working toward full-stack development and AI/ML.

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, role, and entry animation |
| **About** (`#about`) | "Logic Over Surface" — background, vision, methodology |
| **Statement** (`#statement`) | "Mindset" — philosophy quote with CTA |
| **Projects** | Work and builds |
| **Contact** (`#contact`) | Links, email, and collaboration CTA |

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, flexbox, monospace grid layout
- **GSAP + ScrollTrigger** — all scroll-based animations
- **Font** — Share Tech Mono (Google Fonts)
- **No frameworks. No build tools.**

---

## Animations

All animations use GSAP `ScrollTrigger`. Key rules applied throughout:

- Each element uses **itself as its own trigger** (not the parent section) to prevent premature firing on tall sections
- `start: "top 95%"` used for bottom-heavy sections (Mindset, Contact) so animations fire exactly when the element enters the viewport
- No duplicate ScrollTrigger registrations

```js
// Pattern used across all sections
gsap.from(".element", {
  scrollTrigger: {
    trigger: ".element",   
    start: "top 95%",
    toggleActions: "play none none none"
  },
  y: 30,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out"
});
```

---

## Project Structure

```
portfolio/
├── index.html
├── style.css
├── script.js        # All GSAP animations
└── README.md
```




## About Me

I'm a BCA student with a deep focus on backend systems, database architecture, and full-stack development. My roadmap leads toward Full-Stack Development and AI/ML — building systems that don't just work, they think.

- Currently open to **internships and collaborations**
- Reach out via the contact section or links below

---

## Contact

Add your links here:

- **Email** — `your@email.com`
- **GitHub** — `github.com/yourusername`
- **LinkedIn** — `linkedin.com/in/yourusername`

---

## License

This project is open for reference and inspiration. Please don't copy it wholesale — build your own version.