'use strict';

var app = angular.module( 'tailoredKeywords' );

app.service('BootstrapService', [ function() {
  var bootstrap = window.bootstrap || {};

  bootstrap.campaigns = [ { name: "One", id: 1 }, { name: "Two", id: 2 } ];

  // Clean up bootstrapped data then remove the javascript tag
  window.bootstrap = null;
  $('#bootstrapped_json').remove();

  this.get = function( property ) {
    return bootstrap[ property ];
  }
 } ] );