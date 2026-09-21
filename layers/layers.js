var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_MGS_Geology_Map_2014_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MGS_Geology_Map_2014<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MGS_Geology_Map_2014_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [10128110.381554, 1064453.078760, 11404000.061115, 3367963.626341]
        })
    });
var format_GeoRegion_3 = new ol.format.GeoJSON();
var features_GeoRegion_3 = format_GeoRegion_3.readFeatures(json_GeoRegion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoRegion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoRegion_3.addFeatures(features_GeoRegion_3);
var lyr_GeoRegion_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeoRegion_3, 
                style: style_GeoRegion_3,
                popuplayertitle: 'Geo Region',
                interactive: true,
    title: 'Geo Region<br />\
    <img src="styles/legend/GeoRegion_3_0.png" /> b - Mostly Jurassic<br />\
    <img src="styles/legend/GeoRegion_3_1.png" /> D - Devonian<br />\
    <img src="styles/legend/GeoRegion_3_2.png" /> E - Upper Cambrian<br />\
    <img src="styles/legend/GeoRegion_3_3.png" /> gn - Undifferentiated (Undifferentiated Metamorphics mainly Gneisses)<br />\
    <img src="styles/legend/GeoRegion_3_4.png" /> gn/gs - Undifferentiated<br />\
    <img src="styles/legend/GeoRegion_3_5.png" /> gr - Undifferentiated (Granites and other non-basic intrusives)<br />\
    <img src="styles/legend/GeoRegion_3_6.png" /> gr1 - Upper Paleozoic (Granitoids)<br />\
    <img src="styles/legend/GeoRegion_3_7.png" /> gr2 - Mesozoic and Lower Tertiary<br />\
    <img src="styles/legend/GeoRegion_3_8.png" /> Tm-Tp - Upper Miocene - Pliocene (Irrawaddy Formation)<br />\
    <img src="styles/legend/GeoRegion_3_9.png" /> J - Jurassic (Loi-an Group; Namyau Group)<br />\
    <img src="styles/legend/GeoRegion_3_10.png" /> K - Cretaceous (Flysch-type units of the Western Ranges)<br />\
    <img src="styles/legend/GeoRegion_3_11.png" /> JK - Cretaceous (Kalaw Red Beds; and Kabaw Formation)<br />\
    <img src="styles/legend/GeoRegion_3_12.png" /> m1 - Paleozoic, and partly Jurassic (Metamorphosed units of mainly Lower Paleozoic)<br />\
    <img src="styles/legend/GeoRegion_3_13.png" /> gs - Mesozoic, mostly Triassic (Metamorphics of Western Ranges and Jade Mines)<br />\
    <img src="styles/legend/GeoRegion_3_14.png" /> O - Ordovician (Pindaya Group; Naungkangyi Group)<br />\
    <img src="styles/legend/GeoRegion_3_15.png" /> PE - Upper Precambrian - Lower Cambrian (Chaung Magyi Group)<br />\
    <img src="styles/legend/GeoRegion_3_16.png" /> P - Middle Permian - Middle Triassic (Plateau Limestone Group; Moulmein Limestone)<br />\
    <img src="styles/legend/GeoRegion_3_17.png" /> Pz1 - Lower Paleozoic<br />\
    <img src="styles/legend/GeoRegion_3_18.png" /> Pz1-2 - Upper & partly Lower Paleozoic<br />\
    <img src="styles/legend/GeoRegion_3_19.png" /> C - Upper Paleozoic<br />\
    <img src="styles/legend/GeoRegion_3_20.png" /> Q1 - Pleistocene (Older Alluvium)<br />\
    <img src="styles/legend/GeoRegion_3_21.png" /> Q2 - Holocene (Younger Alluvium)<br />\
    <img src="styles/legend/GeoRegion_3_22.png" /> S - Silurian<br />\
    <img src="styles/legend/GeoRegion_3_23.png" /> Teb - Eocene (Flysch type units (along Western Ranges))<br />\
    <img src="styles/legend/GeoRegion_3_24.png" /> Te - Eocene (Flysch-type units: Mawdin Formation)<br />\
    <img src="styles/legend/GeoRegion_3_25.png" /> Tea - Paleocene - Eocene (Mollase-type units: Paunggyi Formation)<br />\
    <img src="styles/legend/GeoRegion_3_26.png" /> Tm - Miocene (Upper Pegu Group of Minbu Basin)<br />\
    <img src="styles/legend/GeoRegion_3_27.png" /> To - Oligocene (Lower Pegu Group of Minbu Basin)<br />\
    <img src="styles/legend/GeoRegion_3_28.png" /> Tpf - Paleocene (Flysch-type units: Ngapali Formation)<br />\
    <img src="styles/legend/GeoRegion_3_29.png" /> Tr - Triassic (Thanbaya Formation; Bawgyo Group)<br />\
    <img src="styles/legend/GeoRegion_3_30.png" /> ub - Mostly Jurassic (Ophiolite assemblages)<br />\
    <img src="styles/legend/GeoRegion_3_31.png" /> Unk - Unknown (Unknown unit, not defined on geology map)<br />\
    <img src="styles/legend/GeoRegion_3_32.png" /> v1 - Cretaceous (Volcanics (mainly andesites))<br />\
    <img src="styles/legend/GeoRegion_3_33.png" /> V - Cenozoic, mostly Plio-Pleistocene (Volcanics (acidic to basic))<br />\
    <img src="styles/legend/GeoRegion_3_34.png" /> Water - Inland Waterbody<br />\
    <img src="styles/legend/GeoRegion_3_35.png" /> Pz2 - Upper Paleozoic (Mainly Carboniferous-Permian-Plateau Limestone)<br />' });
var format_Township_4 = new ol.format.GeoJSON();
var features_Township_4 = format_Township_4.readFeatures(json_Township_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Township_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Township_4.addFeatures(features_Township_4);
var lyr_Township_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Township_4, 
                style: style_Township_4,
                popuplayertitle: 'Township',
                interactive: true,
                title: '<img src="styles/legend/Township_4.png" /> Township'
            });
var format_Fold_5 = new ol.format.GeoJSON();
var features_Fold_5 = format_Fold_5.readFeatures(json_Fold_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fold_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fold_5.addFeatures(features_Fold_5);
var lyr_Fold_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fold_5, 
                style: style_Fold_5,
                popuplayertitle: 'Fold',
                interactive: true,
    title: 'Fold<br />\
    <img src="styles/legend/Fold_5_0.png" /> Anticlinal Axis<br />\
    <img src="styles/legend/Fold_5_1.png" /> Synclinal axis<br />\
    <img src="styles/legend/Fold_5_2.png" /> Synclinal Axis<br />' });
var format_Fault_6 = new ol.format.GeoJSON();
var features_Fault_6 = format_Fault_6.readFeatures(json_Fault_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fault_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fault_6.addFeatures(features_Fault_6);
var lyr_Fault_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fault_6, 
                style: style_Fault_6,
                popuplayertitle: 'Fault',
                interactive: true,
                title: '<img src="styles/legend/Fault_6.png" /> Fault'
            });
var format_MineralComposite_7 = new ol.format.GeoJSON();
var features_MineralComposite_7 = format_MineralComposite_7.readFeatures(json_MineralComposite_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MineralComposite_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MineralComposite_7.addFeatures(features_MineralComposite_7);
var lyr_MineralComposite_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MineralComposite_7, 
                style: style_MineralComposite_7,
                popuplayertitle: 'Mineral Composite',
                interactive: true,
                title: '<img src="styles/legend/MineralComposite_7.png" /> Mineral Composite'
            });
var format_Town_8 = new ol.format.GeoJSON();
var features_Town_8 = format_Town_8.readFeatures(json_Town_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Town_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Town_8.addFeatures(features_Town_8);
var lyr_Town_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Town_8, 
                style: style_Town_8,
                popuplayertitle: 'Town',
                interactive: true,
                title: '<img src="styles/legend/Town_8.png" /> Town'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_GoogleRoad_1.setVisible(true);lyr_MGS_Geology_Map_2014_2.setVisible(false);lyr_GeoRegion_3.setVisible(true);lyr_Township_4.setVisible(true);lyr_Fold_5.setVisible(false);lyr_Fault_6.setVisible(false);lyr_MineralComposite_7.setVisible(false);lyr_Town_8.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,lyr_MGS_Geology_Map_2014_2,lyr_GeoRegion_3,lyr_Township_4,lyr_Fold_5,lyr_Fault_6,lyr_MineralComposite_7,lyr_Town_8];
lyr_GeoRegion_3.set('fieldAliases', {'fid': 'fid', 'GEO_ID': 'GEO_ID', 'AGE': 'AGE', 'DESCRIPTIO': 'DESCRIPTIO', 'Class': 'Class', 'Code': 'Code', 'Amend_Code': 'Geo ID', 'Age_Epoch': 'Age', 'Descript_1': 'Description', 'Hex_Color': 'Hex_Color', });
lyr_Township_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ST': 'State/ Region', 'ST_PCODE': 'ST_PCODE', 'DT': 'District', 'DT_PCODE': 'DT_PCODE', 'TS': 'Township', 'TS_PCODE': 'TS_PCODE', 'TS_MMR': 'Township (MMR)', 'PCode_V': 'PCode_V', });
lyr_Fold_5.set('fieldAliases', {'fid': 'fid', 'TYPE': 'Type', });
lyr_Fault_6.set('fieldAliases', {'fid': 'fid', 'TYPE': 'TYPE', });
lyr_MineralComposite_7.set('fieldAliases', {'COMMODITY_': 'Mineral Commodity', 'PRIMARY_CO': 'Mineral Composite', });
lyr_Town_8.set('fieldAliases', {'fid': 'fid', 'SD_Pcode': 'SD_Pcode', 'State_Divi': 'State/ Region', 'D_Pcode': 'D_Pcode', 'District': 'District', 'TS_Pcode': 'TS_Pcode', 'Township': 'Township', 'Town_Pcode': 'Town_Pcode', 'Town': 'Town', 'Town_MMR4': 'Town (MMR)', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Level': 'Level', 'Source': 'Source', 'Remark': 'Remark', });
lyr_GeoRegion_3.set('fieldImages', {'fid': 'TextEdit', 'GEO_ID': 'TextEdit', 'AGE': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'Class': 'TextEdit', 'Code': 'TextEdit', 'Amend_Code': 'TextEdit', 'Age_Epoch': 'TextEdit', 'Descript_1': 'TextEdit', 'Hex_Color': 'TextEdit', });
lyr_Township_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ST': 'TextEdit', 'ST_PCODE': 'TextEdit', 'DT': 'TextEdit', 'DT_PCODE': 'TextEdit', 'TS': 'TextEdit', 'TS_PCODE': 'TextEdit', 'TS_MMR': 'TextEdit', 'PCode_V': 'TextEdit', });
lyr_Fold_5.set('fieldImages', {'fid': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_Fault_6.set('fieldImages', {'fid': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_MineralComposite_7.set('fieldImages', {'COMMODITY_': 'TextEdit', 'PRIMARY_CO': 'TextEdit', });
lyr_Town_8.set('fieldImages', {'fid': 'TextEdit', 'SD_Pcode': 'TextEdit', 'State_Divi': 'TextEdit', 'D_Pcode': 'TextEdit', 'District': 'TextEdit', 'TS_Pcode': 'TextEdit', 'Township': 'TextEdit', 'Town_Pcode': 'TextEdit', 'Town': 'TextEdit', 'Town_MMR4': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Level': 'TextEdit', 'Source': 'TextEdit', 'Remark': 'TextEdit', });
lyr_GeoRegion_3.set('fieldLabels', {'fid': 'hidden field', 'GEO_ID': 'hidden field', 'AGE': 'hidden field', 'DESCRIPTIO': 'hidden field', 'Class': 'hidden field', 'Code': 'hidden field', 'Amend_Code': 'inline label - always visible', 'Age_Epoch': 'inline label - always visible', 'Descript_1': 'inline label - always visible', 'Hex_Color': 'hidden field', });
lyr_Township_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ST': 'inline label - always visible', 'ST_PCODE': 'hidden field', 'DT': 'inline label - always visible', 'DT_PCODE': 'hidden field', 'TS': 'inline label - always visible', 'TS_PCODE': 'hidden field', 'TS_MMR': 'inline label - always visible', 'PCode_V': 'hidden field', });
lyr_Fold_5.set('fieldLabels', {'fid': 'hidden field', 'TYPE': 'inline label - always visible', });
lyr_Fault_6.set('fieldLabels', {'fid': 'hidden field', 'TYPE': 'hidden field', });
lyr_MineralComposite_7.set('fieldLabels', {'COMMODITY_': 'inline label - visible with data', 'PRIMARY_CO': 'inline label - visible with data', });
lyr_Town_8.set('fieldLabels', {'fid': 'hidden field', 'SD_Pcode': 'hidden field', 'State_Divi': 'inline label - always visible', 'D_Pcode': 'hidden field', 'District': 'hidden field', 'TS_Pcode': 'hidden field', 'Township': 'inline label - always visible', 'Town_Pcode': 'hidden field', 'Town': 'inline label - always visible', 'Town_MMR4': 'inline label - always visible', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Level': 'inline label - always visible', 'Source': 'hidden field', 'Remark': 'hidden field', });
lyr_Town_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});