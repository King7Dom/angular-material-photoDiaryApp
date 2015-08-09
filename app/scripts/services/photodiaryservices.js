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
    var diaryEntries = [];

    var Diary = $resource('json/:name.json', {}, {
      query: {method: "GET", params: {name:"diary-sample"}, isArray: true}
    });

    function getDiaryEntries() {
      diaryEntries = Diary.query();
      return diaryEntries;
    }

    // Public API here
    return {
      diaryEntries: function () {
        return diaryEntries.length !== 0 ? diaryEntries : getDiaryEntries();
      }
    };
  }
]);