angular.module('app').directive('dmcFormInput', function () {
    return {
        restrict: 'EA',
        replace: false,
        scope: {
            dmcFormInput: '='
        },
        link: function (scope, elem, attrs, fn) {
            //TODO: Get the input styles right
            var placeholderText = attrs.placeholder;

            elem.wrap('<div class=jvFloat>');

            if (attrs.required) {
                elem.addClass('required');
                elem.before("<span class='placeHolder required'>" + placeholderText);
            } else {
                elem.before("<span class='placeHolder'>" + placeholderText);
            }

            elem.on('blur', function () {
                if (elem.val() == '') {
                    console.log('No value entered: ');
                    elem.siblings('.placeHolder').removeClass('active');
                } else {
                    elem.siblings('.placeHolder').addClass('active');
                    console.log('Value entered: ' + elem.val());
                }
            })
        }
    };
});

/*
(function ($) {
    // Init Plugin Functions
    $.fn.jvFloat = function () {
        // Check input type - filter submit buttons.
        return this.filter('input:not([type=submit])').each(function () {
            // store placeholder text in placeHolder Variable
            var placeholderText = $(this).attr('placeholder');
            // Wrap the input in div.jvFloat
            $(this).wrap('<div class=jvFloat>');
            // Store the placeholder text in span.placeHolder
            // added `required` input detection and state
            if ($(this).attr('required')) {
                $(this).before("<span class='placeHolder required'>" + placeholderText);
            } else {
                $(this).before('<span class=placeHolder>' + placeholderText);
            }
            // change span.placeHolder to span.placeHolder.active
            $(this).bind('keyup blur', function () {
                if ($(this).val() === '') {
                    $(this).siblings('.placeHolder').removeClass('active');
                } else {
                    $(this).siblings('.placeHolder').addClass('active');
                }
            });
        });
    };
    // Make Zeptojs & jQuery Compatible
})(window.jQuery || window.Zepto || window.$);
*/
