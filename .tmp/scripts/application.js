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


// WebFontConfig = { fontdeck: { id: '49715' } };

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

/* jshint ignore:end */



/* hovas */
$('li h2').on( 'mouseover', function(e) {
    e.preventDefault();
    var id = $(this).attr('data-id');
        console.log(id); 
    $('.image-wrapper').each(function(){
              $(this).fadeOut();
        if($(this).attr('image-id') == id) {
            $(this).css('visibility','visible').fadeIn();
        } 
    });
});


