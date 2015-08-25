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
      diary.entries = Diary.query();
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
