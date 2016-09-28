'use strict';

angular
    .module('app.components.goods.list')
    .component('goodsList', {
        bindings: {
            goods: '='
        },
        templateUrl: 'tmpls/goodsList.tmpl.html',
        controller: 'GoodsListController',
        controllerAs: 'vm'
    });
