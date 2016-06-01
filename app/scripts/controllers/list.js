'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the contactsApp
 */
angular
  .module('contactsApp')
  .controller('ListCtrl', function ($scope) {
    $scope.rbOrderBy = '+lastName';
  });
