define([
    'jquery',
    'underscore',
    'mage/template',
    'mage/translate',
    'priceUtils',
    'priceBox',
    'jquery-ui-modules/widget',
    'jquery/jquery.parsequery',
    'fotoramaVideoEvents'
], function ($, _, mageTemplate, $t, priceUtils) {
    'use strict';


    return function (configurable) {
        $.widget('mage.configurable', $['mage']['configurable'], {

            /**
             * Populates an option's selectable choices.
             * @private
             * @param {*} element - Element associated with a configurable option.
             */
            _fillSelect: function (element) {
                var attributeId = element.id.replace(/[a-z]*/, ''),
                    options = this._getAttributeOptions(attributeId),
                    prevConfig,
                    index = 1,
                    allowedProducts,
                    allowedProductsByOption,
                    allowedProductsAll,
                    i,
                    j,
                    finalPrice = parseFloat(this.options.spConfig.prices.finalPrice.amount),
                    optionFinalPrice,
                    optionPriceDiff,
                    optionPrices = this.options.spConfig.optionPrices,
                    allowedOptions = [],
                    indexKey,
                    allowedProductMinPrice,
                    allowedProductsAllMinPrice;

                var attribute_lable = this.options.spConfig.attributes[element.id.replace(/[a-z]*/, '')]['label'];

                this._clearSelect(element);
                element.options[0] = new Option('', '');
                element.options[0].innerHTML = 'Please select' + ' ' + attribute_lable.toLowerCase();
                prevConfig = false;

                if (element.prevSetting) {
                    prevConfig = element.prevSetting.options[element.prevSetting.selectedIndex];
                }

                if (options) {
                    for (indexKey in this.options.spConfig.index) {
                        /* eslint-disable max-depth */
                        if (this.options.spConfig.index.hasOwnProperty(indexKey)) {
                            allowedOptions = allowedOptions.concat(_.values(this.options.spConfig.index[indexKey]));
                        }
                    }

                    if (prevConfig) {
                        allowedProductsByOption = {};
                        allowedProductsAll = [];

                        for (i = 0; i < options.length; i++) {
                            /* eslint-disable max-depth */
                            for (j = 0; j < options[i].products.length; j++) {
                                // prevConfig.config can be undefined
                                if (prevConfig.config &&
                                    prevConfig.config.allowedProducts &&
                                    prevConfig.config.allowedProducts.indexOf(options[i].products[j]) > -1) {
                                    if (!allowedProductsByOption[i]) {
                                        allowedProductsByOption[i] = [];
                                    }
                                    allowedProductsByOption[i].push(options[i].products[j]);
                                    allowedProductsAll.push(options[i].products[j]);
                                }
                            }
                        }

                        if (typeof allowedProductsAll[0] !== 'undefined' &&
                            typeof optionPrices[allowedProductsAll[0]] !== 'undefined') {
                            allowedProductsAllMinPrice = this._getAllowedProductWithMinPrice(allowedProductsAll);
                            finalPrice = parseFloat(optionPrices[allowedProductsAllMinPrice].finalPrice.amount);
                        }
                    }

                    for (i = 0; i < options.length; i++) {
                        if (prevConfig && typeof allowedProductsByOption[i] === 'undefined') {
                            continue; //jscs:ignore disallowKeywords
                        }

                        allowedProducts = prevConfig ? allowedProductsByOption[i] : options[i].products.slice(0);
                        optionPriceDiff = 0;

                        if (typeof allowedProducts[0] !== 'undefined' &&
                            typeof optionPrices[allowedProducts[0]] !== 'undefined') {
                            allowedProductMinPrice = this._getAllowedProductWithMinPrice(allowedProducts);
                            optionFinalPrice = parseFloat(optionPrices[allowedProductMinPrice].finalPrice.amount);
                            optionPriceDiff = optionFinalPrice - finalPrice;
                            options[i].label = options[i].initialLabel;

                            if (optionPriceDiff !== 0) {
                                options[i].label += ' ' + priceUtils.formatPrice(
                                    optionPriceDiff,
                                    this.options.priceFormat,
                                    true
                                );
                            }
                        }

                        if (allowedProducts.length > 0 || _.include(allowedOptions, options[i].id)) {
                            options[i].allowedProducts = allowedProducts;
                            element.options[index] = new Option(this._getOptionLabel(options[i]), options[i].id);

                            if (typeof options[i].price !== 'undefined') {
                                element.options[index].setAttribute('price', options[i].price);
                            }

                            if (allowedProducts.length === 0) {
                                element.options[index].disabled = true;
                            }

                            element.options[index].config = options[i];
                            index++;
                        }

                        /* eslint-enable max-depth */
                    }
                }
            }
        });
        return $['mage']['configurable'];
    };

});
