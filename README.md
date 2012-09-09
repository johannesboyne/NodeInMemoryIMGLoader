NodeInMemoryIMGLoader
=====================

`node.js in-memory image loader`

This is our little and very simple image in memory loader! Use it as you like!

example
=======

loading the Node.js Wallpaper
-----------------------------

Downloading the image `http://nodejs.org/images/logos/nodejs-1024x768.png`.

``` js
var InMemImgLdr = require('./../imgen/InMemoryImageLoader');

InMemImgLdr.load('nodejs.org', '/images/logos/nodejs-1024x768.png', function (buf) {
	console.log('downloaded the node.js logo wallpaper and it has ' + buf.length / 1024 + ' kilobytes')
});
```

By the way: it works great with the canvas module
-------------------------------------------------

LearnBoost / node-canvas https://github.com/LearnBoost/node-canvas

``` js
InMemImgLdr.load('nodejs.org', '/images/logos/nodejs-1024x768.png', function (buf) {
	// ...
	img     = new Image;
	img.src = buf;

	t_canvas = new Canvas(img.width, img.height),
	t_ctx    = t_canvas.getContext('2d');

	t_ctx.drawImage(img, 0, 0);
	// ...
});
```