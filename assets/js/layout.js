'use strict';

require('bootstrap-sass');
// make sure the polyfill library is loaded in this main entry
require('babel-polyfill');
require('../css/main.scss');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
