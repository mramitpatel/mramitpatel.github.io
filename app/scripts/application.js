
// Lazyload
window.lazySizesConfig = {
  addClasses: true
};

//Equalize Script
$("#home-work-list .panel--home").equalHeights();

//Animsition
$(document).ready(function() {


//show more hide


  // Lettering.js keeps it all tight
  $("#work--list h1").lettering();
  console.log("lettering.js");
  // Add "lazyload" class to all images so LazySizes fires
  $('img').addClass('lazyload');
  console.log("lazyload");


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


$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}



$(document).ready(function(){
    $("#show-block .show-more").each(function(e) {
        if (e != 0)
            $(this).hide();
  });
    
    $(".show-more-btn").click(function(){
        if ($("#show-block .show-more:visible").next().length != 0){
             $("#show-block .show-more:visible").next().fadeIn();
             $('body').scrollTo(".show-more:visible").next;
             console.log(e);

              //$("#show-block .show-more:visible").next().addClass(".fade-in-up");
              return false;
            }
    });
});

