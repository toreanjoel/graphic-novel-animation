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
   // might be easier to pass the data down to  this frim inside scenes?
   initAnimations({ data: scenes });

   // suggestion for scroll, if there is no active scece, scroll faster but
   // if there is slow the scroll down
 }, false);