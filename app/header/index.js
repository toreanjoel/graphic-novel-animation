/**
 * All of the functions used on the header section of the application
 */

/**
 * Here we have he functions that run when we init the application sections
 * @param {object} data header data init for the application 
 */
function initHeader({ data }) {
  // header element
  const headerElm = elFactory(
    'header',
    { 'style': data.styles }
  );
  // append to the header
  document.body.appendChild(headerElm);

  // here we add the children to the header Elm
  initNovelDetails(data);

}

/**
 * create the novel details for the dom to render for initial header scene
 * @param {object} details details of the book
 */
function initNovelDetails(details) {
  const { title, subText, author, description } = details;
  const headerElm = document.querySelector('header');

  // novel info
  const novelDetails = elFactory(
    'div',
    { 'class' : 'novel_details'},
    elFactory(
      'div',
      { 'class': 'novel_info'},
      elFactory(
        'div',
        { 'class': 'novel_info-title' },
        title
      ),
      elFactory(
        'div',
        { 'class': 'novel_info-sub-text' },
        subText
      ),
      elFactory('hr', {}),
      elFactory(
        'div',
        { 'class': 'novel_info-author' },
        author
      ),
      elFactory(
        'div',
        { 'class': 'novel_info-description' },
        description
      )
    )
  );
  // here we first append the novel details section 
  headerElm.appendChild(novelDetails);
}