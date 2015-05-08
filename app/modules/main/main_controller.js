'use strict';

angular.module( 'tailoredKeywords' )

.controller('MainCtrl', [ "$scope", "BootstrapService", function( $scope, bootstrap ) {
    $scope.campaigns = bootstrap.get( "campaigns" ) || [];
    $scope.userId = $scope.campaigns[0].id;

    console.log($scope.campaigns);
  } ] );