define([
    'jquery',
    'ko',
    'uiComponent',
    'Magento_Checkout/js/model/quote',
    'uiRegistry'
], function ($, ko, Component, quote, registry) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Codifi_ShippingInstructions/checkout/shipping-comment-block'
        },

        inputText: ko.observable('')

        /*initialize: function () {
            this._super();

            this.inputText.subscribe(function (value) {
                console.log(value);
            });
        }*/
    });
});
