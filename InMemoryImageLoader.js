// #############################################################################
// N_o_d_e_I_n_M_e_m_o_r_y_I_M_G_L_o_a_d_e_r_;-)
// Johannes Boyne <johannes@boyne.de> | (bd) & archkomm GmbH
// _____________________________________________________________________________
//
// Preloading Image Assets into memory and reuse them later.
// 
// #############################################################################

// -----------------------------------------------------------------------------
// Node.js framework or essential modules
// -----------------------------------------------------------------------------
var http = require('http');


// -----------------------------------------------------------------------------
// load func.
// -----------------------------------------------------------------------------
// exp.:
// InMemImgLdr.load('nodejs.org', '/images/logos/nodejs-1024x768.png', function (buf) {
// 	/* use buf */
// });
exports.load = function (host, path, fn) {
	http.get({ host: host, path: path }, function (res) {
		// if status Code OK
		if (res.statusCode != 200) throw "InMemoryImageLoader - ERROR: http.get statusCode != 200 :-/";
		
		// getting data
		var imagedata = '';
		res.setEncoding('binary');
		res.on('data', function(d) {
			imagedata += d;
		});

		res.on('end', function(d) {
			var buf = new Buffer(imagedata, 'binary');
			// returning a valid buffer
			fn(buf);
			// clearing the variable for garbage collection
			buf = null; 
		});
	});
};