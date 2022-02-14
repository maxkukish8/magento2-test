define([
    'jquery',
    'underscore',
    'moment',
    'mage/translate'
], function ($, _) {
    'use strict';

    return function (validator) {
        var validators = {
            'phoneMask': [
                function(value) {
                    return value.length == 10 && value.match(/([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/g) && value.match(/^[-+]?[0-9]+$/);
                },
                $.mage.__('Please specify a valid mobile number with country code example (XXX) XXX-XXXX')
            ],
            'stateValid' : [
                function (value) {
                    return value !== undefined;
                },
                $.mage.__('Please, select State/Province.')
            ],
            'validate-street-part' : [
                function(value) {
                    return value.length >= 10;
                },
                $.mage.__('Please enter 10 characters or greater than 10!')
            ]
        };

        validators = _.mapObject(validators, function (data) {
            return {
                handler: data[0],
                message: data[1]
            };
        });

        return $.extend(validator, validators);
    };
});
