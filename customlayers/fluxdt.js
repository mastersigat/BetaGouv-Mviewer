{
mviewer.customLayers.fluxdt = {};
var fluxdt = mviewer.customLayers.fluxdt;

fluxdt.legend = { items: [
    {
        label: "Classe 1",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 1 })
        })]
    },
    {
        label: "Classe 2",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 3 })
        })]
    },
    {
        label: "Classe 3",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 6 })
        })]
    },
    {
        label: "Classe 4",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 10 })
        })]
    },
    {
        label: "Classe 5",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 12.5 })
        })]
    },
	{
        label: "Classe 6",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 20 })
        })]
    },
	{
        label: "Classe 7",
        geometry: "LineString",
        styles: [new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4C6DB3', width: 30 })
        })]
    }
] };

mviewer.customLayers.fluxdt.layer = new ol.layer.Vector({
    	source: new ol.source.Vector({
        	url: "../mviewer-covoiturage/data/fluxdomtrainsee.geojson",
        	format: new ol.format.GeoJSON()
    	}),
   	 style: function(feature, resolution) {
        	var stl;
        	if(feature.get('Total') <= 300) {
            	stl = fluxdt.legend.items[0].styles;
        	} else if(feature.get('Total') <= 600) {
            	stl = fluxdt.legend.items[1].styles;
			} else if(feature.get('Total') <= 1000) {
            	stl = fluxdt.legend.items[2].styles;
			} else if(feature.get('Total') <= 1500) {
            	stl = fluxdt.legend.items[3].styles;
			} else if(feature.get('Total') <= 3000) {
            	stl = fluxdt.legend.items[4].styles;
        	} else if(feature.get('Total') <= 4500) {
            	stl = fluxdt.legend.items[5].styles;
        	} else if(feature.get('Total') > 4500) {
            	stl = fluxdt.legend.items[6].styles;
        	}
        	return stl;
    	}   	 
});   	 

mviewer.customLayers.fluxdt.handle = false;
}