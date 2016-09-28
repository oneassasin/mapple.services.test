'use strict';

class ToolbarController {
    constructor($scope, AuthService) {
        this._AuthService = AuthService;
        this._tabs = [{
            name: 'Goods',
            state: 'app.goods.list'
        }];
        this.currentUser = this._AuthService.currentUserSync;
        $scope.$watch(() => {
            return AuthService.currentUserSync;
        }, (currentUser) => {
            this.currentUser = currentUser;
        });
    }

    signOut() {
        this._AuthService.signOut();
    }

    static create($scope, AuthService) {
        ToolbarController.instance = new ToolbarController($scope, AuthService);
        return ToolbarController.instance;
    }
}
ToolbarController.$inject = ['$scope', 'AuthService'];

angular
    .module('app.components.toolbar')
    .controller('ToolbarController', ToolbarController.create);
