(function () {
    var app = angular.module('angularDemo', []);

    // 父层级
    app.controller('InputCtrl', function ($scope) {
        $scope.inputValue = '试一试';

        $scope.$watch('inputValue', function () {
            console.log('father: ', $scope.inputValue);
        });
    });

    // 子层级
    app.controller('SonOfInputCtrl', function ($scope) {
        $scope.inputValue = '孩子也试一试';

        $scope.$watch('inputValue', function () {
            console.log('son: ', $scope.inputValue);
        });
    });

})();