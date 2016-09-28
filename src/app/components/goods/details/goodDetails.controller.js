'use strict';

class GoodDetailsController {
    constructor(good) {
        this._good = good;
    }

    static create() {
        return new GoodDetailsController(this.resolve.good);
    }
}
GoodDetailsController.create.$inject = [];

angular
    .module('app.components.goods.details')
    .controller('GoodDetailsController', GoodDetailsController.create);
