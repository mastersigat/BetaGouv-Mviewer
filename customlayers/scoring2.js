{
mviewer.customLayers.scoring2 = {};
var style51 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#ffffff',
        	width: 0
      	}),
      	fill: new ol.style.Fill({
        	color: '#ffffff',
			opacity : 0
      	})
})];

var style52 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#8066aa'
      	})
})];

var style53 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#c2bcdc'
      	})
})];

var style54 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#fafafa'
      	})
})];

var style55 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#fbc684'
      	})
})];

var style56 = [new ol.style.Style({
      	stroke: new ol.style.Stroke({
        	color: '#e6e6e6',
        	width: 0.4
      	}),
      	fill: new ol.style.Fill({
        	color: '#ec8235'
      	})
})];


mviewer.customLayers.scoring2.layer = new ol.layer.Vector({
    	source: new ol.source.Vector({
        	url: "../mviewer-covoiturage/data/scoring2.geojson",
        	format: new ol.format.GeoJSON()
    	}),
   	 style: function(feature, resolution) {
        	var stl;
        	if(feature.get('POTENTIEL') === 0 ) {
            	stl = style51;
        	} else if(feature.get('POTENTIEL') === 1) {
            	stl = style52;
        	} else if(feature.get('POTENTIEL') === 2) {
            	stl = style53;
			} else if(feature.get('POTENTIEL') === 3) {
            	stl = style54;
			} else if(feature.get('POTENTIEL') === 4) {
            	stl = style55;
			} else if(feature.get('POTENTIEL') === 5) {
            	stl = style56;
        	} 
        	return stl;
    	}   	 
});   	 

mviewer.customLayers.scoring2.handle = false;
}
