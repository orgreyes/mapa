<?php

namespace Controllers;

use MVC\Router;
use Model\Mapa;

class MapaController {
    public static function index(Router $router){
        $router->render('mapa/index', []);
    }


    public static function buscarAPI(){
        $mapa_nombre = $_GET['mapa_nombre'] ?? '';
        $sql = "SELECT * FROM mapas WHERE mapa_situacion = '1'";
    
        try {
            $mapas = Mapa::fetchArray($sql); 
            echo json_encode($mapas);
        } catch (Exception $e) {
            echo json_encode([
                'detalle' => $e->getMessage(),
                'mensaje' => 'Ocurrió un error',
                'codigo' => 0
            ]);
        }
    }

}