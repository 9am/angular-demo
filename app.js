(function () {
    var app = angular.module('angularDemo', []);

    app.directive('demoInput', function () {
        return {
            restrict: 'AE',
            templateUrl: 'partials/demo-input.html',
            scope: {
                title: '@',
                inputModel: '='
            },
            link: function (scope, element, attrs) {
                console.log('title:', attrs.title);
                element.on('click', function () {
                    element.css('background-color', 'green');
                });
            }
        };
    });

})();