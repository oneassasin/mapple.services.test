'use strict';

angular
    .module('app.components.toolbar')
    .component('toolbar', {
        'templateUrl': 'tmpls/toolbar.tmpl.html',
        'controller': 'ToolbarController',
        'controllerAs': 'vm'
    });
