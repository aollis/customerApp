var customerApp = angular.module('customerApp', []);

var controllers = {};

controllers.mainController = function ($scope) {
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
}

customerApp.controller(controllers);

//routes that will be connected later//

// demoApp.config(function ($routeProvider) {
// 	$routeProvider
// 		.when('/',
// 			{
// 				controller: 'mainController',
// 				templateUrl: 'view1.html'
// 			})
// 		.when('/partial2',
// 			{
// 				controller: 'mainController',
// 				templateUrl: 'view2.html'
// 			})
// 		.otherwise({ redirectTo: '/' });
			
// });