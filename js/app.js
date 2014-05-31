angular.module('flightSim', ['ngRoute', 'firebase','flightSim.services', 'flightSim.directives','flightSim.controllers'])
.value('fbURL', 'https://flightsimulator.firebaseio.com/flights/')
.factory('Flights', function($firebase, fbURL){
	return $firebase(new Firebase(fbURL));
})
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl:'views/custom-airport.html',
		controller: 'FlightCtrl'
	})
	.when('/:airport',{
		templateUrl:'views/live-airport.html',
		controller: 'LiveFlights'
	});
}]);