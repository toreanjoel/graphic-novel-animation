/**
 * All of the functions used for the animation setup on the elements
*/

// here we setup an item in memory globally
window.novelish = {};

/**
 * Here we have he functions that run when we init the application after
 * the renders are complete to stup animations
 * @param {object} data scene data init for animations of the elements 
 */
function initAnimations({ data }) {
  // setup timelines first
  initTimelines({ scenes: data });
  //setup the transitions of the assets
  initSceneLayers({ scenes: data });
  // here we setup the scroll trigger
  initScrollTriggers({ scenes: data });
}

/**
 * This will setup all the timelines for all of the scenes
 * @param {object} scenes list of scenecs to render
 */
function initTimelines({ scenes }) {
  let scenesIndex = 0;
  while (scenesIndex < scenes.length) {
    const currentScene = scenes[scenesIndex];
    const { duration } = currentScene;
    // here we setup the timelines in memory
    if (window.novelish[`scene-${scenesIndex}`] === undefined) {
      // create timeline
      window.novelish[`scene-${scenesIndex}`] = gsap.timeline();
      // here we check if the scene has a duration set
      if(duration) {
        window.novelish[`scene-${scenesIndex}`].timeScale(0.5)
      }
    }
    scenesIndex++;
  }
}

/**
 * the setup and renderer of the animations for each of the layers
 * @param {object} scenes list of scenecs to render
 */
function initSceneLayers({ scenes }) {
  let scenesIndex = 0;
  while (scenesIndex < scenes.length) {
    const currentScene = scenes[scenesIndex];
    const { layers } = currentScene;
    //setup animations for info-items and layers
    getAssetsData({ sceneAssets: layers, timelineInstance: scenesIndex });
    scenesIndex++;
  }
}

/**
 * this goes through all layer items and then gets data for the animations
 * @param {object} sceneAssets list of scenecs to render
 * @param {*} timelineInstance instance of the timeline we want to attatch animations to
 */
function getAssetsData({ sceneAssets, timelineInstance }) {
 for (const key in sceneAssets) {
  let currentLayerAsset = sceneAssets[key];
  prepareAssetAnmations({
    asset: currentLayerAsset,
    assetType: key,
    timelineInstance,
  });
 }
}

/**
 * This will get all the animations of all of the types
 * @param {*} asset current asset that will be animated
 * @param {*} assetType the type of the asset that will be animated
 * @param {*} timelineInstance instance of the timeline we want to attatch animations to
 * TODO: in future allow for all three tween options
 */
function prepareAssetAnmations({ asset, assetType, timelineInstance }) {
  const currentTimeline = window.novelish[`scene-${timelineInstance}`];
  let assetIndex = 0;
  while (assetIndex < asset.length) {
    const currentAsset = asset[assetIndex];
    const { animation } = currentAsset;
    //setup the tween if the animation key and the timeline exists
    if (currentTimeline && animation) {
      //here we get the animation items
      const { startAt, from, to} = animation;
      // currentTimeline.fromTo()
      switch (assetType) {
        case 'sceneInfo':
          currentTimeline.fromTo(
            `.scene-${timelineInstance} > .layers > .info-item-${assetIndex}`,
            from, to, startAt);
          break;
        case 'sceneAssets':
          currentTimeline.fromTo(
            `.scene-${timelineInstance} > .layers > .layer-${assetIndex}`,
            from, to, startAt);
        break;
        default:
          break;
      }
    }
    assetIndex++;
  }
}

/**
 * setting up the scroll trigger based off the timelines in memory
 * @param {*} scenes the current scenes where animations will be played on
 */
function initScrollTriggers({ scenes  }) {
  const timelines = window.novelish;
  // loop over global novel timeline instances
  for (const key in timelines) {
    let timelineItem = timelines[key];
    /**
     * scroller events setup for the scenes
     */
    ScrollTrigger.create({
      animation: timelineItem,
      trigger: `.${key}`,
      start: 'top top',
      end: 'bottom center',
      scrub: true,
      pin: true,
      // below we are keeping these but they will be commented out and used
      // for a later time
      // markers: true,
      toggleClass: 'sceneActive',
      onEnter: () => console.info('enter the trigger'),
      onLeave: () => console.info('leave the trigger'),
      onBack: () => console.info('backwards to the trigger'),
      onLeaveBack: () => console.info('backwards all the way past the trigger'),
      // on update that runs for every time the scroll triggers for
      onUpdate: (self) => progressBar(self),
    });
  }
}

/**
 *  this will send update values for the progress bar on the scene
 * @param {obj} currentContextScene dom element that we are going to activate progress bar for 
 * TODO: here we could create and append the element and no use what exists
 */
function progressBar(currentContextScene) {
  const { pin } = currentContextScene;
  if (pin) {
    const currentElmProgressBar = pin.querySelector('#progressbar');
    if(currentElmProgressBar) {
      currentElmProgressBar.style.width = `${currentContextScene.progress * 100}%`;
    }
  }
}
