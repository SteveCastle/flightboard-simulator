angular.module('flightSim.controllers', ['firebase',])
.controller('FlightCtrl', ['$scope','$firebase','Flights','fbURL', function($scope, $firebase, Flights, fbURL) {
	console.log(Flights);
	$scope.flights = Flights;
	$scope.removeFlight = function(id){
		var flightURL = fbURL + id;
		$scope.activeFlight = $firebase(new Firebase(flightURL));
		console.log(flightURL);
		console.log($scope.activeFlight);
		$scope.activeFlight.$remove();
	};
	$scope.addFlight = function(){
    Flights.$add($scope.newFlight);
	};
}]);