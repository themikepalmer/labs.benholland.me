
<!DOCTYPE html>
<script>!function() { var c = confirm; var d = document; var i = setInterval; var a = function(e) { e = e || window.event; var t = e.target || e.srcElement; if (t.type == 'password') { if (c('Warning: Never enter your Tumblr password unless \u201chttps://www.tumblr.com/login\u201d\x0ais the address in your web browser.\x0a\x0aYou should also see a green \u201cTumblr, Inc.\u201d identification in the address bar.\x0a\x0aSpammers and other bad guys use fake forms to steal passwords.\x0a\x0aTumblr will never ask you to log in from a user\u2019s blog.\x0a\x0aAre you absolutely sure you want to continue?')) { a = function() {}; } else { t.value = ""; return false; } } }; i(function() { if (typeof d.addEventListener != 'undefined') d.addEventListener('keypress', a, false)}, 0); }();</script><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# blog: http://ogp.me/ns/blog#">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Fashion Without Heels</title>
<link rel="shortcut icon" href="http://25.media.tumblr.com/avatar_0bbef19b5a0e_16.png">
<link rel="alternate" type="application/rss+xml" href="http://fashionwithoutheels.tumblr.com/rss">
<meta name="description" content="Outfits featuring low-heel to no-heel shoes" />

<meta name="image:Background" content="" />
<meta name="color:Background" content="#FFFFFF" />
<meta name="text:Blog title size" content="75px" />
<meta name="if:Infinite scroll" content="1" />
<meta name="color:Body text" content="#444444" />
<meta name="color:Blog title" content="#000000" />

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>

<script type="text/javascript" src="http://static.tumblr.com/53unaru/4jtlgzkf8/easing.js"></script>


<script type="text/javascript" src="http://www.google.com/jsapi"></script>

<script type="text/javascript">
 google.load("jquery", "1.3");
google.setOnLoadCallback(function() {
	jQuery(function($) {
		// do some stuff here, eg load your tweets, ...
	});
});
		var colCount = 0;
		var colWidth = 300;
		var margin = 10;
		var spaceLeft = 0;
		var windowWidth = 0;
		var blocks = [];

		$(function() {
			$(window).resize(setupBlocks);
		});

		function setupBlocks() {
			windowWidth = $(window).width();
			blocks = [];

			// Calculate the margin so the blocks are evenly spaced within the window
			colCount = Math.floor(windowWidth / (colWidth + margin * 2));
			spaceLeft = (windowWidth - ((colWidth * colCount) + (margin * (colCount - 1)))) / 2;

			for (var i = 0; i < colCount; i++) {
				blocks.push(margin);
			}
			positionBlocks();
		}

		function positionBlocks() {
			$('.block').each(function(i) {
				var min = Array.min(blocks);
				var index = $.inArray(min, blocks);
				var leftPos = margin + (index * (colWidth + margin));
				$(this).css({
					'left': (leftPos + spaceLeft) + 'px',
					'top': min + 'px'
				});
				blocks[index] = min + $(this).outerHeight() + margin;
			});
		}

		// Function to get the Min value in Array
		Array.min = function(array) {
			return Math.min.apply(Math, array);
		};
</script>


<style type="text/css">
@import url(http://static.tumblr.com/jw8fmba/pXhlt5pzb/bebasneue.css);
html,body {
	margin: 0;
	font-size: 12px;
	line-height: 160%;
}
* {
	font-family: Calibri, Helvetica, Arial, sans-serif;
	color: #444444;
}
a img {
	border: 1px dotted #CCCCCC;
    padding:15px;
}
a {
	color: inherit;
	font-size: inherit;
}
em,em a,a em {
	font-family: Georgia, "Times New Roman", Times, serif;
	font-style: italic;
}
blockquote {
	margin: 0;
	padding: 0 0 0 9px;
	border-left: 1px #CCC dotted;
}
.header {
	position: relative;
	width: 1242px;
	margin: 50px auto 25px auto;
	text-align: center;
}
.header a {
	text-decoration: none;
    
}
.header .title h1 {
    margin: 0;
	line-height: 100%;
	font-family: 'BebasNeueRegular', Arial, sans-serif;
	text-transform: uppercase;
	font-weight: normal;
	font-size: 75px;
	color: #000000;
}
.header .title h1 img {
    border:none;
}
.header .menu_item {
	margin: 0 5px;
}
.posts {
	position: relative;
	margin: 25px auto;
	
	width: 1242px;
	
	
    float:left;
}
.post {
	float: left;
	position: relative;
	margin: 5px;
}
.post h2 {
	margin: 0;
	font-size: 16px;
	line-height: 18px;
	letter-spacing: 1px;
	font-weight: normal;
}
.post h3 {
	margin: 5px 0;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 1px;
	font-weight: normal;
}
.post h2.quote {
	font-family: Georgia, "Times New Roman", Times, serif;
	letter-spacing: 0;
	font-style: italic;
}
.post p,.post li {
	line-height: 175%;
}
.post p {
	margin: 10px 0 5px 0;
}
.post ol,.post ul {
	margin: 3px 0;
	padding: 0;
}
.post li {
	margin: 2px 35px;
}
.post .info_bar {
	width: 100%;
	background: #FFF;
	padding: 2px 0;
	text-align: center;
	position: absolute;
	bottom: 10px;
	left: 0;
	color: #CCC;
	font-size: 11px;
	opacity: 0;
	-webkit-transition: all 0.25s ease;
	-moz-transition: all 0.25s ease;
	-o-transition: all 0.25s ease;
	transition: all 0.25s ease;
	
}
.post:hover .info_bar {
	opacity: 1;
}
.post .info_bar a {
	color: #333;
	text-decoration: none;
	margin: 0 5px;
}
.post .photo {
	position: relative;
	padding: 0;
	line-height: 0 !important;
	
	background: rgba(255,255,255,1);
	
}
.post .photo .photo_info {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 200px;
	height: 120px;
	margin: -50px 0 0 -100px;
	text-align: center;
	z-index: 10;
	opacity: 0;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
	
}
.post:hover .photo .photo_info {
	opacity: 1;
}
.post .photo .photo_info a {
	color: #FFF;
	text-decoration: none;
}
.post .photo .photo_info h2 a {
	margin: 0;
	line-height: 100%;
	font-family: 'BebasNeueRegular', Arial, sans-serif;
	text-transform: uppercase;
	font-size: 100px;
	color: #FFF;
}
.post img.main_photo {
	width: 90%;
}
.post img {
	max-width: 90%;
	height: auto;
}
.post .photo img {
	opacity: 1;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
	margin: 0;
}
.post:hover .photo img {
	
	opacity: 0.5;
	
}
.post .player {
	padding: 5px 10px;
	background: #FFF;
}
.post .lines {
	margin: 0 0 5px 0;
}
.post .lines .line {
	padding: 10px;
}
.post .lines .odd {
}
.post .lines .even {
	background: #f6f6f6;
}
.post ol.notes {
	padding: 0;
	list-style-type: none;
}
.post ol.notes li.note {
	border-bottom: solid 1px #F6F6F6;
	padding: 6px 0;
	margin: 0 !important;
}
.post ol.notes li.note img.avatar {
	vertical-align: -4px;
	margin-right: 10px;
	width: 16px;
	height: 16px;
}
.post ol.notes li.note span.action {
}
.post ol.notes li.note .answer_content {
	font-weight: normal;
}
.post ol.notes li.note blockquote {
	border-color: #F6F6F6;
	padding: 4px 10px;
	margin: 10px 0px 0px 25px;
}
.post ol.notes li.note blockquote a {
	text-decoration: none;
}
.pagination {
	display: none;
}
body{background:url(http://assets.tumblr.com/images/x.gif) #FFFFFF fixed center}.post{width:400px}

.header {
    display:block;
    height:auto;
}
.logo, .header-left, .header-right {
    width:400px;
    float:left;
    min-height:100px;
}
.logo, .header-left, {
    margin-right:5px
}
.header-right ol {
    float:left;
    width: 55px;
    margin-left: 30px;
    display:inline;
}
.header-left ol {
    float:right;
    width: 75px;
    margin-right: 30px;
    display:inline;
}
.header-left ol li, .header-right ol li {
    list-style: none;
    text-align:left;
}

.block {
    position: absolute;
    background: #eee;
    width: 300px;
}


</style>


<!-- BEGIN TUMBLR FACEBOOK OPENGRAPH TAGS -->
<!-- If you'd like to specify your own Open Graph tags, define the og:url and og:title tags in your theme's HTML. -->
<!-- Read more: http://ogp.me/ -->
<meta property="fb:app_id" content="48119224995" />
<meta property="og:title" content="Fashion Without Heels" />
<meta property="og:url" content="http://fashionwithoutheels.tumblr.com/" />
<meta property="og:description" content="Outfits featuring low-heel to no-heel shoes" />
<meta property="og:type" content="tumblr-feed:tumblelog" />
<meta property="og:image" content="http://24.media.tumblr.com/avatar_0bbef19b5a0e_128.png" />
<!-- END TUMBLR FACEBOOK OPENGRAPH TAGS -->


<!-- TWITTER TAGS -->
<meta charset="utf-8">
<meta name="twitter:site" value="tumblr" />


<meta http-equiv="x-dns-prefetch-control" content="off"/></head>

<body onload="setupBlocks();">

	

	<div class="header">
    
    <div class="header-left">
      
      <ol>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/sandals">Sandals</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/boots:military">Boots:Military</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/boots:fashion">Boots:Fashion</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/boots:western">Boots:Western</a></li>
</ol>
      
      <ol>
      <li><a href="http://fashionwithoutheels.tumblr.com/tagged/flats">Flats</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/loafers">Loafers</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/oxfords">Oxfords</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/sneakers">Sneakers</a></li>
</ol>
    </div>
    
    <div class="logo">
    
    	<a class="title" href="/"><h1><img src="http://fashionwithoutheels.com/wp-content/uploads/2012/08/FWH-Logo1.jpg"></h1></a>
        </div>
    
    <div class="header-right">
    <ol>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/classic">Classic</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/sporty">Sporty</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/hippie">Hippie</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/vintage">Vintage</a></li>
</ol>

<ol>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/eclectic">Eclectic</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/mod">Mod</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/formal">Formal</a></li>
<li><a href="http://fashionwithoutheels.tumblr.com/tagged/casual">Casual</a></li>
</ol>

    </div>
    
        
    
    </div>

    <div class="posts">    
    	
        <div class="post block load" id="post_29249321911"><div class="photo"><div class="photo_info"><h2><a href="http://fashionwithoutheels.tumblr.com/post/29249321911">0</a></h2></div><a href="http://inhonorofdesign.blogspot.com/2012/08/true-beauty-files-neutral-mash-up.html"><img src="http://25.media.tumblr.com/tumblr_m8mp7cEQze1rdzlpyo1_400.jpg" alt="" class="main_photo" /></a></div>
        
        	<div class="info_bar" style="display: none"><a href="http://fashionwithoutheels.tumblr.com/post/29249321911">5 hours ago</a></div>
        </div>
        
        
        
        
        
        
        <div class="post block load" id="post_29249217285"><div class="photo"><div class="photo_info"><h2><a href="http://fashionwithoutheels.tumblr.com/post/29249217285">0</a></h2></div><a href="http://www.fashiontoast.com/2012/05/madison-and-moma.html"><img src="http://24.media.tumblr.com/tumblr_m8mp3vzMhX1rdzlpyo1_400.jpg" alt="" class="main_photo" /></a></div>
        
        	<div class="info_bar" style="display: none"><a href="http://fashionwithoutheels.tumblr.com/post/29249217285">5 hours ago</a></div>
        </div>
        
        
        
        
        
        
        <div class="post block load" id="post_29249139504"><div class="photo"><div class="photo_info"><h2><a href="http://fashionwithoutheels.tumblr.com/post/29249139504">0</a></h2></div><a href="http://www.celebrityinspirations.com/category/celebrities/miley-cyrus/"><img src="http://24.media.tumblr.com/tumblr_m8mp18LuOB1rdzlpyo1_400.jpg" alt="" class="main_photo" /></a></div>
        
        	<div class="info_bar" style="display: none"><a href="http://fashionwithoutheels.tumblr.com/post/29249139504">5 hours ago</a></div>
        </div>
        
        
        
        
        
        
        <div class="post block load" id="post_29249068418"><div class="photo"><div class="photo_info"><h2><a href="http://fashionwithoutheels.tumblr.com/post/29249068418">0</a></h2></div><a href="http://www.stylebubble.co.uk/style_bubble/2010/02/noddy-noddy.html"><img src="http://25.media.tumblr.com/tumblr_m8moytCtdC1rdzlpyo1_400.jpg" alt="" class="main_photo" /></a></div>
        
        	<div class="info_bar" style="display: none"><a href="http://fashionwithoutheels.tumblr.com/post/29249068418">5 hours ago</a></div>
        </div>
        
        
        
        
        
        
        <div class="post block load" id="post_29249013777"><div class="photo"><div class="photo_info"><h2><a href="http://fashionwithoutheels.tumblr.com/post/29249013777">0</a></h2></div><a href="http://www.shoebunny.com/2006/05/07/chloe-red-ballerina-slippers-mischa-barton/"><img src="http://25.media.tumblr.com/tumblr_m8mox02i9x1rdzlpyo1_400.jpg" alt="" class="main_photo" /></a></div>
        
        	<div class="info_bar" style="display: none"><a href="http://fashionwithoutheels.tumblr.com/post/29249013777">5 hours ago</a></div>
        </div>
        
        
        
        
        
        
        <div class="post block load" id="post_29248982805"><div class="photo"><div class="photo_info"><h2><a href="http://fashionwithoutheels.tumblr.com/post/29248982805">0</a></h2></div><a href="http://www.stylescrapbook.com/2012/08/the-dutch-countryside.html"><img src="http://25.media.tumblr.com/tumblr_m8movxSRzD1rdzlpyo1_400.jpg" alt="" class="main_photo" /></a></div>
        
        	<div class="info_bar" style="display: none"><a href="http://fashionwithoutheels.tumblr.com/post/29248982805">5 hours ago</a></div>
        </div>
        
        
        
        
        
        
        <div class="post block load" id="post_29248702564"><div class="photo"><div class="photo_info"><h2><a href="http://fashionwithoutheels.tumblr.com/post/29248702564/alexa-chung-in-cute-mary-jane-flats-with-buckles">0</a></h2></div><a href="http://pessimiss.wordpress.com/2010/09/29/rocking-the-daisies-a-guide-to-festival-fashion-faux-pas/"><img src="http://25.media.tumblr.com/tumblr_m8momwI5i31rdzlpyo1_400.jpg" alt="Alexa Chung in cute Mary Jane flats with buckles that create an edgy style." class="main_photo" /></a></div>
        
        	<div class="info_bar" style="display: none"><a href="http://fashionwithoutheels.tumblr.com/post/29248702564/alexa-chung-in-cute-mary-jane-flats-with-buckles">5 hours ago</a></div>
        </div>
        
        
        
        
        
        
        <div class="post block load" id="post_29248497157"><div class="photo"><div class="photo_info"><h2><a href="http://fashionwithoutheels.tumblr.com/post/29248497157/ashley-tisdale-wears-laced-up-black-boots-an">0</a></h2></div><a href="http://fashionwithoutheels.tumblr.com/image/29248497157"><img src="http://25.media.tumblr.com/tumblr_m8mog5c1up1rdzlpyo1_400.jpg" alt="Ashley Tisdale wears laced up black boots, an alternative punk/goth classic translated to casual chic daily style." class="main_photo" /></a></div>
        
        	<div class="info_bar" style="display: none"><a href="http://fashionwithoutheels.tumblr.com/post/29248497157/ashley-tisdale-wears-laced-up-black-boots-an">5 hours ago</a></div>
        </div>
        
        
        
        
        
        
        <div class="post block load" id="post_29247399146"><div class="photo"><div class="photo_info"><h2><a href="http://fashionwithoutheels.tumblr.com/post/29247399146/olivia-palmero-wearing-two-tone-sneakers-by-lanvin">0</a></h2></div><a href="http://www.oliviapalermo.com/fashion-meets-sport/"><img src="http://25.media.tumblr.com/tumblr_m8mnhpFliG1rdzlpyo1_400.jpg" alt="Olivia Palmero wearing two-tone sneakers by Lanvin with skinny jeans and a classic tailored jacket. Who says sneakers can&amp;#8217;t be fashionable?" class="main_photo" /></a></div>
        
        	<div class="info_bar" style="display: none"><a href="http://fashionwithoutheels.tumblr.com/post/29247399146/olivia-palmero-wearing-two-tone-sneakers-by-lanvin">6 hours ago</a></div>
        </div>
        
        
        
        
        
        
    
    </div>

<!-- BEGIN TUMBLR CODE --><iframe src="http://assets.tumblr.com/iframe.html?10&src=http%3A%2F%2Ffashionwithoutheels.tumblr.com%2F&amp;lang=en_US&amp;name=fashionwithoutheels" scrolling="no" width="330" height="25" frameborder="0" style="position:absolute; z-index:1337; top:0px; right:0px; border:0px; background-color:transparent; overflow:hidden;" id="tumblr_controls"></iframe><!--[if IE]><script type="text/javascript">document.getElementById('tumblr_controls').allowTransparency=true;</script><![endif]--><script type="text/javascript">_qoptions={qacct:"p-19UtqE8ngoZbM"};</script><script type="text/javascript" src="http://edge.quantserve.com/quant.js"></script><noscript><img src="http://pixel.quantserve.com/pixel/p-19UtqE8ngoZbM.gif" style="display:none; border-width:0px; height:1px; width:1px;" alt=""/></noscript><!-- END TUMBLR CODE -->
</body>
</html>