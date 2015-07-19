'use strict';

angular.module('lsb.services', [])
    .value('version', '1.0')
    .value('apiUrl', apiUrl)
    .factory('dashboardServices', ['$resource', function ($resource) {
        return $resource(apiUrl + '/dashboard/:id',
            {},
            {
                'get': {method: 'GET'},
                'getList': {method: 'GET', isArray: true}
            }
        );
    }])
    .factory('chatsServices', ['$resource', function ($resource) {
        return $resource(apiUrl + '/chats/:id',
            {},
            {
                'get': {method: 'GET'},
                'getList': {method: 'GET', isArray: true}
            }
        );
    }])
    .factory('messagesServices', ['$resource', function ($resource) {
        return $resource(apiUrl + '/messages/:id',
            {},
            {
                'get': {method: 'GET'},
                'getList': {method: 'GET', isArray: true}
            }
        );
    }])
    .factory('loginServices', ['$resource', function ($resource) {
        return $resource(apiUrl + '/login/:id',
            {},
            {
                'get': {method: 'GET'},
                'getList': {method: 'GET', isArray: true},
                'post': {method: 'POST'},
                'put': {method: 'PUT'}
            }
        );
    }])
;
