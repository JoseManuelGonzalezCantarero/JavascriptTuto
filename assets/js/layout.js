'use strict';

import 'bootstrap-sass';
// make sure the polyfill library is loaded in this main entry
import 'babel-polyfill';
import '../css/main.scss';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
