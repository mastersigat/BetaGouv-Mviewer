{
mviewer.customLayers.communes = {};
mviewer.customLayers.communes.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "../mviewer-covoiturage/data/communes.geojson",
            format: new ol.format.GeoJSON()
        }),
style: new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: '#a9a9a9',
            width: 1,
          }),
          fill: new ol.style.Fill({
            color: 'transparent',
          })
})        
  });
mviewer.customLayers.communes.handle = false;
} 