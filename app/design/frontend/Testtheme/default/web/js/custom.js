require([
    "jquery","select2","slider", "mage/calendar"
], function($) {
    "use strict";
    $(window).load(function() {
        $("#test_button").click(function(){
            $(".test-block-content").toggle();
        });

    });

    $(document).ready(function() {

        $('#cars').select2({
            selectOnClose: true
        });

        $('.products-related .product-items').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $(function() {
            $("#datepickecker").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                minDate: 0,
                maxDate: "+1M +5D"
            });
        });

    });


    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height > 100){
            $('header').addClass('header-fixed');
        } else{
            $('header').removeClass('header-fixed');
        }
    });
});
