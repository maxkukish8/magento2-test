define([
    'jquery',
    'underscore',
    'moment',
    'mage/translate'
], function ($, _) {
    'use strict';

    return function (validator) {
        var validators = {
            'validate-address' : [
                function (value) {
                    return value !== undefined;
                },
                $.mage.__('Please, select Address Type.')
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
