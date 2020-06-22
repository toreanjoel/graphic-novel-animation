/**
 * All of the functions used on the footer section of the application
 */

/**
 * Here we have he functions that run when we init the application sections
 * @param {object} data footer data init for the application 
 */
function initFooter({ data }) {
  // header element
  const footerElm = elFactory(
    'footer',
    {},
    'End'
  );
  // append to the header
  document.body.appendChild(footerElm);
}