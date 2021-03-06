/**
 * blog.monlighter.ml
 * by Lukasz Jablonski [e-eightyseven.com]
 * 
 * Resources:
 * [1] https://css-tricks.com/reading-position-indicator/
 * [2] https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
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
 [].forEach.call(test, function(element,index,array) {
  element.removeAttribute('target');
 });
};
 
// SPB: Scrolling progress bar aka Reading Position Indicator based on [1]
 var progressBar; // global variable for progress bar element
 
 $(document).on('ready', function() {
  
  var winHeight = $(window).height(), 
  docHeight = $(document).height(),
  max, value;
 
  progressBar = $('progress'); // update global variable for progress bar element

  // set the max scrollable area
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

$(window).bind('load', function() {
// run after entire page has loaded
 if($('#cookieChoiceInfo').length>0){
  var newMargin = $('#cookieChoiceInfo').outerHeight();
  var alertAnimationSpeed = 100;
  $('html').animate({'margin-top': '+='+newMargin}, alertAnimationSpeed);
  progressBar.animate({'top': '+='+newMargin}, alertAnimationSpeed)
  //document.getElementById('cookieChoiceDismiss').onclick = null; // remove original event
  $('#cookieChoiceDismiss').click(function() {
   $('html').animate({'margin-top': '-='+newMargin}, alertAnimationSpeed);
   progressBar.animate({'top': '-='+newMargin}, alertAnimationSpeed)
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

function interactive(el,v) {
 var element = document.getElementById(el);
 var displaystate = element.style.display;
 
 // wrap with div element
 if(element.parentNode.id.indexOf('wrap_'+el) == -1) $( '#'+el ).wrap( "<div id='wrap_"+el+"'></div>" );
 
 if(displaystate!="none"){element.style.display="none";}
 else{element.style.display="block";}
 
 animateHeight('#wrap_'+el);
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

$(document).on('ready', function() {
 var listUL = document.getElementById('PageList1').getElementsByTagName('UL')[0];
 var listLI = document.createElement('LI');
 listLI.setAttribute('id', 'searchBtn');
 listUL.appendChild(listLI);
 //f002
});

function hideIndex() {
 document.getElementById('header-index').style.display = 'none';
}
$(document).on('ready', function() {
// add in the head of the blogger template:
// <script>var url = "<data:blog.homepageUrl/>"</script>
 var elements = document.getElementsByTagName('a');
 for(var i = 0, len = elements.length; i < len; i++) {
  if(elements[i].href.indexOf(url) !== -1) {
   elements[i].onclick = function () {
    hideIndex();
   }
  }
 }
});

/*
var scrollPos = 0;
var maxScroll = 1000;
var targetOpacity = 1;
$(window).scroll(function() {
  scrollPos = $(document).scrollTop();
  scrollPos < maxScroll ? targetOpacity = scrollPos/maxScroll : targetOpacity;
  $('span').css({
    'background-color': 'rgba(0, 0, 0, '+ targetOpacity +')'
  });
});
*/
