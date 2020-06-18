/**
 * render the scenes to the dom
 */

/**
 * render the scenes to the view
 * @param {object} data the data to render for the scenes
 */
function initScenes({ data }) {
  // loop over the scenes to render
  let scene = 0;
  while (scene < data.length) {
    const { layers, styles } = data[scene];
    const sceneSectionElm = elFactory(
      'section',
      {
        'class': `scene-${scene}`,
        'id': 'scene',
        'style': styles,
      }
    );
    // append to the header
    document.body.appendChild(sceneSectionElm);

    //here we need to create scene progressbar
    initProgressBar(scene);
    //create the layers container
    initLayersContainer(scene);
    //here we need to create scene info layers
    initSceneInfo({currentSceneData: layers, currentSceneIndex: scene});
    //here we need to create scene info layers
    initSceneAssets({currentSceneData: layers, currentSceneIndex: scene});

    scene++;
  }
}

/**
 * render the progress bar for the current scene index
 * @param {int} currentSceneIndex current scene index we are rendering to
 */
function initProgressBar(currentSceneIndex) {
  const currentSceneSectionElm = document.querySelector(`.scene-${currentSceneIndex}`);
  const sceneProgressBar = elFactory(
    'div',
    {
      'id': 'progressbar',
    },
    elFactory('div', {})
  );

  // add the progress bar to the scene
  currentSceneSectionElm.appendChild(sceneProgressBar);
}

/**
 * render the layers container where we have all the application layers in
 * @param {int} currentSceneIndex current scene index we are rendering to
 */
function initLayersContainer(currentSceneIndex) {
  const currentSceneSectionElm = document.querySelector(`.scene-${currentSceneIndex}`);
  const sceneLayersElm = elFactory('div', {'class': 'layers'});

  // add the layers container to the scene
  currentSceneSectionElm.appendChild(sceneLayersElm);
}

/**
 * render the scene info mation sections
 * @param {int} currentSceneData current scene data we are rendering to
 * @param {int} currentSceneIndex current scene index we are rendering to
 */
function initSceneInfo({ currentSceneData, currentSceneIndex}) {
  const { sceneInfo } = currentSceneData;
  const currentSceneSectionElm = document.querySelector(`.scene-${currentSceneIndex} > .layers`);
  
  let sceneInfoIndex = 0;
  while (sceneInfoIndex < sceneInfo.length) {
    const currentSceneInfoItem = sceneInfo[sceneInfoIndex];
    const { position, content } = currentSceneInfoItem;
    const sceneInfoElm = elFactory(
      'p',
      {
        'class': `scene-info info-item-${sceneInfoIndex} ${position}`,
      },
      content
    );
    // append to the layers
    currentSceneSectionElm.appendChild(sceneInfoElm);
    sceneInfoIndex++;
  }
}

/**
 * render the scene assets that are displayed
 * @param {int} currentSceneData current scene data we are rendering to
 * @param {int} currentSceneIndex current scene index we are rendering to
 */
function initSceneAssets({ currentSceneData, currentSceneIndex}) {
  const { sceneAssets } = currentSceneData;
  const currentSceneSectionElm = document.querySelector(`.scene-${currentSceneIndex} > .layers`);
  let sceneAssetIndex = 0;
  while (sceneAssetIndex < sceneAssets.length) {
    const currentSceneAssetItem = sceneAssets[sceneAssetIndex];
    const { src, styles } = currentSceneAssetItem;
    const sceneAssetsItem = elFactory(
      'img', 
      {
        'style': styles,
        'src': src,
        'class': `layer-${sceneAssetIndex}`
      }
    );
    // append to the layers
    currentSceneSectionElm.appendChild(sceneAssetsItem);
    sceneAssetIndex++;
  }
}