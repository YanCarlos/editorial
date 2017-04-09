"use strict";

app.controller('CtlUsuario', function ($scope, $window, usuarioService){

	$scope.usuario = {};	

	$scope.buscar = function () {
		var usuario = sessionStorage.getItem("user");
		usuarioService.buscar(usuario).then(function(response){
			if(response.length > 0){
				response[0].telefono = parseInt(response[0].telefono);
				$scope.usuario = response[0];
			}else{
				alert("El usuario no existe");
			}
		});
	};

	$scope.editar = function (form){
		if(form){
			usuarioService.editar($scope.usuario).then(function(response){
				if(response.status){

				}else{
					alert("No se pudo editar");
				}
			});	
		}else{
			alert("Diligencie todos los tados");
		}
		
	};

});