var wms_layers = [];

var lyr_OrtofotografaColordeAndalucaAo2016_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ideandalucia.es/wms/ortofoto2016",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofotografia_2016_rgb",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofotografía Color de Andalucía (Año 2016)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotografaColordeAndalucaAo2016_0, 0]);
var format_07_02_NucleosUrbanos_pol_1 = new ol.format.GeoJSON();
var features_07_02_NucleosUrbanos_pol_1 = format_07_02_NucleosUrbanos_pol_1.readFeatures(json_07_02_NucleosUrbanos_pol_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07_02_NucleosUrbanos_pol_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_02_NucleosUrbanos_pol_1.addFeatures(features_07_02_NucleosUrbanos_pol_1);
var lyr_07_02_NucleosUrbanos_pol_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_07_02_NucleosUrbanos_pol_1, 
                style: style_07_02_NucleosUrbanos_pol_1,
                interactive: true,
                title: '<img src="styles/legend/07_02_NucleosUrbanos_pol_1.png" /> 07_02_NucleosUrbanos_pol'
            });
var format_09_22_ViasPecuarias_2 = new ol.format.GeoJSON();
var features_09_22_ViasPecuarias_2 = format_09_22_ViasPecuarias_2.readFeatures(json_09_22_ViasPecuarias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_09_22_ViasPecuarias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09_22_ViasPecuarias_2.addFeatures(features_09_22_ViasPecuarias_2);
var lyr_09_22_ViasPecuarias_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_09_22_ViasPecuarias_2, 
                style: style_09_22_ViasPecuarias_2,
                interactive: true,
                title: '<img src="styles/legend/09_22_ViasPecuarias_2.png" /> 09_22_ViasPecuarias'
            });
var lyr_Gasoductos_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.agenciaandaluzadelaenergia.es/mapwms/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "MIEA:cGasoductos",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Gasoductos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Gasoductos_3, 0]);
var format_ejeLANTEJUELADXFentities_4 = new ol.format.GeoJSON();
var features_ejeLANTEJUELADXFentities_4 = format_ejeLANTEJUELADXFentities_4.readFeatures(json_ejeLANTEJUELADXFentities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ejeLANTEJUELADXFentities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejeLANTEJUELADXFentities_4.addFeatures(features_ejeLANTEJUELADXFentities_4);
var lyr_ejeLANTEJUELADXFentities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejeLANTEJUELADXFentities_4, 
                style: style_ejeLANTEJUELADXFentities_4,
                interactive: true,
                title: '<img src="styles/legend/ejeLANTEJUELADXFentities_4.png" /> eje LANTEJUELA DXF entities'
            });
var format_ejeLANTEJUELApecalizadoDXFentities_5 = new ol.format.GeoJSON();
var features_ejeLANTEJUELApecalizadoDXFentities_5 = format_ejeLANTEJUELApecalizadoDXFentities_5.readFeatures(json_ejeLANTEJUELApecalizadoDXFentities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ejeLANTEJUELApecalizadoDXFentities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejeLANTEJUELApecalizadoDXFentities_5.addFeatures(features_ejeLANTEJUELApecalizadoDXFentities_5);
var lyr_ejeLANTEJUELApecalizadoDXFentities_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejeLANTEJUELApecalizadoDXFentities_5, 
                style: style_ejeLANTEJUELApecalizadoDXFentities_5,
                interactive: true,
                title: '<img src="styles/legend/ejeLANTEJUELApecalizadoDXFentities_5.png" /> eje LANTEJUELA pecalizado DXF entities'
            });
var format_ejeLANTEJUELApecalizadoDXFentities_6 = new ol.format.GeoJSON();
var features_ejeLANTEJUELApecalizadoDXFentities_6 = format_ejeLANTEJUELApecalizadoDXFentities_6.readFeatures(json_ejeLANTEJUELApecalizadoDXFentities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ejeLANTEJUELApecalizadoDXFentities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ejeLANTEJUELApecalizadoDXFentities_6.addFeatures(features_ejeLANTEJUELApecalizadoDXFentities_6);
var lyr_ejeLANTEJUELApecalizadoDXFentities_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ejeLANTEJUELApecalizadoDXFentities_6, 
                style: style_ejeLANTEJUELApecalizadoDXFentities_6,
                interactive: true,
                title: '<img src="styles/legend/ejeLANTEJUELApecalizadoDXFentities_6.png" /> eje LANTEJUELA pecalizado DXF entities'
            });

lyr_OrtofotografaColordeAndalucaAo2016_0.setVisible(true);lyr_07_02_NucleosUrbanos_pol_1.setVisible(true);lyr_09_22_ViasPecuarias_2.setVisible(true);lyr_Gasoductos_3.setVisible(true);lyr_ejeLANTEJUELADXFentities_4.setVisible(true);lyr_ejeLANTEJUELApecalizadoDXFentities_5.setVisible(true);lyr_ejeLANTEJUELApecalizadoDXFentities_6.setVisible(true);
var layersList = [lyr_OrtofotografaColordeAndalucaAo2016_0,lyr_07_02_NucleosUrbanos_pol_1,lyr_09_22_ViasPecuarias_2,lyr_Gasoductos_3,lyr_ejeLANTEJUELADXFentities_4,lyr_ejeLANTEJUELApecalizadoDXFentities_5,lyr_ejeLANTEJUELApecalizadoDXFentities_6];
lyr_07_02_NucleosUrbanos_pol_1.set('fieldAliases', {'codigo_nd': 'codigo_nd', 'cod_pob': 'cod_pob', 'nombre_pob': 'nombre_pob', 'nivel': 'nivel', 'estado': 'estado', });
lyr_09_22_ViasPecuarias_2.set('fieldAliases', {'id': 'id', 'codigo': 'codigo', 'nombre': 'nombre', 'tipo': 'tipo', 'subtipo': 'subtipo', });
lyr_ejeLANTEJUELADXFentities_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ejeLANTEJUELApecalizadoDXFentities_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ejeLANTEJUELApecalizadoDXFentities_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_07_02_NucleosUrbanos_pol_1.set('fieldImages', {'codigo_nd': 'TextEdit', 'cod_pob': 'TextEdit', 'nombre_pob': 'TextEdit', 'nivel': 'TextEdit', 'estado': 'TextEdit', });
lyr_09_22_ViasPecuarias_2.set('fieldImages', {'id': 'TextEdit', 'codigo': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'subtipo': 'TextEdit', });
lyr_ejeLANTEJUELADXFentities_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ejeLANTEJUELApecalizadoDXFentities_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ejeLANTEJUELApecalizadoDXFentities_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_07_02_NucleosUrbanos_pol_1.set('fieldLabels', {'codigo_nd': 'no label', 'cod_pob': 'no label', 'nombre_pob': 'inline label', 'nivel': 'no label', 'estado': 'no label', });
lyr_09_22_ViasPecuarias_2.set('fieldLabels', {'id': 'no label', 'codigo': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'subtipo': 'no label', });
lyr_ejeLANTEJUELADXFentities_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejeLANTEJUELApecalizadoDXFentities_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejeLANTEJUELApecalizadoDXFentities_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ejeLANTEJUELApecalizadoDXFentities_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});