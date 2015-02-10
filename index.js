/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-snap-svg',

  blueprintsPath: function blueprintsPath() {
    return path.join(__dirname, 'blueprints');
  },

  included: function included(app) {
    this.app = app;

    this._super.included(app);

    app.import(app.bowerDirectory + '/snap.svg/dist/snap.svg.js');

    app.import(app.bowerDirectory + '/ember-cli-snap-svg-shim/snap-svg-shim.js', {
      exports: {
        'snap-svg': ['default']
      }
    });
  }
};