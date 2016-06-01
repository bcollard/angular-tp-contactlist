'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('DetailCtrl', function ($scope, $routeParams) {
  	//console.dir($scope.contacts[$routeParams.id-1]);
  	$scope.contact = $scope.contacts[$routeParams.id-1];
  });
