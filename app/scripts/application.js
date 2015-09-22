
$(document).ready(function() {
  // Lettering.js keeps it all tight
  $("h1").lettering();
  console.log("lettering.js");
  // Add "lazyload" class to all images so LazySizes fires
  $('img').addClass('lazyload');
  console.log("lazyload");
});

// Lazyload
window.lazySizesConfig = {
  addClasses: true
};

//Equalize Script
$("#home-work-list .panel--home").equalHeights();

//Animsition
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-up-sm',
    outClass: 'fade-out-up-sm',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    unSupportCss: [
      'animation-duration',
      '-webkit-animation-duration',
      '-o-animation-duration'
    ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body'
  });
});






