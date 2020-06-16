/**
 * Source code and scripts for the scene containing the init, timelines and tweens
 * as well as scroller setup
 */

/**
 * timelines
 */
const scene_two_timeline = gsap.timeline();

/**
 * Layers elements
 */
const scene_two = '.scene-2';
const scene_two_layers = `${scene_two} > .layers`;

/**
 * scroller events setup for the scenes
 */
ScrollTrigger.create({
  animation: scene_two_timeline,
  trigger: scene_two,
  start: 'top top',
  end: 'bottom center',
  scrub: 1,
  pin: true,
  toggleClass: 'sceneActive',
  onEnter: () => console.info('enter the trigger'),
  onLeave: () => console.info('leave the trigger'),
  onBack: () => console.info('backwards to the trigger'),
  onLeaveBack: () => console.info('backwards all the way past the trigger'),
  // on update that runs for every time the scroll triggers for
  onUpdate: (self) => progressBar(self),
});

/**
 * TWEENS for each of the elements
 */