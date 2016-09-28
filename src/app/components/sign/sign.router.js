'use strict';

angular
    .module('app.components.sign')
    .config(signInRouter);

signInRouter.$inject = ['$stateProvider'];
function signInRouter($stateProvider) {
    $stateProvider
        .state('app.sign', {
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        .state('app.sign.signIn', {
            url: '/signIn',
            template: '<sign-in></sign-in>'
        });
}
