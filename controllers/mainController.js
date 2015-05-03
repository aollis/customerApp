var customerApp = angular.module('customerApp', []);

var controllers = {};

controllers.mainController = function ($scope) {
	$scope.customers = [
		{name: 'David Jones', city: 'New York' },
		{name: 'Jamie Riley', city: 'Boston' },
		{name: 'Heedy Wahlin', city: 'San Francisco' },
		{name: 'Thomas Winter', city: 'Santa Barbara' }
	];
}; 

customerApp.controller(controllers);