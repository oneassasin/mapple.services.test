'use strict';

class ModalErrorService {
    constructor($uibModal) {
        this._$uibModal = $uibModal;
    }

    showError(message) {
        this._$uibModal.open({
            templateUrl: 'tmpls/modalError.tmpl.html',
            controller: 'ModalErrorController',
            controllerAs: 'vm',
            size: 'sm',
            resolve: {
                message: () => {
                    return message;
                }
            }
        });
    }
}
ModalErrorService.$inject = ['$uibModal'];

angular
    .module('app.shared')
    .service('ModalErrorService', ModalErrorService);

