'use strict';

angular
    .module('app.shared')
    .run(authCheck);

authCheck.$inject = ['$rootScope', '$state', 'AuthService'];
function authCheck($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', (e, toState, toParams, fromState) => {
        if (fromState.name.trim() === '') {
            return;
        }
        if (toState.name === 'app.sign.signIn') {
            if (AuthService.currentUserSync !== null) {
                e.preventDefault();
                $state.go('app.goods.list');
                return;
            }
            return;
        }
        if (AuthService.currentUserSync === null) {
            e.preventDefault();
            $state.go('app.sign.signIn');
        }
    });
}
