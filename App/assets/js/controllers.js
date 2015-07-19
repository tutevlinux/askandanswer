'use strict';

angular.module('lsb.controllers', [])
    .controller('GirisYap', ['$scope', '$rootScope', 'userServices', '$cookies', '$location', function ($scope, $rootScope, userServices, $cookies, $location) {
        $rootScope.menu = 'Giriş Yap';
        $scope.user = {
            username: '',
            password: ''
        };

        //Giriş Yapılıp Yapılmadığını Kontrol Et
        var key = $cookies.get('key');
        if(key){
            userServices.get({key: key}, function (d) {
                if(d.status == true){
                    $location.url("/");
                }else{
                    $cookies.remove('key');
                }
            });
        }

        //Login Fonksiyonu
        $scope.login = function () {
            event.preventDefault();
            userServices.put({id: 1}, $scope.user, function (d) {
                if(d.status == true){
                    $cookies.put('key', d.key);
                    $location.url("/");
                }
            });
        };
    }])
    .controller('Index', ['$scope', '$rootScope', 'userServices', '$cookies', '$location', function ($scope, $rootScope, userServices, $cookies, $location) {
        $rootScope.menu = 'Anasayfa';

        //Giriş Yapılıp Yapılmadığını Kontrol Et
        var key = $cookies.get('key');
        if(key){
            userServices.get({key: key}, function (d) {
                if(d.status != true){
                    $cookies.remove('key');
                }
            });
        }
    }])
    .controller('UyeOl', ['$scope', '$rootScope', 'userServices', '$cookies', '$location', function ($scope, $rootScope, userServices, $cookies, $location) {
        $rootScope.menu = 'Üye Ol';

        //Giriş Yapılıp Yapılmadığını Kontrol Et
        var key = $cookies.get('key');
        if(key){
            userServices.get({key: key}, function (d) {
                if(d.status != true){
                    $cookies.remove('key');
                }
            });
        }
    }])
    .controller('SoruOner', ['$scope', '$rootScope', 'userServices', '$cookies', '$location', function ($scope, $rootScope, userServices, $cookies, $location) {
        $rootScope.menu = 'Soru Öner';

        //Giriş Yapılıp Yapılmadığını Kontrol Et
        var key = $cookies.get('key');
        if(key){
            userServices.get({key: key}, function (d) {
                if(d.status != true){
                    $cookies.remove('key');
                }
            });
        }
    }])
    .controller('PuanTablosu', ['$scope', '$rootScope', 'userServices', '$cookies', '$location', function ($scope, $rootScope, userServices, $cookies, $location) {
        $rootScope.menu = 'Puan Tablosu';

        //Giriş Yapılıp Yapılmadığını Kontrol Et
        var key = $cookies.get('key');
        if(key){
            userServices.get({key: key}, function (d) {
                if(d.status != true){
                    $cookies.remove('key');
                }
            });
        }
    }])
    .controller('Iletisim', ['$scope', '$rootScope', 'userServices', '$cookies', '$location', function ($scope, $rootScope, userServices, $cookies, $location) {
        $rootScope.menu = 'İletişim';

        //Giriş Yapılıp Yapılmadığını Kontrol Et
        var key = $cookies.get('key');
        if(key){
            userServices.get({key: key}, function (d) {
                if(d.status != true){
                    $cookies.remove('key');
                }
            });
        }
    }])
    .controller('Logout', ['$scope', '$cookies', '$location', function ($scope, $cookies, $location) {
        $scope.logout = function () {
            $cookies.remove('key');
            $location.url('/login');
        };
    }])
;
