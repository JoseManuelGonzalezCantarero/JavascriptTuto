'use strict';

import 'bootstrap-sass';
// make sure the polyfill library is loaded in this main entry
import 'core-js/library/es6/promise';
import '../css/main.scss';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
