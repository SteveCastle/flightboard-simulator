angular.module('flightSim', ['ngRoute', 'firebase','flightSim.services', 'flightSim.directives','flightSim.controllers'])
.value('fbURL', 'https://flightsimulator.firebaseio.com/flights/')
.factory('Flights', function($firebase, fbURL){
	return $firebase(new Firebase(fbURL));
});