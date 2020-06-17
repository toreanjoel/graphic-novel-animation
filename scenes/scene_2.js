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
 * TWEENS for each of the elements
 */
scene_two_timeline.fromTo(`${scene_two_layers} > .layer-8`, {}, {
  height: 205,
  duration: 8,
}, 0);

scene_two_timeline.fromTo(`${scene_two_layers} > .layer-7`, {}, {
  y: -200,
  duration: 8,
}, 0);

scene_two_timeline.fromTo(`${scene_two_layers} > .layer-6`, {}, {
  y: -150,
  duration: 8,
}, 0);

scene_two_timeline.fromTo(`${scene_two_layers} > .layer-5`, {}, {
  y: -100,
  duration: 8,
}, 0);

scene_two_timeline.fromTo(`${scene_two_layers} > .layer-4`, {}, {
  y: -75,
  duration: 8,
}, 0);

scene_two_timeline.fromTo(`${scene_two_layers} > .layer-3`, {}, {
  y: -50,
  duration: 8,
}, 0);

scene_two_timeline.fromTo(`${scene_two_layers} > .layer-2`, {}, {
  y: -20,
  duration: 8,
}, 0);

scene_two_timeline.fromTo(`${scene_two_layers} > .layer-1`, {}, {
  y: -10,
  duration: 8,
}, 0);

scene_two_timeline.fromTo(`${scene_two_layers} > .info-item-1`, {
  opacity: 0,
}, {
  opacity: 1,
  duration: 3,
}, 1);

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