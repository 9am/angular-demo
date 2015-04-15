(function () {
    var app = angular.module('angularDemo', []);

    app.controller('InputCtrl', function ($scope) {
        $scope.inputValue = '试一试';

        $scope.$watch('inputValue', function () {
            console.log('value: ', $scope.inputValue);
        });
    });

})();