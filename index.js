anime.timeline({
  easing: 'easeOutExpo',
})

.add({
  targets: '.hero',
  translateX: ['-100%', '0%'],
  scale: [0.4, 0.7],
  rotate: [180, 0],
  duration: 1000,
  opacity: [0, 1],
  offset: 0
})

.add({
  targets: '.hero',
  scale:[0.7, 0.95, 0.65, 1],
  duration: 750,
})

.add({
  targets: '.hidden-blockOne',
  opacity: [0, 1],
  scale: [0, 1],
  duration: 1500,
  translateX: ['-100%', '0%'],
  // translateY: ['100%', '0%'],
  // offset: 2500
})

.add({
  targets: '.hidden-blockTwo',
  opacity: [0, 1],
  scale: [0, 1],
  duration: 1500,
  translateX: ['-100%', '0%'],
  // translateY: ['100%', '0%'],
  // offset: 2500
})

.add({
  targets: '.text span',
  opacity: [0, 1],
  duration: 2500,
  delay: anime.stagger(100)
})

.add({
  targets: '.hidden-blockOne',
  backgroundColor: ['#fff', '#000'],
  duration: 1000,
  // offset: 2500
})

.add({
  targets: '.benjamin',
  translateX: ['-100%', '0%'],
  opacity: [0, 1],
  duration: 1000,
  scale: ['0', '1'],
  
})

