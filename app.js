(function () {
    var app = angular.module('angularDemo', []);

    app.service('expanders', function ($http) {
        this.requestData = $http.get('data/expander.json');
    });

    app.controller('MainCtrl', function ($scope, expanders) {
        expanders.requestData
            .success(function (data) {
                $scope.expanders = data;
            })
            .error(function (data) {
                // error
            });
    });

    app.directive('expander', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            require: '^?accordion',// 需要在accordion指令中找控制器，？找不到不会抛异常，^ 父中寻找
            scope: {
                title: '=expanderTitle'
            },
            template: ''
                + '<div>'
                +     '<div class="title" ng-click="toggle()">{{title}}</div>'
                +     '<div class="body" ng-show="showMe" ng-transclude></div>'
                + '</div>',
            link: function (scope, element, attrs, accordionController) {// 引入
                scope.showMe = false;
                accordionController.addExpander(scope);

                scope.toggle = function () {
                    scope.showMe = !scope.showMe;
                    accordionController.gotOpened(scope);
                };
            }
        };
    });

    app.directive('accordion', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            template: '<div ng-transclude></div>',
            controller: function () {
                var expanders = [];

                // 展开，关闭其它
                this.gotOpened = function (selectedExpander) {
                    angular.forEach(expanders, function (expander) {
                        if (selectedExpander !== expander) {
                            expander.showMe = false;
                        }
                    });
                };

                // 添加一个
                this.addExpander = function (expander) {
                    expanders.push(expander);
                };
            }
        };
    });
})();
