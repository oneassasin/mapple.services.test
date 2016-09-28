'use strict';

angular
    .module('app')
    .config(appRouter);

appRouter.$inject = ['$stateProvider'];
function appRouter($stateProvider) {
    $stateProvider
        .state('app', {
            template: '<core></core>'
        });
}
