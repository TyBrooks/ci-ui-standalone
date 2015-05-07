angular.module('tailoredKeywords')

.config(['$stateProvider', '$urlRouterProvider', '$provide', function($stateProvider, $urlRouterProvider, $provide) {
  $provide.service('authService', [ '$http', 'settings', function( $http, settings ) {
    this.sendAuthRequest = function() {
      return $http({
        method: 'GET',
        url: settings.apiURL + 'accounts/myself'
      });
    }
  } ] )
  
  
  $urlRouterProvider.otherwise('/welcome');
  
  $stateProvider
  
    .state('nav', {
      url: "",
      templateUrl: 'modules/ui/ui.html',
      controller: 'UiCtrl'
    })

    
}])
