<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">
</head>
<style>
        .container {
            text-align: center;
            margin-top: 20px;
        }

        .map-container {
            margin-top: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            height: 400px;
            overflow: hidden;
        }

        #btnActualizar {
            background-color: #3498db;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 5px 15px;
            cursor: pointer;
        }
    </style>
<body>
    <div class="container">
        <h1>MAPA CON COORDENADAS REGISTRADAS</h1>
        <div class="map-container" id="mapa"></div>
        <br>
        <button class="btn btn-info btn-sm" id="btnActualizar" name="btnActualizar">ACTUALIZAR</button>
    </div>
    <script src="<?= asset('build/js/mapa/index.js') ?>"></script>
</body>
</html>
