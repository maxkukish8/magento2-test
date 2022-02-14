define([
    'jquery',
    'jquery/ui',
    'jquery/validate',
    'mage/translate'
], function($) {
    'use strict';
    return function() {
        $.validator.addMethod(
            'validate-product',
            function (value) {
                return value !== '';
                //console.log(value);
            },
            $.mage.__('Please select attribute')
        )
    }
});
