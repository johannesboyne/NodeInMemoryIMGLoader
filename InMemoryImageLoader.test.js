// InMemImgLdr spec
var assert = require("assert");
var InMemImgLdr = require('./../imgen/InMemoryImageLoader');

describe("InMemoryImageLoader", function () {
	it("should return a buffer", function () {
		InMemImgLdr.load('nodejs.org', '/images/logos/nodejs-1024x768.png', function (buf) {
			assert.equal(true, Buffer.isBuffer(buf));
		});
	});
});

