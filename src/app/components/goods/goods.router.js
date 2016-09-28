'use strict';

angular
    .module('app.components.goods')
    .config(goodsRouter);

let goodsResolve = (GoodsAPI) => {
    return GoodsAPI.goods;
};
goodsResolve.$inject = ['GoodsAPI'];

let goodsListResolve = {
    goods: goodsResolve
};

goodsRouter.$inject = ['$stateProvider'];
function goodsRouter($stateProvider) {
    $stateProvider
        .state('app.goods', {
            abstract: true,
            url: '/goods',
            template: '<ui-view></ui-view>'
        })
        .state('app.goods.list', {
            url: '/list',
            template: '<goods-list goods="$resolve.goods"></goods-list>',
            resolve: goodsListResolve
        });
}
