'use strict';

class CoreController {
    constructor(AuthService) {
        this._AuthService = AuthService;
    }

    static create(AuthService) {
        CoreController.instance = new CoreController(AuthService);
        return CoreController.instance;
    }
}
CoreController.$inject = ['ModalErrorService'];

angular
    .module('app.components.core')
    .controller('CoreController', CoreController.create);
