var customerApp = angular.module('customerApp', ['ngRoute']);

customerApp.config(function ($routeProvider) {
	$routeProvider
	    .when('/index', route.resolve('view1'))
	    .when('/view2', route.resolve('view2'))
	    .otherwise({ redirectTo: '/index' });
			
});


customerApp.controller('mainController', function ($scope) {
	$scope.customers = [
		{name: 'David Jones', city: 'New York' },
		{name: 'Jamie Riley', city: 'Boston' },
		{name: 'Heedy Wahlin', city: 'San Francisco' },
		{name: 'Thomas Winter', city: 'Santa Barbara' }
	];

	// $scope.addCustomer = function ($scope) {
	// 	$scope.customers.push(
	// 		{
	// 			name: $scope.newCustomer.name,
	// 			city: $scope.newCustomer.city
	// 		});
	// }; 

});







