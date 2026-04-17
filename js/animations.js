gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {
  y: 80,
  opacity: 0,
  duration: 1.2
});

gsap.utils.toArray(".card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: card,
    y: 50,
    opacity: 0,
    duration: 0.8
  });
});
