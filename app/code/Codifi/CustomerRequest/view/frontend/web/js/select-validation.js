define(['jquery'], function($) {
    'use strict';

    return function() {
        $.validator.addMethod(
            'validate-car',
            function (value) {
                return value !== '';
                //console.log(value);
            },
            $.mage.__('Please, select car.')
        )
    }
});
