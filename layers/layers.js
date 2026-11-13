ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([789003.687500, 9236277.000000, 789384.500000, 9236562.000000]);
var wms_layers = [];

var lyr_Citra_Kajian_modified_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Citra_Kajian_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Citra_Kajian_modified_0.png",
            attributions: ' ',
            projection: 'EPSG:32748',
            alwaysInRange: true,
            imageExtent: [788960.622672, 9236265.405681, 789393.099742, 9236575.042104]
        })
    });
var format_bangunan_1 = new ol.format.GeoJSON();
var features_bangunan_1 = format_bangunan_1.readFeatures(json_bangunan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_bangunan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_1.addFeatures(features_bangunan_1);
var lyr_bangunan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunan_1, 
                style: style_bangunan_1,
                popuplayertitle: 'bangunan',
                interactive: true,
                title: '<img src="styles/legend/bangunan_1.png" /> bangunan'
            });
var format_fasilitas_2 = new ol.format.GeoJSON();
var features_fasilitas_2 = format_fasilitas_2.readFeatures(json_fasilitas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_fasilitas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_2.addFeatures(features_fasilitas_2);
var lyr_fasilitas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitas_2, 
                style: style_fasilitas_2,
                popuplayertitle: 'fasilitas',
                interactive: true,
                title: '<img src="styles/legend/fasilitas_2.png" /> fasilitas'
            });
var format_jalan_3 = new ol.format.GeoJSON();
var features_jalan_3 = format_jalan_3.readFeatures(json_jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_3.addFeatures(features_jalan_3);
var lyr_jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_3, 
                style: style_jalan_3,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_3.png" /> jalan'
            });

lyr_Citra_Kajian_modified_0.setVisible(true);lyr_bangunan_1.setVisible(true);lyr_fasilitas_2.setVisible(true);lyr_jalan_3.setVisible(true);
var layersList = [lyr_Citra_Kajian_modified_0,lyr_bangunan_1,lyr_fasilitas_2,lyr_jalan_3];
lyr_bangunan_1.set('fieldAliases', {'fid': 'fid', 'nama_bangunan': 'nama_bangunan', 'fungsi_bangunan': 'fungsi_bangunan', 'luas_m2': 'luas_m2', });
lyr_fasilitas_2.set('fieldAliases', {'fid': 'fid', 'nama_fasilitas': 'nama_fasilitas', 'fungsi_fasiitas': 'fungsi_fasiitas', });
lyr_jalan_3.set('fieldAliases', {'fid': 'fid', 'nama_jalan': 'nama_jalan', 'panjang_m': 'panjang_m', });
lyr_bangunan_1.set('fieldImages', {'fid': 'TextEdit', 'nama_bangunan': 'TextEdit', 'fungsi_bangunan': 'TextEdit', 'luas_m2': 'TextEdit', });
lyr_fasilitas_2.set('fieldImages', {'fid': 'TextEdit', 'nama_fasilitas': 'TextEdit', 'fungsi_fasiitas': 'TextEdit', });
lyr_jalan_3.set('fieldImages', {'fid': 'TextEdit', 'nama_jalan': 'TextEdit', 'panjang_m': 'TextEdit', });
lyr_bangunan_1.set('fieldLabels', {'fid': 'no label', 'nama_bangunan': 'header label - always visible', 'fungsi_bangunan': 'inline label - visible with data', 'luas_m2': 'inline label - visible with data', });
lyr_fasilitas_2.set('fieldLabels', {'fid': 'no label', 'nama_fasilitas': 'header label - always visible', 'fungsi_fasiitas': 'inline label - visible with data', });
lyr_jalan_3.set('fieldLabels', {'fid': 'no label', 'nama_jalan': 'header label - always visible', 'panjang_m': 'inline label - visible with data', });
lyr_jalan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});