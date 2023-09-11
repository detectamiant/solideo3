var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DeteccionsSolideo2cadastredeteccions_solideo_2_1 = new ol.format.GeoJSON();
var features_DeteccionsSolideo2cadastredeteccions_solideo_2_1 = format_DeteccionsSolideo2cadastredeteccions_solideo_2_1.readFeatures(json_DeteccionsSolideo2cadastredeteccions_solideo_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsSolideo2cadastredeteccions_solideo_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsSolideo2cadastredeteccions_solideo_2_1.addFeatures(features_DeteccionsSolideo2cadastredeteccions_solideo_2_1);
var lyr_DeteccionsSolideo2cadastredeteccions_solideo_2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsSolideo2cadastredeteccions_solideo_2_1, 
                style: style_DeteccionsSolideo2cadastredeteccions_solideo_2_1,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsSolideo2cadastredeteccions_solideo_2_1.png" /> Deteccions Solideo 2 cadastre— deteccions_solideo_2'
            });
var format_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2 = new ol.format.GeoJSON();
var features_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2 = format_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2.readFeatures(json_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2.addFeatures(features_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2);
var lyr_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2, 
                style: style_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2,
                interactive: true,
                title: '<img src="styles/legend/SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2.png" /> Solideo Santa Coloma Cadastre — sta_coloma_de_gramente_2000m2'
            });
var format_SantAdrSolideocadastresant_adri_2000m2_3 = new ol.format.GeoJSON();
var features_SantAdrSolideocadastresant_adri_2000m2_3 = format_SantAdrSolideocadastresant_adri_2000m2_3.readFeatures(json_SantAdrSolideocadastresant_adri_2000m2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantAdrSolideocadastresant_adri_2000m2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAdrSolideocadastresant_adri_2000m2_3.addFeatures(features_SantAdrSolideocadastresant_adri_2000m2_3);
var lyr_SantAdrSolideocadastresant_adri_2000m2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SantAdrSolideocadastresant_adri_2000m2_3, 
                style: style_SantAdrSolideocadastresant_adri_2000m2_3,
                interactive: true,
                title: '<img src="styles/legend/SantAdrSolideocadastresant_adri_2000m2_3.png" /> Sant Adrà Solideo cadastre — sant_adri_2000m2'
            });
var format_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4 = new ol.format.GeoJSON();
var features_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4 = format_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4.readFeatures(json_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4.addFeatures(features_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4);
var lyr_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4, 
                style: style_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4,
                interactive: true,
                title: '<img src="styles/legend/SolideoMontcadaCadastremontcada_i_reixac_2000m2_4.png" /> Solideo Montcada Cadastre — montcada_i_reixac_2000m2'
            });
var format_SolideoBadalonaCadastrebadalona_2000m2_5 = new ol.format.GeoJSON();
var features_SolideoBadalonaCadastrebadalona_2000m2_5 = format_SolideoBadalonaCadastrebadalona_2000m2_5.readFeatures(json_SolideoBadalonaCadastrebadalona_2000m2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolideoBadalonaCadastrebadalona_2000m2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolideoBadalonaCadastrebadalona_2000m2_5.addFeatures(features_SolideoBadalonaCadastrebadalona_2000m2_5);
var lyr_SolideoBadalonaCadastrebadalona_2000m2_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SolideoBadalonaCadastrebadalona_2000m2_5, 
                style: style_SolideoBadalonaCadastrebadalona_2000m2_5,
                interactive: true,
                title: '<img src="styles/legend/SolideoBadalonaCadastrebadalona_2000m2_5.png" /> Solideo Badalona Cadastre — badalona_2000m2'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_DeteccionsSolideo2cadastredeteccions_solideo_2_1.setVisible(true);lyr_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2.setVisible(true);lyr_SantAdrSolideocadastresant_adri_2000m2_3.setVisible(true);lyr_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4.setVisible(true);lyr_SolideoBadalonaCadastrebadalona_2000m2_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_DeteccionsSolideo2cadastredeteccions_solideo_2_1,lyr_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2,lyr_SantAdrSolideocadastresant_adri_2000m2_3,lyr_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4,lyr_SolideoBadalonaCadastrebadalona_2000m2_5];
lyr_DeteccionsSolideo2cadastredeteccions_solideo_2_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Area': 'Area', });
lyr_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_SantAdrSolideocadastresant_adri_2000m2_3.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_SolideoBadalonaCadastrebadalona_2000m2_5.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionsSolideo2cadastredeteccions_solideo_2_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'beginLifespanVersion': 'DateTime', 'conditionOfConstruction': 'TextEdit', 'beginning': 'DateTime', 'end': 'DateTime', 'endLifespanVersion': 'TextEdit', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', });
lyr_SantAdrSolideocadastresant_adri_2000m2_3.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'beginLifespanVersion': 'DateTime', 'conditionOfConstruction': 'TextEdit', 'beginning': 'DateTime', 'end': 'DateTime', 'endLifespanVersion': 'TextEdit', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', });
lyr_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'beginLifespanVersion': 'DateTime', 'conditionOfConstruction': 'TextEdit', 'beginning': 'DateTime', 'end': 'DateTime', 'endLifespanVersion': 'TextEdit', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', });
lyr_SolideoBadalonaCadastrebadalona_2000m2_5.set('fieldImages', {'fid': '', 'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionsSolideo2cadastredeteccions_solideo_2_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Area': 'no label', });
lyr_SolideoSantaColomaCadastresta_coloma_de_gramente_2000m2_2.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_SantAdrSolideocadastresant_adri_2000m2_3.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_SolideoMontcadaCadastremontcada_i_reixac_2000m2_4.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_SolideoBadalonaCadastrebadalona_2000m2_5.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_SolideoBadalonaCadastrebadalona_2000m2_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});