angular.module('tailoredKeywords')

.config(['$stateProvider', function( $stateProvider ) {
  $stateProvider
  
    .state('home', {
      url: "",
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    } )
    
} ] );
