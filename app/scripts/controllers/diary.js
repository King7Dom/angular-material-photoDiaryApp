'use strict';

/**
 * @ngdoc function
 * @name photoDiaryApp.controller:DiaryCtrl
 * @description
 * # DiaryCtrl
 * Controller of the photoDiaryApp
 */
angular.module('photoDiaryApp')
  .controller('DiaryCtrl', ['$scope', '$mdDialog', 'diaryEntryService', 
    function ($scope, $mdDialog, diaryEntryService) {
      $scope.diaryEntries = diaryEntryService.diaryEntries();

      $scope.open = function(ev, item) {
        console.log("button click.");
        $mdDialog.show({
          controller: 'DiaryModalCtrl',
          templateUrl: 'views/diaryModal.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          locals: {
            item: item
          }
        });
      };

    }
  ]);
