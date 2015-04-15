(function () {
    var app = angular.module('angularDemo', []);

    app.controller('MainCtrl', function ($scope) {
        $scope.title = '点击展开'
        $scope.text = '展开的内容'
    });

    app.directive('expander', function () {
        return {
            restrict: 'EA',// E,A,C,M
            replace: true,// 是否替换指令所在的元素
            transclude: true,//把原来元素中的内容提供到模板中
            scope: {
                title: '=expanderTitle'
                // false 现有的scope
                // true 新scope
                // {} 独立的scope, @ = &
            },
            template: ''
                + '<div>'
                +     '<div class="title" ng-click="toggle()">{{title}}</div>'
                +     '<div class="body" ng-show="showMe" ng-transclude></div>'
                + '</div>',
            link: function (scope, element, attrs) {
                scope.showMe = false;

                scope.toggle = function () {
                    scope.showMe = !scope.showMe;
                }
            }
        };
    });
})();