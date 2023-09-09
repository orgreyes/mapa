import Swal from "sweetalert2";
import { Toast } from "../funciones";
import L from "leaflet";

const btnActualizar = document.getElementById("btnActualizar");

const map = L.map('mapa', {
    center: [0, 0], 
    zoom: 2, 
    minZoom: 2, 
    maxZoom: 10,
});

map.on('resize', function () {
    map.invalidateSize();
});

const mapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10, 
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markerLayer = L.layerGroup();
const icono = L.icon({
    iconUrl: './images/ubicacion.png',
    iconSize: [35, 35]
});

L.circle([15.52, -90.32], { radius: 5000 }).addTo(markerLayer);

markerLayer.addTo(map);

const buscar = async () => {
    const url = `/mapa/API/mapa/buscar`;
    const config = {
        method: 'GET'
    };

    try {
        const respuesta = await fetch(url, config);
        const data = await respuesta.json();

        console.log(data);

        if (data && data.length > 0) {
            data.forEach(registro => {
                const latitud = parseFloat(registro.mapa_latitud);
                const longitud = parseFloat(registro.mapa_longitud);

                if (!isNaN(latitud) && !isNaN(longitud)) {
                    const NuevoMarcador = L.marker([latitud, longitud], {
                        icon: icono,
                        draggable: true
                    });

                    const popup = L.popup()
                        .setLatLng([latitud, longitud])
                        .setContent(`<p>Nombre: ${registro.mapa_nombre}</p>`);

                    NuevoMarcador.bindPopup(popup);
                    NuevoMarcador.addTo(markerLayer);
                }
            });
        } else {
            Toast.fire({
                title: 'No se encontraron registros',
                icon: 'info'
            });
        }
    } catch (error) {
        console.error('Error al cargar los datos desde la base de datos:', error);
    }
};

btnActualizar.addEventListener("click", () => {
    Toast.fire({
        title: 'Actualizando datos...',
        icon: 'info',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000
    });
    buscar();
});

btnActualizar.click();
