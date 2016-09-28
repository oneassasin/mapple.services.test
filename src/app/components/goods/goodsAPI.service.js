'use strict';

class GoodsAPI {
    constructor($q, $http) {
        this._$q = $q;
        this._$http = $http;
    }

    get goods() {
        return this._$http({
            url: 'https://raw.githubusercontent.com/oneassasin/mapple.services.test/master/data/goods.json'
        }).then((response) => {
            return this._$q.when(response.data);
        });
    }
}
GoodsAPI.$inject = ['$q', '$http'];

angular
    .module('app.components.goods')
    .service('GoodsAPI', GoodsAPI);
