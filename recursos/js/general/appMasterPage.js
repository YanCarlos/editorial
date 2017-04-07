"use strict";
/*Se definen las depenciencias que seran utilizadas por el sistema*/
var app = angular.module("appMasterPage", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'inicio.html'
            })
            .when('/banco', {
                controller: 'CtlBanco',
                templateUrl: 'banco.html'
            })
            .when('/cargos', {
                controller: 'CtlCargos',
                templateUrl: 'cargos.html'
            })
            .when('/pais', {
                controller: 'CtlPais',
                templateUrl: 'vista/admin/pais.html'
            })
            .when('/departamento', {
                controller: 'CtlDepartamento',
                templateUrl: 'vista/admin/departamento.html'
            })
            .when('/municipio', {
                controller: 'CtlMunicipio',
                templateUrl: 'vista/admin/municipio.html'
            })
            .when('/costos', {
                controller: 'CtlCostos',
                templateUrl: 'vista/admin/costos.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});

/*Controlador global, que cada vez que se cargue la pagina masterPage 
 * valida si ya inicio sesion para saber si se deja o se redirecciona 
 * al index*/
app.controller('CtlValidate', function ($scope, $window) {
    /*Se almacena en el modelo sesion, este es utilizado por el ng-show 
     * para saber si muestra o no la interfaz grafica*/

    $scope.sesion = sessionStorage.getItem("sesion");

    /*Luego se valida para saber si se redirecciona o no*/
    if (!$scope.sesion) {
        $window.location.href = 'index.html';
    }
});




/*PARA CONTROLAR UN MASTER PAGE, EN ESTA SECCION SE DEBERIA */