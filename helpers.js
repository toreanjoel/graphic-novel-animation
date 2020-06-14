/**
 *  this will send update values for the progress bar on the scene
 * @param {obj} currentContextScene dom element that we are going to activate progress bar for 
 * TODO: here we could create and append the element and no use what exists
 */
function progressBar(currentContextScene) {
  const { pin } = currentContextScene;
  const currentElmProgressBar = pin.querySelector('#progressbar');
  currentElmProgressBar.style.width = `${currentContextScene.progress * 100}%`;
}