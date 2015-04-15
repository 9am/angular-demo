(function () {
    var app = angular.module('angularDemo', []);

    // 父层级
    app.controller('InputCtrl', function ($scope) {
        $scope.sharedObj = {};
    });

    // 子层级
    app.controller('SonOfInputCtrl', function ($scope) {
        $scope.sharedObj.inputValue = '听孩子的话';
    });

})();