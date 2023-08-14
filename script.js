// GSAP is used here for coordinated animation transition.

const tl = gsap.timeline({ defaults: {duration: 1} })
tl.fromTo('.circle', { scale: 170 }, { scale:0, duration: 2, ease: Power1.easeIn }) // This will transition the circle size from big to small.
tl.fromTo('header', { delay: 2, width: 0, margin: '0 auto', opacity: 0 }, { width: '100%', maxWidth: 'unset', opacity: 1 }) // Then this will transition the width of the header from zero to full from the center.
tl.fromTo('.navbar-brand', { opacity: 0 }, { opacity: 1 })
tl.fromTo('li', { y: '5', opacity: 0 }, { y:0, opacity:1 })
tl.fromTo('h1', { y: '5', opacity: 0 }, { y:0, opacity:1 })