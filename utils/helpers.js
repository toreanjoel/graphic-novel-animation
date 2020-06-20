/**
 * General JS/CSS import helper
 * @param {string} path the path of the file we want to add
 * @param {string} type if its a style or script
 */
function cssJsImport({ path, type }) {
  const isJS = type === 'js';
  const fileType = isJS ? 'script' : 'link';
  const fileAttributes = isJS ? {
    type: 'text/javascript',
    src: path,
  } : {
    rel: 'stylesheet',
    href: path,
  };

  const includedFile = elFactory(fileType, fileAttributes);
  const parentElm = isJS ? document.body : document.head;
  parentElm.appendChild(includedFile);
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

/**
 * loader for the application will update the dom and the styles to know if it should show or not
 * @param {bool} showLoader flag that will be used to toggle the styles of the inital loader element 
 * @param {int} percentLoaded the ammount loaded so far
 */
function globalLoaderToggle({ showLoader, percentLoaded }) {
  const loadingElm = document.querySelector('.loading');
  const bodyElm = document.querySelector('body');
  const percentageElm = document.querySelector('.loading--percent');

  if(!showLoader) {
    loadingElm.style.display = 'none';
    bodyElm.style.overflowY = 'visible'
  } else {
    // here we can take a value and update a custom loader
    percentageElm.textContent = `${percentLoaded}%`
  }
}

/**
 * this will workout and return the percentage of current two passed values
 * @param {int} currentValue the current value we are 
 * @param {int} outOf the sum value we set as the 100% mark
 */
function calculatePercentage({ currentValue, outOf }) {
  return ((currentValue/outOf) * 100).toFixed(0);
}
