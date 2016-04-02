<script>
/*
 Recent Posts by Label
 code by BloggerSentral.com
 modified by e-eightyseven.com
 
 [http://www.bloggersentral.com/2010/04/list-recent-posts-by-label.html?m=1]

 [http://www.danpros.com/2013/08/blogger-json-feed-api]
 
*/

function projects(json) {
 document.write('<ul id="projectsList">');
  for (var i = 0; i < json.feed.entry.length; i++) {
   for (var j = 0; j < json.feed.entry[i].link.length; j++) {
    if (json.feed.entry[i].link[j].rel == 'alternate') break;
   }
   var entryUrl = json.feed.entry[i].link[j].href;
   var entryTitle = json.feed.entry[i].title.$t;
   var entryDate = new Date(json.feed.entry[i].published.$t);
   var entryImgUrl = (typeof(json.feed.entry.media$thumbnail) != 'undefined') ? json.entry.media$thumbnail.url : '';
   var entryImgStyle = (entryImgUrl=='') ? '' : 'background-image: url(' + entryImg + ');' ;
   entryDate = entryDate.toLocaleString();
   var item = '<li><a href="'+ entryUrl + '"><div class="projectThumb" style="' + entryImgStyle + '">' + entryTitle + '</div></a></li>';
   document.write(item);
  }
 document.write('</ul>');

}
</script>
<style>
#projectsList {
 list-style-type:none;
 margin:0;
 padding:0;
 display:block;
 width:100%;
}
#projectsList li {
 display: inline-block;
 margin:0;
 padding:0;
 margin-left: 20px;
 margin-top: 20px;
width:15%;
/*height:15%;*/
position:relative;
}
#projectsList li:before{
/* http://www.mademyday.de/css-height-equals-width-with-pure-css.html */
 content: "";
 display: block;
 padding-top: 100%; 	/* initial ratio of 1:1*/
}
#projectsList li:nth-child(6n+1) {
 margin-left: 0;
}
#projectsList li:nth-child(-n+6) {
 margin-top: 0;
}
#projectsList li a {
 display: inline-block;
 width:100%;
 height:100%;
 position:absolute;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
}
.projectThumb {
 width:100%;
 height:100%;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 background-color: #ccc;
}
</style>
<script src="/feeds/posts/summary/-/project?alt=json-in-script&callback=projects"></script>