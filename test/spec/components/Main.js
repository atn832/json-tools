'use strict';

describe('Main', function () {
  var Main, component;

  beforeEach(function () {
    Main = require('../../../src/scripts/components/Main.jsx');
    component = Main();
  });

  it('should create a new instance of Main', function () {
    expect(component).toBeDefined();
  });
});
