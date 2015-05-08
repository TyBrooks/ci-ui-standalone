'use strict';

angular.module( 'tailoredKeywords' )

.controller('AddCtrl', [ "$scope", "ApiService", function( $scope, api ) {
  $scope.term = {};

  $scope.makeAddRequest = function() {
    var promise = api.add( $scope.term, $scope.$parent.userId );
    console.log(promise);
  }
} ] );