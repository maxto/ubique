/**
 * External Library
 */
module.exports = function($u) {
 // moment.js - Parse, validate, manipulate, and display dates in JavaScript (http://momentjs.com/)
 $u.__moment = require('moment');
 // request.js - Simplified HTTP request client (https://github.com/request/request)
 $u.__request = require('request');
 // sync-request.js  - Make synchronous web requests with cross platform support (https://github.com/ForbesLindesay/sync-request)
 $u.__syncrequest = require('sync-request');
}
