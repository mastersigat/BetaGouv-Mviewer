{
    mviewer.customLayers.airescov = {};
    var cl = mviewer.customLayers.airescov;
    cl.legend = { items:[] };
    var uniqueStyle = [
        new ol.style.Style({
            image: new ol.style.Circle({
                radius: 10,
                fill: new ol.style.Fill({
                    color: '#20396e'
                })
            })
        }),
        new ol.style.Style({
            image: new ol.style.Circle({
                radius: 8,
                fill: new ol.style.Fill({
                    color: 'rgba(236, 240, 241,7.0)'
                })
            })
        })
    ];
    cl.legend.items.push({styles:uniqueStyle, label: "Aire de covoiturage", geometry: "Point"});
    var manyStyle = function (radius, radius2, size) {
        return [
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: radius,
                    fill: new ol.style.Fill({
                        color: '#20396e'
                    })
                }),
                stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 3
              }),
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 255, 0.1)'
              })
            }),
            new ol.style.Style({
                image: new ol.style.Circle({
                    radius: radius2,
                    fill: new ol.style.Fill({
                        color: '#4C6DB3'
                    })
                }),
                text: new ol.style.Text({
                    font: '12px OpenSans-Regular, Arial, Sans-serif',
                    text: size.toString(),
                    fill: new ol.style.Fill({
                        color: '#fff'
                    })
                })
            })
        ];
    };
    cl.legend.items.push({styles:manyStyle(10,10,7), label: "Groupe d'aires de covoiturage", geometry: "Point"});

    var clusterStyle = function(feature) {
        var size = feature.get('features').length;
        var max_radius = 40;
        var max_value = 500;
        var radius = 10 + Math.sqrt(size)*(max_radius / Math.sqrt(max_value));
        var radius2 = radius *90 /100 ;
        if (size == 1) {
            return uniqueStyle;
        } else {
            return manyStyle(radius, radius2, size);
        }
    };

    cl.layer = new ol.layer.Vector({
        source: new ol.source.Cluster({
            distance: 50,
            source: new ol.source.Vector({
                url: "../mviewer-covoiturage/data/airescov.geojson",
                format: new ol.format.GeoJSON()
            })
        }),
        style: clusterStyle

    });
    cl.handle = function(clusters, views) {
        if (clusters.length > 0 && clusters[0].properties.features) {
            var features = clusters[0].properties.features;
            var elements = [];
            var l = mviewer.getLayer("airescov");
            features.forEach(function(feature, i) {
                elements.push({
                    properties: feature.getProperties()
                });
            });
            var html;
            if (l.template) {
                html = info.templateHTMLContent(elements, l);
            } else {
                html = info.formatHTMLContent(elements, l);
            }
            var view = views["right-panel"];
            view.layers.push({
                "id": view.layers.length + 1,
                "firstlayer": true,
                "manyfeatures": (features.length > 1),
                "nbfeatures": features.length,
                "name": l.name,
                "layerid": "airescov",
                "theme_icon": l.icon,
                "html": html
            });
        }

    };
}