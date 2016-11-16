'use strict';

var app = angular.module('kent.app', ['ngResource', 'ui.router', 'oc.lazyLoad']);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
}]);


// app.run(['$state', '$location', '$rootScope', function($state, $location, $rootScope) {
//     $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
//     });

//     $rootScope.$on('$stateChangeSuccess', function() {
//     });
// }]);

// Bootstraps app
angular.element(document).ready(function() {
    angular.bootstrap(document, ['kent.app']);
});