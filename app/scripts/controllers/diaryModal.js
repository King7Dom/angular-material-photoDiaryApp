'use strict';

/**
 * @ngdoc function
 * @name photoDiaryApp.controller:DiaryModalCtrl
 * @description
 * # DiaryModalCtrl
 * Controller of the photoDiaryApp
 */
 angular.module('photoDiaryApp')
  .controller('DiaryModalCtrl', function ($scope, $mdDialog, item) {
      console.log(item);
      $scope.diaryEntry = item;

      $scope.ok = function () {
        console.log("ok");
        $mdDialog.hide();
      };
    }
  );