"use strict";

/*El use strict hace que se deba codificar de manera correcta, siendo estricto
 * a la hora de compilar el codigo ejemplo: 
 * x = 3.14; // This will cause an error (x is not defined)*/

/*Se definen las depenciencias que seran utilizadas por el sistema, son varias
* se separan asi: ['ngRoute', 'ngCookies', 'xxxxx']*/
var app = angular.module("appPrincipal", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'vista/autor/articulo.html'
    })
    .when('/editarperfil', {
        templateUrl: 'vista/compartido/editarperfil.html'
    })
    .when('/registroeditor', {
        templateUrl: 'vista/admin/registroeditor.html'
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

app.constant('TIPOSUSUARIO',{
   AUTOR: 'AUTOR',
   SUPERVISOR: 'SUPERVISOR',
   EDITOR: 'EDITOR'
});
