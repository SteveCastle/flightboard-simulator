angular.module('flightSim.services', [])
.factory('flightStatApi', ['$http', function($http){
  var baseUrl = 'https://api.flightstats.com/flex/';
  var options = {
    appId : '5993afbd',
    appKey : '656f3a0b5b4bd0b4c2b6ffdd22f7524c',
    method: 'rest',
    version: 'v1',
    format: 'jsonp'
  };


  var getAirports = function(){
    var queryUrl = baseUrl + "airports/rest/v1/jsonp/active/?appId="+options.appId+"&appKey=" +options.appKey+ "&callback=JSON_CALLBACK";
    return $http.jsonp(queryUrl);
  };
  var getFlights = function(airport,type,date){
    var currentDate = new Date();
    var dateString = currentDate.getFullYear() + "/" + ("0" + (currentDate.getMonth() + 1)).slice(-2)+ "/" + ("0" + (currentDate.getDate() + 1)).slice(-2)+ "/" + currentDate.getHours() + "/";
    var queryUrl =baseUrl + "flightstatus/rest/v2/jsonp/airport/status/"+ airport +"/dep/"+dateString+ "?appId="+options.appId+"&appKey=" +options.appKey+ "&callback=JSON_CALLBACK";
    return $http.jsonp(queryUrl);
  };

  return {
    airports: function(){return getAirports();},
    flights: function(airport){return getFlights(airport);},
    };
}]);