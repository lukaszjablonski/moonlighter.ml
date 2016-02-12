/**
 * monlighter.ml js
 */

$(document).on('ready', function() {
 
 /* Scroll prgoress bar [https://css-tricks.com/reading-position-indicator/] */
 var winHeight = $(window).height(), 
 docHeight = $(document).height(),
 progressBar = $('progress'),
 max, value;

 /* Set the max scrollable area */
 max = docHeight - winHeight;
 progressBar.attr('max', max);

 $(document).on('scroll', function(){
  value = $(window).scrollTop();
  progressBar.attr('value', value);
 });
 
 $(window).on('resize', function() {
  resize();
 });
 
 progressBar.bind('resize', function() {
  resize();
 });
 
 function resize() {
  winHeight = $(window).height(),
  docHeight = $(document).height();
  max = docHeight - winHeight;
  progressBar.attr('max', max);
  value =  $(window).scrollTop();
  progressBar.attr('value', value);
 }
 
});

function animateHeight(element,speed = 300) {
 var el = $(element),
 curHeight = el.height(),
 autoHeight = el.css('height', 'auto').height();
 el.height(curHeight).animate({height: autoHeight}, speed);
 
 // change progressBar only after animation
  //setTimeout(function(){$('progress').trigger('resize')}, speed);
 // change progressBar during animation
  var ani=setInterval(function(){ $('progress').trigger('resize')}, 1);
  setTimeout(function(){clearInterval(ani)}, speed);
}
