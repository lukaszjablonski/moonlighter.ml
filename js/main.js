/**
 * monlighter.ml js
 */

/* Scroll prgoress bar [https://css-tricks.com/reading-position-indicator/] */
$(document).on('ready', function() {  
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
  winHeight = $(window).height(),
  docHeight = $(document).height();
  max = docHeight - winHeight;
  progressBar.attr('max', max);
  value =  $(window).scrollTop();
  progressBar.attr('value', value);
 });
 
 $('progress').bind("resize", function() {
   alert("Box was resized from 100x100 to 200x200");
  });
 $('progress').trigger("resize");
 
});
