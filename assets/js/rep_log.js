const $ = require('jquery');
require('bootstrap-sass');
const RepLogApp = require('./Components/RepLogApp');

// expose $ globally so I can use it in the template
// ... even though I should put all my code here!
global.$ = $;

$(document).ready(function() {
    var $wrapper = $('.js-rep-log-table');
    var repLogApp = new RepLogApp($wrapper, $wrapper.data('rep-logs'));
});