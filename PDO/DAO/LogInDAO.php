<?php

class LoginDAO {

    private $repository;

    function LoginDAO() {
        require_once '../Infraestructure/Repository.php';
        $this->repository = new Repository();
    }

    function ingresar(LogIn $obj) {
        $query = "SELECT id,nombre,apellido,tipo_usuario_id "
                . "from tb_usuarios "
                . "where email='" . $obj->getEmail() . "' AND password='" . $obj->getPassword() . "'";        
        $this->repository->Execute($query);        
    }
    
    function registrar(Usuario $obj){
        $query = "INSERT INTO tb_usuarios (email,password,estado,nombre,apellido,telefono,direccion,tipo_usuario_id) 
                VALUES ('".$obj->getEmail()."',". "'".$obj->getPassword()."',0,'".$obj->getNombre()
                ."','".$obj->getApellido()."','".$obj->getTelefono()."','".$obj->getDireccion()."',"
                .$obj->getTipoUsuario()."); ";
        $this->repository->ExecuteTransaction($query);
    }

}

?>
