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

/**
 * This will import the files and dynaically add them to the dom
 * @param {string} jsFilePath 
 */
function includeJs(jsFilePath) {
  var js = document.createElement('script');

  js.type = 'text/javascript';
  js.src = jsFilePath;

  document.body.appendChild(js);
  return js;
}

/**
 * This will create dom elements 
 * @param {DOMElm} type The DOM element we want to create 
 * @param {*} attributes any attributes we want to add to the element i.e style, type, src etc.
 * @param  {...any} children dom elements that we want to nest inside of the element
 */
function elFactory(type, attributes, ...children) {
  const el = document.createElement(type)
  if (attributes) {
    for (key in attributes) {
      el.setAttribute(key, attributes[key])
    }
  }

  if (children) {
    children.forEach(child => {
      if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child))
      } else {
        el.appendChild(child)
      }
    })
  }

  return el
}
