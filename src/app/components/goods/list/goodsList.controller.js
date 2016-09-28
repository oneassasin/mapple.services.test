'use strict';

class GoodsListController {
    constructor(goods, $uibModal) {
        this._goods = goods;
        this._$uibModal = $uibModal;
    }

    showDetails(good) {
        this._$uibModal.open({
            component: 'goodDetails',
            resolve: {
                good: () => {
                    return good;
                }
            }
        });
    }

    static create($uibModal) {
        GoodsListController.instance = new GoodsListController(this.goods, $uibModal);
        return GoodsListController.instance;
    }
}
GoodsListController.create.$inject = ['$uibModal'];

angular
    .module('app.components.goods.list')
    .controller('GoodsListController', GoodsListController.create);
