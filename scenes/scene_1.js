/**
 * Source code and scripts for the scene containing the init, timelines and tweens
 * as well as scroller setup
 */

/**
 * timelines
 */
const scene_one_timeline = gsap.timeline();

/**
 * Layers elements
 */
const scene_one = '.scene-1';
const scene_one_layers = `${scene_one} > .layers`;

/**
 * TWEENS for each of the elements
 */
scene_one_timeline.fromTo(`.scene-1 > .layers > .layer-1`, {}, {
  x: -100,
  duration: 8,
}, 0);

scene_one_timeline.fromTo(`${scene_one_layers} > .layer-2`, {}, {
  x: -50,
  duration: 8,
}, 0);

scene_one_timeline.fromTo(`${scene_one_layers} > .info-item-1`, {
  opacity: 0,
}, {
  opacity: 1,
  duration: 3,
}, 1);

scene_one_timeline.fromTo(`${scene_one_layers} > .info-item-2`, {
  opacity: 0,
}, {
  opacity: 1,
  duration: 3,
}, 3.5);

/**
 * scroller events setup for the scenes
 */
ScrollTrigger.create({
  animation: scene_one_timeline,
  trigger: scene_one,
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