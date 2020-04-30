{
mviewer.customLayers.actifs = {};
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


mviewer.customLayers.actifs.layer = new ol.layer.Vector({
    	source: new ol.source.Vector({
        	url: "../mviewer-covoiturage/data/actifs.geojson",
        	format: new ol.format.GeoJSON()
    	}),
   	 style: function(feature, resolution) {
        	var stl;
        	if(feature.get('Tx_ext') <= 65.4) {
            	stl = style16;
        	} else if(feature.get('Tx_ext') <= 76.5) {
            	stl = style17;
			} else if(feature.get('Tx_ext') <= 82.3) {
            	stl = style18;
			} else if(feature.get('Tx_ext') <= 86.7) {
            	stl = style19;
			} else if(feature.get('Tx_ext') <= 100) {
            	stl = style20;
        	} 
        	return stl;
    	}   	 
});   	 

mviewer.customLayers.actifs.handle = false;
}
