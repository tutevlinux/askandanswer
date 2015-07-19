'use strict';

angular.module('lsb', [
    'lsb.services',
    'lsb.controllers',
    'ngRoute',
    'ngResource',
    'ngCookies'
])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/partials/index.html',
                controller: 'Index'
            });
        $routeProvider
            .when('/uye-ol', {
                templateUrl: '/partials/uye-ol.html',
                controller: 'UyeOl'
            });
        $routeProvider
            .when('/giris-yap', {
                templateUrl: '/partials/giris-yap.html',
                controller: 'GirisYap'
            });
        $routeProvider
            .when('/soru-oner', {
                templateUrl: '/partials/soru-oner.html',
                controller: 'SoruOner'
            });
        $routeProvider
            .when('/puan-tablosu', {
                templateUrl: '/partials/puan-tablosu.html',
                controller: 'PuanTablosu'
            });
        $routeProvider
            .when('/iletisim', {
                templateUrl: '/partials/iletisim.html',
                controller: 'Iletisim'
            });

        $routeProvider
            .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }])