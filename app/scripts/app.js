'use strict';

/**
 * @ngdoc overview
 * @name contactsApp
 * @description
 * # contactsApp
 *
 * Main module of the application.
 */
angular
  .module('contactsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'create'
      })
      .when('/detail/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'detail'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $http) {
    $http
      .get('contacts.json')
      .then(function(success) {
        $rootScope.contacts = success.data.contacts
      }, function (error) {
        console.error('Could not get the contact file');
      }); 
  });


// sort asc and desc

// Models Contact & ContactList
// methode fullName 

// filtre niceNumber

// formulaire add

// view show contact

// button "edit" on listPage
// button "view" on listPage


