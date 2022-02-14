define(
    [
        'ko',
        'uiComponent',
        'underscore',
        'Magento_Checkout/js/model/step-navigator',
        'Magento_Ui/js/modal/modal',
        'jquery',
        'Magento_Ui/js/form/form'
    ],
    function (
        ko,
        Component,
        _,
        stepNavigator,
        modal,
        $
    ) {
        'use strict';

        return Component.extend({
            isVisible: ko.observable(true),
            stepTitle: 'Form step',

            /**
             *
             * @returns {*}
             */
            initialize: function () {
                this._super();

                stepNavigator.registerStep(
                    'custom-checkout-form',
                    'custom-checkout-form',
                    this.stepTitle,
                    this.isVisible,
                    _.bind(this.navigate, this),
                    9
                );

                return this;
            },

            navigate: function () {
                var self = this;
                self.isVisible(true);
            },

            /**
             * @returns void
             */
            navigateToNextStep: function () {
                stepNavigator.next();
            }
        });
    }
);
