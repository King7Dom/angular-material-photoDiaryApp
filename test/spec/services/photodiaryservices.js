'use strict';

describe('Service: photoDiaryServices', function () {

  // load the service's module
  beforeEach(module('photoDiaryApp'));

  // instantiate service
  var photoDiaryServices;
  beforeEach(inject(function (_photoDiaryServices_) {
    photoDiaryServices = _photoDiaryServices_;
  }));

  it('should do something', function () {
    expect(!!photoDiaryServices).toBe(true);
  });

});
