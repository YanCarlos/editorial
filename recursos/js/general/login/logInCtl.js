"use strict";

/*El use strict hace que se deba codificar de manera correcta, siendo estricto
 * a la hora de compilar el codigo ejemplo: 
 * x = 3.14; // This will cause an error (x is not defined)*/


/* global app */

/*Toda funcion de controlador debe tener un $scope, que es la referencia a todos
 * los elementos que pertenecen al constrolador*/
/*app.controller(nombre de la funcion)  ($scope, nombre de los servicios a utilizar)*/
/*$windows servicio por defecto para poder utilizar refresco de pagina y redireccionamiento*/
/*logInService, nombre del servicio que contiene la promesa. */
app.controller('CtlLogIn', function ($scope, $window, logInService) {

    /*Se inicializa el modelo*/
    $scope.identificacion = "";

    /*Se define una funcion en el controlador*/
    $scope.logIn = function (form) {
        /*Al ser el servicio la llamada por http (funcion asincrona) toca definir
         * promesas con el "then", que se ejecuta unicamente cuando se le retorna
         * un valor valido. Este se ejecuta unicamente cuando el llamado http 
         * consume el REST ("REST" es un paradigma, mientras"RESTful" describe el 
         * uso de ese paradigma*/

        /*Si el formulario esta bien validado*/
        if (form) {
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            logInService.logIn($scope.identificacion).then(function (response) {
                /*El resultado de la promesa se recibe por parametro*/
                if (response.length > 0) {
                    /*Se almacena en una variable de session los datos*/
                    sessionStorage.setItem("usersession", response.user);
                    sessionStorage.setItem("sesion", response.status);

                    /*Redirecciona la pagina*/
                    alert(response[0].rol);
                    if (response[0].rol === "CLIENTE") {
                        $window.location.href = "masterPageCliente.html";
                    } else if (response[0].rol === "ADMINISTRADOR") {
                        $window.location.href = "masterPageAdmin.html";
                    } else if (response[0].rol === "GERENTE") {
                        $window.location.href = "masterPageGerente.html";
                    } else if (response[0].rol === "ASESOR") {
                        $window.location.href = "masterPageAsesor.html";
                    } else if (response[0].rol === "CAJERO") {
                        $window.location.href = "masterPageCajero.html";
                    }

                } else {
                    alert("Usuario o contrasena incorrectos");
                    /*Solo con limpiar el objeto se limpian todos los input 
                     * asociados*/
                    $scope.identificacion = "";
                }
            });
        } else {
            alert("Verifique los datos ingresados");
        }
    };

    $scope.registrar = function (form) {
        /*Si el formulario esta bien validado*/
        if (form) {
            /*Se ejecuta la funcion mandando por parametro el objeto identificacion, 
             * el cual esta asociado a los input*/
            logInService.registrar($scope.registro).then(function (response) {
                /*El resultado de la promes se recibe por parametro*/
                if (response.status === "true") {
                    alert("Se registró con éxito");
                    $("#login-form").delay(100).fadeIn(100);
                    $("#register-form").fadeOut(100);
                    $('#register-form-link').removeClass('active');
                    $('#login-form-link').addClass('active');
                } else {
                    alert("Cedula o Usuario ya existe");
                }
            });
        } else {
            alert("Verifique los datos ingresados");
        }
    };


    /*Se define una funcion para agregar*/
    $scope.logOut = function () {
        /*Se eliminan las variables de sesion*/
        sessionStorage.clear();
        /*Redirecciona*/
        $window.location.href = 'index.html';
    };

});






