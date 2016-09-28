'use strict';

class ModalErrorController {
    constructor($uibModalInstance, message) {
        this._$uibModalInstance = $uibModalInstance;
        this.message = message;
    }

    ok() {
        this._$uibModalInstance.close();
    }

    static create($uibModalInstance, message) {
        return new ModalErrorController($uibModalInstance, message);
    }
}
ModalErrorController.create.$inject = ['$uibModalInstance', 'message'];

angular
    .module('app.shared')
    .controller('ModalErrorController', ModalErrorController.create);
