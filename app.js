(function () {
    var app = angular.module('angularDemo', []);

    app.controller('sleepCtrl', function ($scope) {
        $scope.list = [
            '零只羊',
            '一只羊',
            '两只羊',
            '三只羊',
            '四只羊',
            '五只羊',
            '六只羊',
            '七只羊',
            'zzzzzzzzzz'
        ];

        $scope.isEven = function (item) {
            for (var i = 0; i < $scope.list.length; i++) {
                if ($scope.list[i] === item) {
                    break;
                }
            }
            return (i % 2 === 0);
        }
    });

})();