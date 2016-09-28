'use strict';

class SignInController {
    constructor($state, AuthService, ModalErrorService) {
        this._$state = $state;
        this._AuthService = AuthService;
        this._ModalErrorService = ModalErrorService;
        this.signInModel = {};
        this.newSignInFields = [{
            key: 'login',
            type: 'input',
            templateOptions: {
                required: true,
                type: 'text',
                label: 'Login'
            }
        }, {
            key: 'password',
            type: 'input',
            templateOptions: {
                required: true,
                type: 'password',
                label: 'Password'
            }
        }];
    }

    signIn() {
        this._AuthService
            .signIn(this.signInModel)
            .then(() => {
                this._$state.go('app.goods.list');
            })
            .catch((error) => {
                this._ModalErrorService.showError(error.message);
            });
    }

    static create($state, AuthService, ModalErrorService) {
        SignInController.instance = new SignInController($state, AuthService, ModalErrorService);
        return SignInController.instance;
    }
}
SignInController.create.$inject = ['$state', 'AuthService', 'ModalErrorService'];

angular
    .module('app.components.sign.signIn')
    .controller('SignInController', SignInController.create);
