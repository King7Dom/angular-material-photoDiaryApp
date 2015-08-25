'use strict';

/**
 * @ngdoc service
 * @name photoDiaryApp.photoDiaryServices
 * @description
 * # photoDiaryServices
 * Factory in the photoDiaryApp.
 */
var photoDiaryServices = angular.module('photoDiaryServices', ['ngResource']);

photoDiaryServices.factory('diaryEntryService', ['$resource',
  function ($resource) {
    var diary = {
      entries: []
    };

    var Diary = $resource('json/:name.json', {}, {
      query: {method: "GET", params: {name:"diary-sample"}, isArray: true}
    });

    function getDiaryEntries() {
      Diary.query(
        {name:"diary"}
      ).$promise.then(
        function(diaryEntries) {
          diary.entries = diaryEntries;
        },
        function(error) {
          console.debug("Error:");
          console.debug(error);
          Diary.query().$promise.then(function(sample) {
            diary.entries = sample;
          });
        }
      );
      return diary;
    }

    // Public API here
    return {
      diary: function () {
        if (diary.entries.length === 0) {
          getDiaryEntries();
        }
        return diary;
      }
    };
  }
]);
