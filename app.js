(function () {
    var app = angular.module('angularDemo', []);

    app.controller('MainCtrl', function ($scope) {
        $scope.expanders = [
            {
                title: '主题1',
                text: '这里是内容1，内容很长很长很长很长很长很长'
            },
            {
                title: '主题2',
                text: '这里是内容2'
            },
            {
                title: '主题3',
                text: '这里是内容3，内容也很长很长很长很长很长很长'
            }
        ];
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
