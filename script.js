gsap.registerPlugin(ScrollTrigger); // se registra el plugin de ScrollTrigger


gsap.to('.img-container', {
  scale: 52,
  ease: 'ease',
  scrollTrigger: {
    trigger:'.video-section',
    scrub: 1,
    start: 'top top',
    end: 'bottom',
    pin: true,
  }
})




const timeline = gsap.timeline();

timeline.from('.title span', {
  y: 150,
  skewY: 7,   // skewY distorsiona el texto
  duration: 1,
})
  .from('.txt-bottom', {
    letterSpacing: -10,
    opacity: 0,
    duration: 0.5,
  })

