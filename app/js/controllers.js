'use strict';

/* Controllers */

// angular.module('myApp.controllers', [])
//   .controller('MyCtrl1', ['$scope', function($scope) {
//
//   }])
//   .controller('MyCtrl2', ['$scope', function($scope) {
//
//   }]);

angular.module('F1FeederApp.controllers', [])
  .controller('driversController', ['$scope', 'ergastAPIservice',
    function($scope, ergastAPIservice) {
      $scope.nameFilter = null;
      $scope.driversList = [];

      ergastAPIservice.getDrivers().success(function(response) {
        //Dig into the responde to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      });
    }
  ]);