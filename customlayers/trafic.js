{
mviewer.customLayers.trafic = {};
var trafic = mviewer.customLayers.trafic;

trafic.legend = { items: [
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

mviewer.customLayers.trafic.layer = new ol.layer.Vector({
    	source: new ol.source.Vector({
        	url: "../mviewer-covoiturage/data/trafic.geojson",
        	format: new ol.format.GeoJSON()
    	}),
   	 style: function(feature, resolution) {
        	var stl;
        	if(feature.get('nb_OK') <= 15000) {
            	stl = trafic.legend.items[0].styles;
        	} else if(feature.get('nb_OK') <= 30000) {
            	stl = trafic.legend.items[1].styles;
			} else if(feature.get('nb_OK') <= 40000) {
            	stl = trafic.legend.items[2].styles;
			} else if(feature.get('nb_OK') <= 50000) {
            	stl = trafic.legend.items[3].styles;
			} else if(feature.get('nb_OK') <= 60000) {
            	stl = trafic.legend.items[4].styles;
        	} else if(feature.get('nb_OK') <= 75000) {
            	stl = trafic.legend.items[5].styles;
        	} else if(feature.get('nb_OK') > 75000) {
            	stl = trafic.legend.items[6].styles;
        	}
        	return stl;
    	}   	 
});   	 

mviewer.customLayers.trafic.handle = false;
}