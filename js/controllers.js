angular.module('flightSim.controllers', ['firebase',])
.controller('FlightCtrl', ['$scope','$firebase','Flights','fbURL', 'flightStatApi', function($scope, $firebase, Flights, fbURL, flightStatApi) {
	$scope.flights = Flights;
	$scope.removeFlight = function(id){
		var flightURL = fbURL + id;
		$scope.activeFlight = $firebase(new Firebase(flightURL));
		console.log(flightURL);
		console.log($scope.activeFlight);
		$scope.activeFlight.$remove();
	};
	$scope.addFlight = function(){
		if($scope.newFlight.status === "On Time"){
			$scope.newFlight.delay = false;
		}else{
			$scope.newFlight.delay = true;
		}
		Flights.$add($scope.newFlight);
	};
}])
.controller('LiveFlights',['$scope','flightStatApi','$routeParams', function($scope, flightStatApi, $routeParams){
	console.log($routeParams.airport);
	flightStatApi.flights($routeParams.airport,"none","none")
	.success(function(data, status, headers){
		$scope.flights = data.flightStatuses;
		console.log(data);
	})
	.error(function(data, status, headers, config){

	});
}]);