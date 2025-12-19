var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CuencaGualichosinprocesamiento_2 = new ol.format.GeoJSON();
var features_CuencaGualichosinprocesamiento_2 = format_CuencaGualichosinprocesamiento_2.readFeatures(json_CuencaGualichosinprocesamiento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencaGualichosinprocesamiento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencaGualichosinprocesamiento_2.addFeatures(features_CuencaGualichosinprocesamiento_2);
var lyr_CuencaGualichosinprocesamiento_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencaGualichosinprocesamiento_2, 
                style: style_CuencaGualichosinprocesamiento_2,
                popuplayertitle: 'Cuenca Gualicho sin procesamiento',
                interactive: true,
                title: '<img src="styles/legend/CuencaGualichosinprocesamiento_2.png" /> Cuenca Gualicho sin procesamiento'
            });
var format_lineas_de_aguas_continentales_perenne_3 = new ol.format.GeoJSON();
var features_lineas_de_aguas_continentales_perenne_3 = format_lineas_de_aguas_continentales_perenne_3.readFeatures(json_lineas_de_aguas_continentales_perenne_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lineas_de_aguas_continentales_perenne_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lineas_de_aguas_continentales_perenne_3.addFeatures(features_lineas_de_aguas_continentales_perenne_3);
var lyr_lineas_de_aguas_continentales_perenne_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lineas_de_aguas_continentales_perenne_3, 
                style: style_lineas_de_aguas_continentales_perenne_3,
                popuplayertitle: 'lineas_de_aguas_continentales_perenne',
                interactive: true,
                title: '<img src="styles/legend/lineas_de_aguas_continentales_perenne_3.png" /> lineas_de_aguas_continentales_perenne'
            });
var format_Estaciones_Pluviometricas_BDHazul_4 = new ol.format.GeoJSON();
var features_Estaciones_Pluviometricas_BDHazul_4 = format_Estaciones_Pluviometricas_BDHazul_4.readFeatures(json_Estaciones_Pluviometricas_BDHazul_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_Pluviometricas_BDHazul_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_Pluviometricas_BDHazul_4.addFeatures(features_Estaciones_Pluviometricas_BDHazul_4);
var lyr_Estaciones_Pluviometricas_BDHazul_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_Pluviometricas_BDHazul_4, 
                style: style_Estaciones_Pluviometricas_BDHazul_4,
                popuplayertitle: 'Estaciones_Pluviometricas_BDHazul',
                interactive: true,
                title: '<img src="styles/legend/Estaciones_Pluviometricas_BDHazul_4.png" /> Estaciones_Pluviometricas_BDHazul'
            });
var format_CuencaGUALICHOconprocesamientoraster_5 = new ol.format.GeoJSON();
var features_CuencaGUALICHOconprocesamientoraster_5 = format_CuencaGUALICHOconprocesamientoraster_5.readFeatures(json_CuencaGUALICHOconprocesamientoraster_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencaGUALICHOconprocesamientoraster_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencaGUALICHOconprocesamientoraster_5.addFeatures(features_CuencaGUALICHOconprocesamientoraster_5);
var lyr_CuencaGUALICHOconprocesamientoraster_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencaGUALICHOconprocesamientoraster_5, 
                style: style_CuencaGUALICHOconprocesamientoraster_5,
                popuplayertitle: 'Cuenca GUALICHO con procesamiento raster',
                interactive: true,
                title: '<img src="styles/legend/CuencaGUALICHOconprocesamientoraster_5.png" /> Cuenca GUALICHO con procesamiento raster'
            });
var format_UbicacionGualicho_6 = new ol.format.GeoJSON();
var features_UbicacionGualicho_6 = format_UbicacionGualicho_6.readFeatures(json_UbicacionGualicho_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UbicacionGualicho_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UbicacionGualicho_6.addFeatures(features_UbicacionGualicho_6);
var lyr_UbicacionGualicho_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UbicacionGualicho_6, 
                style: style_UbicacionGualicho_6,
                popuplayertitle: 'Ubicacion-Gualicho',
                interactive: true,
                title: '<img src="styles/legend/UbicacionGualicho_6.png" /> Ubicacion-Gualicho'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_CuencaGualichosinprocesamiento_2.setVisible(true);lyr_lineas_de_aguas_continentales_perenne_3.setVisible(true);lyr_Estaciones_Pluviometricas_BDHazul_4.setVisible(true);lyr_CuencaGUALICHOconprocesamientoraster_5.setVisible(true);lyr_UbicacionGualicho_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_CuencaGualichosinprocesamiento_2,lyr_lineas_de_aguas_continentales_perenne_3,lyr_Estaciones_Pluviometricas_BDHazul_4,lyr_CuencaGUALICHOconprocesamientoraster_5,lyr_UbicacionGualicho_6];
lyr_CuencaGualichosinprocesamiento_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Area [Ha]': 'Area [Ha]', });
lyr_lineas_de_aguas_continentales_perenne_3.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'sag': 'sag', });
lyr_Estaciones_Pluviometricas_BDHazul_4.set('fieldAliases', {'Tipo': 'Tipo', 'Nombre': 'Nombre', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Altitud': 'Altitud', });
lyr_CuencaGUALICHOconprocesamientoraster_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_UbicacionGualicho_6.set('fieldAliases', {'Nombre': 'Nombre', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_CuencaGualichosinprocesamiento_2.set('fieldImages', {'fid': '', 'DN': '', 'Area [Ha]': '', });
lyr_lineas_de_aguas_continentales_perenne_3.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'sag': '', });
lyr_Estaciones_Pluviometricas_BDHazul_4.set('fieldImages', {'Tipo': '', 'Nombre': '', 'Latitud': '', 'Longitud': '', 'Altitud': '', });
lyr_CuencaGUALICHOconprocesamientoraster_5.set('fieldImages', {'fid': '', 'DN': '', });
lyr_UbicacionGualicho_6.set('fieldImages', {'Nombre': '', 'Latitud': '', 'Longitud': '', });
lyr_CuencaGualichosinprocesamiento_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Area [Ha]': 'no label', });
lyr_lineas_de_aguas_continentales_perenne_3.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'sag': 'no label', });
lyr_Estaciones_Pluviometricas_BDHazul_4.set('fieldLabels', {'Tipo': 'no label', 'Nombre': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Altitud': 'no label', });
lyr_CuencaGUALICHOconprocesamientoraster_5.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_UbicacionGualicho_6.set('fieldLabels', {'Nombre': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_UbicacionGualicho_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});