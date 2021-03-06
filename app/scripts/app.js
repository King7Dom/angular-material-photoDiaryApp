'use strict';

/**
 * @ngdoc overview
 * @name photoDiaryApp
 * @description
 * # photoDiaryApp
 *
 * Main module of the application.
 */
angular
  .module('photoDiaryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'photoDiaryServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/diary', {
        templateUrl: 'views/diary.html',
        controller: 'DiaryCtrl',
        controllerAs: 'diary'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('indexController', ['$scope', '$location', function ($scope, $location){
    $scope.go = function (path) {
      $location.path(path);
    };
  }]);
