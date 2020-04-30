{
mviewer.customLayers.epci = {};
mviewer.customLayers.epci.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "../mviewer-covoiturage/data/epci.geojson",
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
mviewer.customLayers.epci.handle = false;
} 