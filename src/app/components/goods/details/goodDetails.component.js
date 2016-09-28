'use strict';

angular
    .module('app.components.goods.details')
    .component('goodDetails', {
        bindings: {
            resolve: '<'
        },
        templateUrl: 'tmpls/goodDetails.tmpl.html',
        controller: 'GoodDetailsController',
        controllerAs: 'vm'
    });
