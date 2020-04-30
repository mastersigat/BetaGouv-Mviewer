{
mviewer.customLayers.dttc = {};
var style15 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#ffffff'
      	})
})];

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
        	color: '#a38dc2'
      	})
})];

var style19 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#795aa2'
      	})
})];

var style20 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#522e87'
      	})
})];


mviewer.customLayers.dttc.layer = new ol.layer.Vector({
    	source: new ol.source.Vector({
        	url: "../mviewer-covoiturage/data/dttc.geojson",
        	format: new ol.format.GeoJSON()
    	}),
   	 style: function(feature, resolution) {
        	var stl;
        	if(feature.get("ddttc") <= 0.1) {
            	stl = style15;
        	} else if(feature.get("ddttc") <= 2.5) {
            	stl = style16;
			} else if(feature.get("ddttc") <= 5.0) {
            	stl = style17;
			} else if(feature.get("ddttc") <= 10.0) {
            	stl = style18;
			} else if(feature.get("ddttc") <= 15.0) {
            	stl = style19;
			} else if(feature.get("ddttc") <= 100.0) {
            	stl = style20;
        	} 
        	return stl;
    	}   	 
});   	 

mviewer.customLayers.dttc.handle = false;
}
