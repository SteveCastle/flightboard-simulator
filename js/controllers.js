angular.module('flightSim.controllers', ['firebase',])
.controller('FlightCtrl', ['$scope','$firebase','Flights','fbURL', 'flightStatApi', function($scope, $firebase, Flights, fbURL, flightStatApi) {
	$scope.flights = Flights;
	$scope.getFlights =  flightStatApi.flights()
	.success(function(data, status, headers){
		console.log(data);
	})
	.error(function(data, status, headers, config){

	});

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
.controller('Debug',['$scope','flightStatApi', function($scope, flightStatApi){

}]);