/**
 * Timeline is where we can put all the animations/tweens
 */
// let scene_one = gsap.timeline({
//   // ScrollTrigger: '.scene-1 .heading', // element we want to have trigger this tween
//   scrollTrigger: {
//     trigger: '.scene-1 > .heading',
//     // animation to do something when scroll trigger activates/deactivates
//     toggleActions: "play pause reverse reset", //default toggle actions
//     /**
//      * Positions:
//      * 1st - when selected trigger element enters the screen
//      * 2nd - forward past the viewpoint, when the element has left while scrolling up
//      * 3rd - back from the bottom the element comes in view
//      * 4th - when we scroll all the way back up haging it out of view again 
//      * ------------------
//      * the 4 different positions by the toggle actions with following keywords:
//      * play 
//      * pause
//      * resume
//      * reverse
//      * restart
//      * reset
//      * complete
//      * none 
//      */
//     start: "top center", // default: top of the element hits the bottom of the view port
//     end: "bottom 20%", // default: bottom of the element hits the top of the view port
//     /**
//      * This can be funtions as well or be different elements to start element
//      * 1st - trigger or the element
//      * 2nd - the scroll (which is the viewport in this case)
//      * ----------------
//      * this makes sure that the animation starts when the 'top' of the element
//      * is at the 'center' of the viewport.
//      * 
//      * Keywords:
//      * top
//      * center
//      * bottom
//      * 
//      * or percentages/pixel values that are always relative to the top
//      */
//     markers: true, // shows the markers for the elements where animations will start
//     scrub: 2, // lock the animation playhead to the scroll bar start and end
//     /**
//      * we can use bool or int and integers will set a time in seconds to catchup to smooth
//      */
//     pin: true, // this will pin the trigger to the center or where we did the start
//     /**
//      * this allows the animations to finish before moving on to the next scene
//      */
//   },
// });

// adding elements to that timeline and chaining transitions and animations to the element
// gsap.to('.scene-1 > .heading', {
//   scrollTrigger: {
//     trigger: '.scene-1',
//     // animation to do something when scroll trigger activates/deactivates
//     toggleActions: "play pause reverse reset", //default toggle actions
//     /**
//      * Positions:
//      * 1st - when selected trigger element enters the screen
//      * 2nd - forward past the viewpoint, when the element has left while scrolling up
//      * 3rd - back from the bottom the element comes in view
//      * 4th - when we scroll all the way back up haging it out of view again 
//      * ------------------
//      * the 4 different positions by the toggle actions with following keywords:
//      * play 
//      * pause
//      * resume
//      * reverse
//      * restart
//      * reset
//      * complete
//      * none 
//      */
//     start: "top top", // default: top of the element hits the bottom of the view port
//     end: "bottom 20%", // default: bottom of the element hits the top of the view port
//     /**
//      * This can be funtions as well or be different elements to start element
//      * 1st - trigger or the element
//      * 2nd - the scroll (which is the viewport in this case)
//      * ----------------
//      * this makes sure that the animation starts when the 'top' of the element
//      * is at the 'center' of the viewport.
//      * 
//      * Keywords:
//      * top
//      * center
//      * bottom
//      * 
//      * or percentages/pixel values that are always relative to the top
//      */
//     markers: true, // shows the markers for the elements where animations will start
//     scrub: 2, // lock the animation playhead to the scroll bar start and end
//     /**
//      * we can use bool or int and integers will set a time in seconds to catchup to smooth
//      */
//     pin: true, // this will pin the trigger to the center or where we did the start
//     /**
//      * this allows the animations to finish before moving on to the next scene
//      */
//   },
//   x: 400, // how many pixels on the x axis it needs to move
//   rotation: 360, // rotation of the dom element
//   duration: 3 // how long the animation will run for
// });

// get all the scenes so we dont need to make the separate scenes
let scenes = gsap.utils.toArray('#scenes');
console.info('scenes', scenes)
// we can use the above if we want to set the same timeline scroll trigger to multiple
// elements and just make sure the trigger is called scenes

// create timelines for each of the scenes
const scene_one_timeline = gsap.timeline();
const scene_two_timeline = gsap.timeline();
const scene_three_timeline = gsap.timeline();

// animations or tweens for the scenes - remember we can chain here
// third parameter is used to know where in the timeline the tween starts
scene_one_timeline.to('.layers > .layer-1', {
  x: -100,
  duration: 8,
}, 0);

scene_one_timeline.to('.layers > .layer-2', {
  x: -50,
  duration: 8,
}, 0);

scene_one_timeline.fromTo('.layers > .info-item-1', {
  opacity: 0,
}, {
  opacity: 1,
  duration: 3,
}, 1);

scene_one_timeline.fromTo('.layers > .info-item-2', {
  opacity: 0,
}, {
  opacity: 1,
  duration: 3,
}, 3.5);


// scroll triggers for the different panels or scenes
ScrollTrigger.create({
  animation: scene_one_timeline,
  trigger: '.scene-1',
  start: 'top top',
  end: 'bottom center',
  scrub: 1,
  pin: true,
  markers: true,
  toggleClass: 'sceneActive',
  onEnter: () => console.info('enter the trigger'),
  onLeave: () => console.info('leave the trigger'),
  onBack: () => console.info('backwards to the trigger'),
  onLeaveBack: () => console.info('backwards all the way past the trigger'),
  // on update that runs for every time the scroll triggers for
  onUpdate: (self) => progressBar(self),
});