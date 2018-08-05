
/*
Just some boiler plate code I wrote up in codepen.io  and pasted together
to get me started.
*/
<div class="wrapper">
  <div class="box title-header">Title Header</div>
  <!--<div class="box video-header">Title Video</div>-->

  <div class="box top-right-indent">Top Right-indent</div>
  <div class="box bottom-right-indent">Bott Right-indent</div>

  <div class="box small-video">Small-Video</div>

  <div class="box title-image">Title Image
    <br /> The four arrows are inline images inside the content area.
  </div>

  <div class="box content-one"><em>Content-One--</em>Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
</div>

  <div class="box content-two"><em>Content-Two--</em>ab
  </div>
    <div class="box content-three"><em>Content-Three--</em>ab
</div>

  <div class="box content-four"><em>Content-Four</em>--Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.
</div>
  <div class="box sub-heading">Sub-Heading</div>
  <div class="box footer">footer

  </div>
</div>





body {
  margin: 40px;
}



.top-right-indent {
  grid-area: top-right-indent;
}

.title-image {
  grid-area: title-image;
  position: relative;
}

.content-one {
  grid-area: content-one;
  position: relative;
}

.content-two {
  grid-area: content-two;
  position: relative;
}

.content-three {
  grid-area: content-three;
  position: relative;
}

.content-four {
  grid-area: content-four;
  position: relative;
}



.title-header {
  grid-area: title-header;
}

.small-video {
  grid-area: small-video;
  z-index: 10;

}

.bottom-right-indent {
  grid-area: bottom-right-indent;
}

.sub-heading {
  grid-area: sub-heading;
}

.footer {
  grid-area: footer;
}

.wrapper {
		display: grid;
    grid-gap: 10px;
		grid-template-columns: 150px 150px 150px 150px;
		grid-template-areas:
    "title-header title-header title-header title-header"
    "title-image title-image title-image title-image"
    "content-one content-one content-one top-right-indent"
		"content-two content-two small-video small-video"
    "content-three content-three small-video small-video"
    "content-four content-four content-four bottom-right-indent"
    "sub-heading sub-heading sub-heading bottom-right-indent "
		"footer  footer  footer footer";
		background-color: #fff;
		color: #444;
	}


.box {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 50px;
  font-size: 100%;
}




.footer {
  background-color: #999; /*light-gray*/
}

.top-right-indent {
  background-color: white;
  color: #999;
}

.bottom-right-indent {
  background-color: white;
  color: #999;
}

.small-video {
  background-color: orange;
  opacity: 0.7;
}