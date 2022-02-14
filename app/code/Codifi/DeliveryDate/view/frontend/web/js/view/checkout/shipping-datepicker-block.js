define([
    'ko',
    'uiComponent',
    'jquery'
], function (ko, Component,$) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Codifi_DeliveryDate/checkout/shipping-datepicker-block'
        },
        initialize: function () {
            this._super();
        },
        getDate: function () {
            $("#datepicker").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                minDate: 0,
                maxDate: "+1M +5D"
            });
        }
    });
});
