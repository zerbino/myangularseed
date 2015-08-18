'use strict';

// Declare app level module which depends on views, and components
angular.module('SwipeCleaner', ['ui.router', 'ngCookies', 'ui.bootstrap'])
    .config(
    function ($stateProvider, $urlRouterProvider, $httpProvider) {

        //$urlRouterProvider.otherwise('/index')
        //
        //$stateProvider
        //    .state('index', {
        //        url: '/index',
        //        templateUrl: 'app/modules/index.html',
        //        controller: 'IndexCtrl'
        //    })

        $httpProvider.interceptors.push(['$injector', '$rootScope', '$timeout', '$q',function($injector, $rootScope, $timeout, $q) {
            return {
                'responseError': function(response) {
                    if(response.status == 500 && response.data.errorCode == 1){
                        alert('db error')
                    }
                   return $q.reject(response)
                }
            };
        }]);
    }
)
    .run(function () {
    })