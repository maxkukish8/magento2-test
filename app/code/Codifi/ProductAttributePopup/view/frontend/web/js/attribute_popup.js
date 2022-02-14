require(
    [
        'jquery',
        'Magento_Ui/js/modal/modal'
    ],
    function(
        $,
        modal
    ) {
        var options = {
            type: 'popup',
            responsive: true,
            innerScroll: true,
            buttons: [{
                text: $.mage.__('Continue'),
                class: 'mymodal',
                click: function () {
                    this.closeModal();
                }
            }]
        };

        let $myModal = $('#popup-attribute');
        let popup = modal(options, $myModal);

        $("#click-info").click(function() {
            $myModal.modal('openModal');
        });

    }
);
