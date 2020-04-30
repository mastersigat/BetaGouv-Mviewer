{
mviewer.customLayers.fluxcov = {};
var fluxcov = mviewer.customLayers.fluxcov;

fluxcov.legend = { items: [
    {
        label: "Covoiturage 1",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 1 })
        })]
    },
    {
        label: "Covoiturage 2",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 2 })
        })]
    },
    {
        label: "Covoiturage 3",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 5 })
        })]
    },
    {
        label: "Covoiturage 4",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 7 })
        })]
    },
    {
        label: "Covoiturage 5",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 10 })
        })]
    },
	{
        label: "Covoiturage 6",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 20 })
        })]
    },
	{
        label: "Covoiturage 7",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 30 })
        })]
    }
] };

mviewer.customLayers.fluxcov.layer = new ol.layer.Vector({
    	source: new ol.source.Vector({
        	url: "../mviewer-covoiturage/data/fluxcov.geojson",
        	format: new ol.format.GeoJSON()
    	}),
   	 style: function(feature, resolution) {
        	var stl;
        	if(feature.get('sum') <= 30) {
            	stl = fluxcov.legend.items[0].styles;
        	} else if(feature.get('sum') <= 50) {
            	stl = fluxcov.legend.items[1].styles;
			} else if(feature.get('sum') <= 100) {
            	stl = fluxcov.legend.items[2].styles;
			} else if(feature.get('sum') <= 200) {
            	stl = fluxcov.legend.items[3].styles;
			} else if(feature.get('sum') <= 300) {
            	stl = fluxcov.legend.items[4].styles;
        	} else if(feature.get('sum') <= 500) {
            	stl = fluxcov.legend.items[5].styles;
        	} else if(feature.get('sum') > 500) {
            	stl = fluxcov.legend.items[6].styles;
        	}
        	return stl;
    	}   	 
});   	 

mviewer.customLayers.fluxcov.handle = false;
}

















