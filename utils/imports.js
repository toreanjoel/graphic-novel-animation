//import stylesheets
cssJsImport({ path:'./app/header/style.css', type: 'css' });
cssJsImport({ path:'./app/scene/style.css', type: 'css' });
cssJsImport({ path:'./app/animations/style.css', type: 'css' });

//import libraries
cssJsImport({ path:'./scripts/libraries/gsap/minified/gsap.min.js', type: 'js' });
cssJsImport({ path:'./scripts/libraries/gsap/minified/ScrollTrigger.min.js', type: 'js' });

// TODO: REMOVE BELOW DUMMY DATA
cssJsImport({ path:'./data_structure.js', type: 'js' });
// header logic
cssJsImport({ path:'./app/header/index.js', type: 'js' });
// scene logic
cssJsImport({ path:'./app/scene/index.js', type: 'js' });
// animations
cssJsImport({ path:'./app/animations/index.js', type: 'js' });
//root init of application
cssJsImport({ path:'./app/index.js', type: 'js' });