/**
 * projects.monlighter.ml
 * by Lukasz Jablonski [e-eightyseven.com]
 * 
 * Resources:
 * 1. https://css-tricks.com/reading-position-indicator/
 * 2. https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
 */
 
// SPB: Scrolling prgoress bar aka Reading Position Indicator based on [1]
 var progressBar; // global variable for progress bar element
 
 $(document).on('ready', function() {
  
  var winHeight = $(window).height(), 
  docHeight = $(document).height(),
  max, value;
 
  progressBar = $('progress'); // update global variable for progress bar element

  // Set the max scrollable area
   max = docHeight - winHeight;
   progressBar.attr('max', max);
 
  $(document).on('scroll', function(){
   value = $(window).scrollTop();
   progressBar.attr('value', value);
  });
  
  $(window).on('resize', function() {
   resizeProgressBar();
  });
  
  function resizeProgressBar() {
   winHeight = $(window).height(),
   docHeight = $(document).height();
   max = docHeight - winHeight;
   progressBar.attr('max', max);
   value =  $(window).scrollTop();
   progressBar.attr('value', value);
  }
  
  progressBar.bind('resize', function() {
   resizeProgressBar();
  });
  
  resizeProgressBar(); // run once (important on page refresh)
 
 });
// SPB END

$(window).bind("load", function() {
// run after entire page has loaded
  if ($('#cookieChoiceInfo').length>0) $('html').css('margin-top',$('html').css('margin-top')+$('#cookieChoiceInfo').outerHeight();
});

function animateHeight(element,speed) {
 speed = (typeof speed === 'undefined') ? 300 : speed; // speed is optional, 300 is default
 
 var el = $(element),
 curHeight = el.height(),
 autoHeight = el.css('height', 'auto').height();
 el.height(curHeight).animate({height: autoHeight}, speed);
 
 // change progressBar only after animation (needs global progresBar variable)
  //setTimeout(function(){progressBar.trigger('resize')}, speed+5);
 
 // change progressBar during animation (needs global progresBar variable)
  var ani=setInterval(function(){progressBar.trigger('resize')}, 1);
  setTimeout(function(){clearInterval(ani)}, speed+5);
}

// VSU: Video size updater based on [2]
 $(document).ready(function() {
 // Find all iframe videos (vimeo and youtube)
  var $allVideos = $("iframe[src*='youtube'],iframe[src*='vimeo']");
  $allVideos.each(function() {
  // change size of each video
   var newWidth = $(this).parent().width();
   var aspectRatio = this.height / this.width;
   $(this)
    // remove original width and height attributes
     //.removeAttr('height')
     //.removeAttr('width')
    // change original width and height attributes
     .attr('width',newWidth)
     .attr('height',newWidth * aspectRatio)
    // add new width and height as a style
     .width(newWidth)
     .height(newWidth * aspectRatio);
  });
 });
// VSU END

function resizeIframe(element) {
 $(element).height( $(element).contents('body').outerHeight() );
}

//$(document).ready(function(){resizeIframe('#comment-editor');});
