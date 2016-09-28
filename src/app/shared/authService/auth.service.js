'use strict';

class AuthService {
    constructor($q, $http, $state) {
        this._$q = $q;
        this._$http = $http;
        this._$state = $state;
        this._currentUser = null;
    }

    get currentUser() {
        return this._$q.when(this._currentUser);
    }

    get currentUserSync() {
        return this._currentUser;
    }

    signIn(authData) {
        let {login, password} = authData;
        return this._getJSON()
            .then((data) => {
                return this._$q((resolve, reject) => {
                    angular
                        .forEach(data, (user, index) => {
                            if (login === user.login && password === user.password) {
                                resolve(user);
                            }
                            if (data.length === index + 1) {
                                reject(new Error('User not found.'));
                            }
                        });
                });
            })
            .then((user) => {
                this._currentUser = user;
                return this._$q.when(user);
            });
    }

    _getJSON() {
        return this._$http({
            url: 'https://raw.githubusercontent.com/oneassasin/mapple.services.test/master/data/users.json'
        }).then((response) => {
            return this._$q.when(response.data);
        });
    }

    signOut() {
        this._currentUser = null;
        this._$state.go('app.sign.signIn');
    }
}
AuthService.$inject = ['$q', '$http', '$state'];

angular
    .module('app.shared')
    .service('AuthService', AuthService);

