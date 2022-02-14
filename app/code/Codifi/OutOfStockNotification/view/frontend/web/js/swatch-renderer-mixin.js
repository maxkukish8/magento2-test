define(['jquery'], function ($) {
    'use strict';

    return function (SwatchRenderer) {
        $.widget('mage.SwatchRenderer', $['mage']['SwatchRenderer'], {
            /**
             * Event for swatch options
             *
             * @param {Object} $this
             * @param {Object} $widget
             * @private
             */
            _OnClick: function ($this, $widget) {
                var $parent = $this.parents('.' + $widget.options.classes.attributeClass),
                    $wrapper = $this.parents('.' + $widget.options.classes.attributeOptionsWrapper),
                    $label = $parent.find('.' + $widget.options.classes.attributeSelectedOptionLabelClass),
                    attributeId = $parent.data('attribute-id'),
                    $input = $parent.find('.' + $widget.options.classes.attributeInput),
                    checkAdditionalData = JSON.parse(this.options.jsonSwatchConfig[attributeId]['additional_data']),
                    $priceBox = $widget.element.parents($widget.options.selectorProduct)
                        .find(this.options.selectorProductPrice);

                if ($widget.inProductList) {
                    $input = $widget.productForm.find(
                        '.' + $widget.options.classes.attributeInput + '[name="super_attribute[' + attributeId + ']"]'
                    );
                }

                if ($this.hasClass('disabled')) {
                    var add="<p class='message-disable'>We're sorry, this color is temporarily out of stock</p>";
                    this.element.after(add);
                }

                if ($this.hasClass('selected')) {
                    $parent.removeAttr('data-option-selected').find('.selected').removeClass('selected');
                    $input.val('');
                    $label.text('');
                    $this.attr('aria-checked', false);
                } else {
                    $parent.attr('data-option-selected', $this.data('option-id')).find('.selected').removeClass('selected');
                    $label.text($this.data('option-label'));
                    $input.val($this.data('option-id'));
                    $input.attr('data-attr-name', this._getAttributeCodeById(attributeId));
                    $this.addClass('selected');
                    $widget._toggleCheckedAttributes($this, $wrapper);
                    if (!$this.hasClass("disabled")) {
                        var parent = $this.closest('.fieldset');
                        parent.find('.message-disable').hide();
                    }
                }

                $widget._Rebuild();

                if ($priceBox.is(':data(mage-priceBox)')) {
                    $widget._UpdatePrice();
                }

                $(document).trigger('updateMsrpPriceBlock',
                    [
                        this._getSelectedOptionPriceIndex(),
                        $widget.options.jsonConfig.optionPrices,
                        $priceBox
                    ]);

                if (parseInt(checkAdditionalData['update_product_preview_image'], 10) === 1) {
                    $widget._loadMedia();
                }

                $input.trigger('change');
            },
            _Rewind: function (controls) {
                var $widget = this
                controls.find('div[data-option-id], option[data-option-id]').removeClass('disabled').removeAttr('disabled');
                controls.find('div[data-option-empty], option[data-option-empty]')
                    .addClass('disabled')
                    .attr('tabindex', '-1');
            }
        });
        return $['mage']['SwatchRenderer'];
    };
});
