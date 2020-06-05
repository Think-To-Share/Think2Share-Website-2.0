window.env = process.env.NODE_ENV;

try {
	window.$ = window.JQuery = require( "jquery" );
	require('bootstrap');
	require('./common');
}catch(e) {
	if(env == 'development') {
		console.log(e);
	}
}