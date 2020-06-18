/**
 * app root that will render and fire off methods to render dom accordinly
 */

 window.addEventListener('load', () => {
   const { details, scenes } = DUMMY_DATA;
   
    // create the header of the application
   initHeader({ data: details });
   
   // create the scenes of the application
   initScenes({ data: scenes });
   
   // create the scenes of the application
  //  initAnimations({ data: scenes });
 }, false);