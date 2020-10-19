/**
 * app root that will render and fire off methods to render dom accordinly
 */


// add asasets loaded array and listen when array is being pushed to
const LOADED_ASSETS = [];

function autoPlayScrollerElm() {
  // auto scroller
  function autoScroll(shouldScroll) {
    if (shouldScroll) {
      const bodyElm = document.querySelector('html, body');
      window.autoScrollerTicker = setInterval(() => {
        bodyElm.scrollBy(0, 25)
      }, 1000/60)
    } else {
      // remove the scroller
      clearInterval(window.autoScrollerTicker);
    }
  }
  // create the chekcbox and add
  const autoScrollCheckboxElm = elFactory('div',
    { 'type': 'checkbox', 'class': 'auto-play-wrapper' },
    elFactory('span', {}, 'toggle autoscroll '),
    elFactory('input',
      { 'type': 'checkbox', 'class': 'auto-play--check' }
    ));
  document.body.appendChild(autoScrollCheckboxElm);
  // setup the event listener on the elem
  if (autoScrollCheckboxElm) {
    const getCheckbox = document.querySelector('.auto-play--check');
    getCheckbox.addEventListener('click', (event) => {
      // here we need to run the function that will auto scroll the page
      autoScroll(event.target.checked);
    });
  }
}

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
      globalLoaderToggle({
        showLoader: LOADED_ASSETS.length !== assetsLength,
        percentLoaded: calculatePercentage({
          currentValue: LOADED_ASSETS.length,
          outOf: assetsLength,
        })
      });
    });
    imgAsset++;
  }
}

/**
 * Register servive worker on a new thread if its able to and then run service worker code
 */
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    // register the service worker in the root app level
    navigator.serviceWorker.register('../sw.js'); 
  };
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
  // create the header of the application
  initFooter({ data: details });
  // might be easier to pass the data down to  this frim inside scenes?
  initAnimations({ data: scenes });
  // make sure scene images are all ready
  checkAssetsForScenesReady();
  //here we ready the auto scroller
  autoPlayScrollerElm();
  // init the service worker
  initServiceWorker();
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