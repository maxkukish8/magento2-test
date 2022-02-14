define(
    [
        'ko',
        'uiComponent',
        'underscore',
        'Magento_Checkout/js/model/step-navigator',
        'Magento_Ui/js/modal/modal',
        'jquery'
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
            defaults: {
                template: 'Codifi_FirstStepCheckout/check-login'
            },

            isVisible: ko.observable(true),
            stepTitle: 'Confirmation step',

            /**
             *
             * @returns {*}
             */
            initialize: function () {
                this._super();

                stepNavigator.registerStep(
                    'mynewstep',
                    'mynewstep',
                    this.stepTitle,
                    this.isVisible,
                    _.bind(this.navigate, this),
                    5
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
            },

            showPopup: function () {
                var options = {
                    type: 'popup',
                    responsive: true,
                    innerScroll: true,
                    buttons: [{
                        text: $.mage.__('Continue'),
                        class: 'mymodal1',
                        click: function () {
                            this.closeModal();
                        }
                    }]
                };

                var popup = modal(options, $('#popup-modal-step'));
                $("#popup-modal-step").modal("openModal");
            }
        });
    }
);
