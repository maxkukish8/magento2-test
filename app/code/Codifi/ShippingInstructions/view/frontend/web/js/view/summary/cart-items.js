/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'ko',
    'Magento_Checkout/js/model/totals',
    'uiComponent',
    'Magento_Checkout/js/model/step-navigator',
    'Magento_Checkout/js/model/quote',
    'uiRegistry'
], function (ko, totals, Component, stepNavigator, quote, registry) {
    'use strict';

    var mixin = {
        defaults: {
            template: 'Codifi_ShippingInstructions/summary/cart-items'
        },
        getText: ko.observable(registry.get('checkout.steps.shipping-step.shippingAddress.before-shipping-method-form.shipping_comment_block').inputText)
    }

    return function (target) { // target == Result that Magento_Ui/.../default returns.
    return target.extend(mixin); // new result that all other modules receive
    }
});
