'use strict';

/**
 * @ngdoc function
 * @name photoDiaryApp.controller:DiaryCtrl
 * @description
 * # DiaryCtrl
 * Controller of the photoDiaryApp
 */
angular.module('photoDiaryApp')
  .controller('DiaryCtrl', ['$scope', 'diaryEntryService', 
    function ($scope, diaryEntryService) {
      $scope.diaryEntries = diaryEntryService.diaryEntries();
    }
  ]);
