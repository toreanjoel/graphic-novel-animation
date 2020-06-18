//import libraries
includeJs('./libraries/gsap/minified/gsap.min.js');
includeJs('./libraries/gsap/minified/ScrollTrigger.min.js');

// include dummy data
includeJs('./data_structure.js');

// import the scene scripts from the scene folder
includeJs('./scripts/header.js');
includeJs('./scripts/scene.js');
includeJs('./scripts/animations.js');

// start the application
includeJs('./app.js');