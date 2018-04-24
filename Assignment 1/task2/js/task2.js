
var app = angular.module('MyApp', [])
    app.controller('MyController', function ($scope, $window) {
        $scope.Fruits = [{
            FruitId: 1,
            Name: 'Apple',
        }, {
            FruitId: 2,
            Name: 'Mango',
        }, {
            FruitId: 3,
            Name: 'Orange',
        }, {
            FruitId: 4,
            Name: 'Bananna',
        }, {
            FruitId: 5,
            Name: 'Grape',
        }, {
            FruitId: 6,
            Name: 'Kiwi',
        }];

        $scope.GetValue = function () {
            var message = "";
            for (var i = 0; i < $scope.Fruits.length; i++) {
                if ($scope.Fruits[i].Selected) {
                    var fruitId = $scope.Fruits[i].FruitId;
                    var fruitName = $scope.Fruits[i].Name;
                    message += " Name: " + fruitName + " , " + "Id: " + fruitId + "\n";
                }
            }

            $window.alert(message);
        }
    });