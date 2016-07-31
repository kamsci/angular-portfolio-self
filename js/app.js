var app = angular.module('PortfolioApp', ['ui.router', 'AppCtrls'])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('switchIt', {
    url: '/switchIt',
    templateUrl: 'views/switchIt.html',
    controller: 'SwitchCtrl'
  })

}); // end config

