'use strict';

describe('Controller: DiaryCtrl', function () {

  // load the controller's module
  beforeEach(module('photoDiaryApp'));

  var DiaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiaryCtrl = $controller('DiaryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DiaryCtrl.awesomeThings.length).toBe(3);
  });
});
