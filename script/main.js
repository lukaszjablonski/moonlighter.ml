/**
 * projects.monlighter.ml
 * by Lukasz Jablonski [e-eightyseven.com]
 * 
 * Resources:
 * 1. https://css-tricks.com/reading-position-indicator/
 * 2. https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
 */
 
cookieOptions = {
// custom cookies alert
 'msg': 'Google uses cookies here',
 'link': '/p/cookies.html',
 'close': 'nevermind',
 'learn': 'why?'
};
window.onload = function() {
 var test = document.getElementsByClassName('cookie-choices-button');
 console.log(test);
 [].forEach.call(test, function(element,index,array) {
  element.removeAttribute('target');
 });
};
 
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
  if($('#cookieChoiceInfo').length>0){
   var newMargin = $('#cookieChoiceInfo').outerHeight();
   var alertAnimationSpeed = 100;
   $('html').animate({'margin-top': '+='+newMargin}, alertAnimationSpeed);
   progressBar.animate({'top': '+='+newMargin}, alertAnimationSpeed)
   //document.getElementById('cookieChoiceDismiss').onclick = null; // remove original event
   $('#cookieChoiceDismiss').click(function() {
    $('html').animate({'margin-top': '-='+newMargin}, alertAnimationSpeed);
    $('#cookieChoiceDismiss').animate({'margin-top': '-='+newMargin}, alertAnimationSpeed);
    //setTimeout(function(){_dismissLinkClick()}, alertAnimationSpeed+50); // call original event after animation
    //_dismissLinkClick();
    //window['_dismissLinkClick']();
    //eval("_dismissLinkClick");
    //window.cookieChoices['_dismissLinkClick'];
   });
  }
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
 $(document).on('ready', function() {
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

     var listUL = document.getElementById('PageList1').getElementsByTagName('UL')[0];
     var listLI = document.createElement('LI');
     listLI.setAttribute('id', 'searchBtn');
     listUL.appendChild(listLI);
     
