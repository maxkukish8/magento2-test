define(['jquery'], function($) {
    'use strict';

    return function() {
        $.validator.addMethod(
            'onlyimages',
            function (value, element) {
                var file = element.files[0];
                var fileType = file["type"];
                var validImageTypes = ["image/jpg", "image/gif", "image/jpeg", "image/png"];
                var validImage = $.inArray(fileType, validImageTypes) > 0;
                return validImage;
            },
            $.mage.__('Invalid image format! Image format must be .jpg, .jpeg, .png, .gif.')
        )
    }
});
