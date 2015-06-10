		var customerApp = angular.module('customerApp', []);

		customerApp.config(function($routeProvider) {
			$routeProvider
 				.when('../index.html', {
                    templateUrl: '../views/view1.html',
                    controller: 'mainController'
                })
                .when('../views/view2', {
                    templateUrl: '../views/view2.html',
                    controller: 'mainController'
                })
                .otherwise({
                    redirectTo: '../views/view1.html'
                    controller: 'mainController'
                });

        });

		customerApp.controller('mainController', function($scope) {
			$scope.customers = [
				{name: 'David Jones', city: 'New York' },
				{name: 'Jamie Riley', city: 'Boston' },
				{name: 'Heedy Wahlin', city: 'San Francisco' },
				{name: 'Thomas Winter', city: 'Santa Barbara' }
			];

			$scope.addCustomer = function() {
				$scope.customers.push(
					{
						name: $scope.newCustomer.name,
						city: $scope.newCustomer.city
					});
			}; 

		});