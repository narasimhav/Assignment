  	
  	var app = angular.module('myApp', [])
    	app.controller('myCtrl', function($scope, $window) {
    		
        		$scope.myFunc = function() {
          		
          			$window.alert($scope.myValue);
        		};
      	});