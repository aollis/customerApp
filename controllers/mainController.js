var customerApp = angular.module('customerApp', ['ngRoute']);

customerApp.config(function ($routeProvider) {
	$routeProvider
		.when('view1',
			{
				templateUrl: 'view1.html',
				controller: 'mainController'
				
			})
		.when('view2',
			{
				templateUrl: 'view2.html',
				controller: 'mainController'
				
			})

		.otherwise({ 
			redirectTo: 'view1'
			 });
			
});


customerApp.controller('mainController', function ($scope) {
	$scope.customers = [
		{name: 'David Jones', city: 'New York' },
		{name: 'Jamie Riley', city: 'Boston' },
		{name: 'Heedy Wahlin', city: 'San Francisco' },
		{name: 'Thomas Winter', city: 'Santa Barbara' }
	];

	$scope.addCustomer = function () {
		$scope.customers.push(
			{
				name: $scope.newCustomer.name,
				city: $scope.newCustomer.city
			});
	}; 

});







