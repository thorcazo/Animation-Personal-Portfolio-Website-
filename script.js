gsap.registerPlugin(ScrollTrigger); // se registra el plugin de ScrollTrigger


ScrollTrigger.defaults({
  toggleActions: "play none none reverse"
})

gsap.to('.img-container', {
  scale: 52,
  ease: 'ease',
  scrollTrigger: {
    trigger: '.video-section',
    scrub: 1,
    start: 'top top',
    end: 'bottom',
    pin: true,
  }
})

gsap.to('.right', {
  autoAlpha: 0,
  x: 500,
  duration: 0.5,
  scrollTrigger: {
    start: 1
  }
})
gsap.to('.left', {
  autoAlpha: 0,
  x: -500,
  duration: 0.5,
  scrollTrigger: {
    start: 1
  }
})

gsap.to('.txt-bottom', {
  autoAlpha: 1,
  letterSpacing: 1,
  duration: 0.5,
  scrollTrigger: {
    start: 1
  }
})

gsap.to('.txt-bottom', {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 0.5,
  scrollTrigger: {
    start: 150
  }

})

/* tl para que aparezca las letras despues del scroll del video en cabecera */
const tl = gsap.timeline();

tl.from('.left-side div', {
  y: 150,
  opacity: 0,
  stagger: {
    amount: .4
  },
  delay: .5
}).from('.right-side', { opacity: 0, duration: 2 }, .5)
  .to('.wrapper', { x: -window.innerWidth })

  ScrollTrigger.create({
    animation: tl,
    trigger: '.wrapper',
    start: "top top",
    end: "+=600",
    scrub: 1,
    pin: true,
    ease: "ease"
  })

const timeline = gsap.timeline();

timeline.from('.title span', {
  y: 150,
  skewY: 7,   // skewY distorsiona el texto
  duration: 1,
})
  .from('.txt-bottom', {
    letterSpacing: 0,
    opacity: 0,
    duration: 0.5,
  })

