<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">
</head>
<body>
    <div class="container">
        <h1>MAPA CON COORDENADAS REGISTRADAS</h1>
        <div class="map-container" id="mapa"></div>
        <button class="btn btn-info btn-sm" id="btnActualizar" name="btnActualizar">ACTUALIZAR</button>
    </div>
    <script src="<?= asset('build/js/mapa/index.js') ?>"></script>
</body>
</html>
