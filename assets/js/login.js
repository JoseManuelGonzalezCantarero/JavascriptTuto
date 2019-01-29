'use strict';

import '../css/login.css';

$(document).ready(function() {
    $('.js-recommended-login').on('click', '.js-show-login', function(e) {
        e.preventDefault();

        $('.js-recommended-login-details').toggle();
    });

    $('.js-login-field-username').on('keydown', function(e) {
        const $usernameInput = $(e.currentTarget);
        // remove any existing warnings
        $('.login-long-username-warning').remove();

        if ($usernameInput.val().length >= 20) {
            // use code splitting to lazily load this "chunk"
            import('./Components/username_validation_error').then(username_validation_error => {
                console.log(username_validation_error);
                username_validation_error.default($usernameInput);
            });
        }
    });
});
