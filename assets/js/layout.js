'use strict';

require('bootstrap');
// make sure the polyfill library is loaded in this main entry
require('babel-polyfill');
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('../css/main.css');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
