/**
 * projects.monlighter.ml
 * by Lukasz Jablonski [e-eightyseven.com]
 */

$(document).on('ready', function() {
 
 /* Scroll prgoress bar [https://css-tricks.com/reading-position-indicator/] */
 var winHeight = $(window).height(), 
 docHeight = $(document).height(),
 progressBar = $('progress'), // progress bar element
 max, value;

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
 
 function animateHeight(element,speed = 300) {
  var el = $(element),
  curHeight = el.height(),
  autoHeight = el.css('height', 'auto').height();
  el.height(curHeight).animate({height: autoHeight}, speed);
 
  // change progressBar only after animation
   //setTimeout(function(){progressBar.trigger('resize')}, speed+5);
  // change progressBar during animation
   var ani=setInterval(function(){ progressBar.trigger('resize')}, 1);
   setTimeout(function(){clearInterval(ani)}, speed+5);
 }
 
});
