{
mviewer.customLayers.eloignement = {};
var style16 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#f2f0f7'
      	})
})];

var style17 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#cbbedd'
      	})
})];

var style18 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#a38cc3'
      	})
})];

var style19 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#7b59a9'
      	})
})];

var style20 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#54278f'
      	})
})];


mviewer.customLayers.eloignement.layer = new ol.layer.Vector({
    	source: new ol.source.Vector({
        	url: "../mviewer-covoiturage/data/eloignement.geojson",
        	format: new ol.format.GeoJSON()
    	}),
   	 style: function(feature, resolution) {
        	var stl;
        	if(feature.get('Eloig_moy') <= 7) {
            	stl = style16;
        	} else if(feature.get('Eloig_moy') <= 12) {
            	stl = style17;
			} else if(feature.get('Eloig_moy') <= 17) {
            	stl = style18;
			} else if(feature.get('Eloig_moy') <= 24) {
            	stl = style19;
			} else if(feature.get('Eloig_moy') > 24) {
            	stl = style20;
        	} 
        	return stl;
    	}   	 
});   	 

mviewer.customLayers.eloignement.handle = false;
}
