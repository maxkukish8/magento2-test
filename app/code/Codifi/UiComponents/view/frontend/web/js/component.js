define(['jquery', 'uiComponent', 'ko'], function($, Component, ko) {

    return Component.extend({
        customText: ko.observable('Custom Text')
    });

});
