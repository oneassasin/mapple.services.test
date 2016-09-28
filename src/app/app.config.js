'use strict';

angular
    .module('app')
    .config(appConfig)
    .run(appRunner);

appConfig.$inject = ['$locationProvider', '$urlRouterProvider'];
function appConfig($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
}

appRunner.$inject = ['$state'];
function appRunner($state) {
    $state.go('app.sign.signIn');
}
