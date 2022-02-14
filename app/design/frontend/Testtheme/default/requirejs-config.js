var config = {
    map: {
        '*': {
            custom: 'js/custom',
            select2: 'js/select2.min',
            myjs: 'js/myfile',
            slider: 'js/slick.min'
            /*myjs2: 'Magento_Checkout/js/custom2'*/
        }
    },
    paths: {
        'myjs': 'js/myfile'
    },
    shim: {
        'myjs': {
            deps: ['jquery']
        }
    }
};
