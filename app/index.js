/**
 * app root that will render and fire off methods to render dom accordinly
 */


// add asasets loaded array and listen when array is being pushed to
const LOADED_ASSETS = [];

/**
 * This will run and make sure the images of all the layers are loaded on the application
 * and displaying before we stop the loader
 */
function checkAssetsForScenesReady() {
  const layersElms = document.querySelectorAll('img');
  const assetsLength = layersElms.length;
  let imgAsset = 0;
  while (imgAsset < assetsLength) {
    const currentLayer = layersElms[imgAsset];
    currentLayer.addEventListener('load', () => {
      LOADED_ASSETS.push(currentLayer);
      // here we push and check if the assets are all in.
      globalLoaderToggle({ showLoader: LOADED_ASSETS.length !== assetsLength });
    });
    imgAsset++;
  }
}

/**
 * initialuize tha pplication and load dom elements
 */
function initApp() {
  const { details, scenes } = DUMMY_DATA;
  // create the header of the application
  initHeader({ data: details });
  // create the scenes of the application
  initScenes({ data: scenes });
  // create the scenes of the application
  // might be easier to pass the data down to  this frim inside scenes?
  initAnimations({ data: scenes });
  // make sure scene images are all ready
  checkAssetsForScenesReady();
}

/**
 * Here we check if the application is ready to show the content else show the loader
 */
if (document.readyState == 'loading') {
  // loading yet, wait for the event
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  // DOM is ready!
  initApp();
}