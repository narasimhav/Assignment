
    var app = angular.module('MyApp', [])

        app.controller('MyController', function ($scope, $window) {
            $scope.CheckRadio = function () {
                if (typeof ($scope.HasRadio) != "undefined") {
                    if ($scope.HasRadio) {
                        $window.alert("RadioButton YES is checked.");
                    } else {
                        $window.alert("RadioButton NO is checked.");
                    }
                } else {
                    $window.alert("RadioButtons are not checked.");
                }
            };
        });