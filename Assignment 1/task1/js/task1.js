
var app = angular.module('sampleapp', [])
			app.controller('samplecontrol', function ($scope, $window) {
				$scope.sample = [{
					id: '1',
					name: 'hyderabad'
				}, {
					id: '2',
					name: 'chennai'
				}, {
					id: '3',
					name: 'Delhi'
				}, {
					id: '4',
					name: 'Ongole'
				}];

				$scope.getselectval = function () {
				$window.alert($scope.selectedvalues= 'Name: ' + $scope.selitem.name + ',' + ' Id: ' + $scope.selitem.id);
				}
			});