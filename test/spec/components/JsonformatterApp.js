'use strict';

describe('Main', function () {
  var JsonformatterApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    JsonformatterApp = require('../../../src/scripts/components/JsonformatterApp.jsx');
    component = JsonformatterApp();
  });

  it('should create a new instance of JsonformatterApp', function () {
    expect(component).toBeDefined();
  });
});
