define(['jquery'], function($) {
    'use strict';

    return function() {
        $.validator.addMethod(
            'validate-min-ten',
            function(value) {
                return value.length >= 10;
            },
            $.mage.__('Please enter 10 characters or greater than 10!')
        )
    }
});
