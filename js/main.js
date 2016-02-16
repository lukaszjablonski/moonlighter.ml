/**
 *  projects.monlighter.ml
 *  by Lukasz Jablonski [e-eightyseven.com]
 * 
 *  Resources:
 *  1. https://css-tricks.com/reading-position-indicator/
 *  2 .https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
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
 
 });
// SPB END

function animateHeight(element,speed = 300) {
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
  var $allVideos = $("iframe[src^='//www.youtube.com']");
  alert($allVideos);

 $allVideos.each(function() {
 // aspect ratio for each video
  var newWidth = 100;
  alert('OK');
  $(this)
   .data('aspectRatio', this.height / this.width)
   // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width')
    .width(newWidth+'%')
    .height(newWidth * $(this)('aspectRatio')+'%');
    alert(this.height);
 });


});

/*
$(window).resize(function() {
// when the window is resized
  var newWidth = 100;

  allVideos.each(function() {
  // resize all videos according to their own aspect ratio
   var $el = $(this);
   $el
    .width(newWidth+'%')
    .height(newWidth * $el.data('aspectRatio')+'%');
  });

// Kick off one resize to fix all videos on page load
}).resize();*/
// VSU END

