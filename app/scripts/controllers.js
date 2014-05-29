/**
* Created with sports-app.
* User: parkerproject
* Date: 2014-05-29
* Time: 05:13 AM
* To change this template use Tools | Templates.
*/

angular.module('F1FeederApp.controllers', [])
.controller('driversController', function($scope) {
    $scope.driversList = [
      {
          Driver: {
              givenName: 'Sebastian',
              familyName: 'Vettel'
          },
          points: 322,
          nationality: "German",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
      {
          Driver: {
          givenName: 'Fernando',
              familyName: 'Alonso'
          },
          points: 207,
          nationality: "Spanish",
          Constructors: [
              {name: "Ferrari"}
          ]
      }
    ];
});