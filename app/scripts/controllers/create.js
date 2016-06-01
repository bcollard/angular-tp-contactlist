'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('CreateCtrl', function ($scope, $location) {
    $scope.addContact = function() {
    	$scope.contact.id = $scope.contacts.length + 1;
        $scope.contacts.push($scope.contact);

        $location.path("#/list");
    }
  });
