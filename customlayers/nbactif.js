{
mviewer.customLayers.nbperact = {};
var style1 = [new ol.style.Style({
	image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#4C6DB3'
        }),
        stroke: new ol.style.Stroke({
            color: "#20396e",
            width: 1
        }),
        radius: 2
    })
})];

var style2 = [new ol.style.Style({
	image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#4C6DB3'
        }),
        stroke: new ol.style.Stroke({
            color: "#20396e",
            width: 1
        }),
        radius: 5
    })
})];

var style3 = [new ol.style.Style({
	image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#4C6DB3'
        }),
        stroke: new ol.style.Stroke({
            color: "#20396e",
            width: 1
        }),
        radius: 9
    })
})];

var style4 = [new ol.style.Style({
	image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#4C6DB3'
        }),
        stroke: new ol.style.Stroke({
            color: "#20396e",
            width: 1
        }),
        radius: 12
    })
})];

var style5 = [new ol.style.Style({
	image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#4C6DB3'
        }),
        stroke: new ol.style.Stroke({
            color: "#20396e",
            width: 1
        }),
        radius: 15
    })
})];

var style6 = [new ol.style.Style({
	image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#4C6DB3'
        }),
        stroke: new ol.style.Stroke({
            color: "#20396e",
            width: 1
        }),
        radius: 20
    })
})];

var style7 = [new ol.style.Style({
	image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: '#4C6DB3'
        }),
        stroke: new ol.style.Stroke({
            color: "#20396e",
            width: 1
        }),
        radius: 30
    })
})];


mviewer.customLayers.nbperact.layer = new ol.layer.Vector({
    	source: new ol.source.Vector({
        	url: "../mviewer-covoiturage/data/nbpersactive.geojson",
        	format: new ol.format.GeoJSON()
    	}),
   	 style: function(feature, resolution) {
        	var stl;
        	if(feature.get('nbactif') <= 500.0) {
            	stl = style1;
        	} else if(feature.get('nbactif') <= 1500.0) {
            	stl = style2;
			} else if(feature.get('nbactif') <= 2500.0) {
            	stl = style3;
			} else if(feature.get('nbactif') <= 4000.0) {
            	stl = style4;
			} else if(feature.get('nbactif') <= 6000.0) {
            	stl = style5;
        	} else if(feature.get('nbactif') <= 20000.0) {
            	stl = style6;
        	} else if(feature.get('nbactif') > 20000.0) {
            	stl = style7;
        	}
        	return stl;
    	}   	 
});   	 

mviewer.customLayers.nbperact.handle = false;
}
