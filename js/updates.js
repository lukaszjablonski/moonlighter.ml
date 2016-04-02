<script>
/*
 Recent Posts by Label
 code by BloggerSentral.com
 modified by e-eightyseven.com
 
 [http://www.bloggersentral.com/2010/04/list-recent-posts-by-label.html?m=1]
 [http://www.danpros.com/2013/08/blogger-json-feed-api]
 
*/
var readBtn="READ THIS";
var showBtn="MORE POSTS";
var hideBtn="LESS POSTS";

function showHide(shID,btnid) {
 if (document.getElementById(shID)) {
  if (document.getElementById(shID).style.display == 'block') {
   document.getElementById(shID).style.visibility = 'hidden';
   document.getElementById(shID).style.display = 'none';
   document.getElementById(btnid).innerHTML=showBtn;
  }
  else {
   document.getElementById(shID).style.visibility = 'visible';
   document.getElementById(shID).style.display = 'block';
   document.getElementById(btnid).innerHTML=hideBtn;
  }
 }
 animateHeight('#updatesConatiner');
}

function latestupdate(json) {
 for (j = 0; j < json.feed.entry[0].link.length; j++) {
  if (json.feed.entry[0].link[j].rel == 'alternate') break;
 }
 var entryUrl = json.feed.entry[0].link[j].href;
 var entryTitle = json.feed.entry[0].title.$t;
 var entryDate = new Date(json.feed.entry[0].published.$t);
 entryDate = entryDate.toLocaleString();

 document.write(entryDate + '<h3 style="font-size:2em">' + entryTitle + '</h3><a id="readButton" class="btn" href="' + entryUrl + '">'+readBtn+'</a>');
 document.write('<div id="updatesConatiner" style="height:0"><div style="display:none" id="updatesContent">');

 document.write('<table id="updatesTable">');
 document.write('<tr><th>date</th><th>title</th><th>labels</th></tr>');
  for (var i = 0; i < json.feed.entry.length; i++) {
   for (var j = 0; j < json.feed.entry[i].link.length; j++) {
    if (json.feed.entry[i].link[j].rel == 'alternate') break;
   }
   var entryUrl = json.feed.entry[i].link[j].href;
   var entryTitle = json.feed.entry[i].title.$t;
   var entryDate = new Date(json.feed.entry[i].published.$t);
   entryDate = entryDate.toLocaleString();

   var entryLabels = json.feed.entry[i].category;
   if(typeof entryLabels === 'undefined' || entryLabels === null) {
    entryLabels = '';
   }
   else {
    entryLabels = [];
    for(var k = 0; k < json.feed.entry[i].category.length; k ++ ) {
     entryLabels.push(json.feed.entry[i].category[k].term); // append the label to array
    }
    entryLabels = entryLabels.join(', '); // labels array to string
   }

   var item = '<tr><td>'+entryDate+'</td><td><a href="'+ entryUrl + '">' + entryTitle + '</a></td><td>' + entryLabels + '</td></tr>';
   document.write(item);
  }
 document.write('</table>');

 document.write('</div></div>');
 document.write('<a id="updatesButton" class="btn" href="javascript:void(0);" onclick="showHide(\'updatesContent\',this.id);">'+showBtn+'</a>');
}
</script>
<style>
.btn,
.btn:link,
.btn:visited {
 margin-top:20px;
 width:auto;
 overflow:hidden;
 padding:1em 4.15em;
 border:1px solid #fff;
 display: inline-block;
 color:#fff;
 text-decoration:none;
}
.btn:hover {
 color:#000;
 background:#fff;
}
#updatesButton {font-size:0.7em;}
#updatesContent {
 text-align:justify;
}
#updatesTable {
 width:100%;
}
#updatesTable th:first-child,
#updatesTable td:first-child {
 width:150px;
}
#updatesTable th:last-child,
#updatesTable td:last-child {
 width:100px;
 text-align:right;
}
</style>
<script src="/feeds/posts/summary/?alt=json-in-script&callback=latestupdate"></script>