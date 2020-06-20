/**
 * app root that will render and fire off methods to render dom accordinly
 */
const loadingElm = document.querySelector(".loading");
const bodyElm = document.querySelector('body');

/**
 * loader for the application will update the dom and the styles to know if it should show or not
 * @param {bool} showLoader flag that will be used to toggle the styles of the inital loader element 
 */
function toggleLoader({ showLoader }) {
  const loadingElm = document.querySelector(".loading");
  const bodyElm = document.querySelector('body');

  if(showLoader) {
    bodyElm.style.overflowY = 'hidden'
  } else {
    loadingElm.style.display = 'none';
    bodyElm.style.overflowY = 'visible'
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

  // toggle loader based off dom content
  toggleLoader({ showLoader: false });
}

/**
 * Here we check if the application is ready to show the content else show the loader
 */
if (document.readyState == 'loading') {
  // toggle loader based off dom content
  toggleLoader({ showLoader: true });
  // loading yet, wait for the event
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  // DOM is ready!
  initApp();
}