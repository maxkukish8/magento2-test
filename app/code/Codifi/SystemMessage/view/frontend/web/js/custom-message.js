define ([
    'jquery',
    'Magento_Customer/js/customer-data',
    'Magento_Ui/js/view/messages',
    'mage/translate'
], function ($, customerData) {
    'use strict';

    $('#customForm').on('submit', function(e){
        e.preventDefault();
        var showResult = $(this).serializeArray();
        var values = {};
        $.each(showResult, function(i, field){
            values[this.name] = this.value;
        });

        var msg = $.mage.__(values.text + '  ' + values.message);

        customerData.set('messages', {
            messages: [{
                type: 'success',
                text: msg
            }]
        });

    });

});
