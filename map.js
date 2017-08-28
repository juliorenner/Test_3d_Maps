var map = L.eeGeo.map('map', '08642e3ee49efa6eb9b95bd46d246886', {
    center: [51.517327, -0.120005], 
    zoom: 15
});

var oPolygonPoints = [
            [51.522771, -0.125772],
            [51.521520, -0.124192],
            [51.520631, -0.126358],
            [51.521963, -0.127895]
        ]; 

var oPolygonPoints2 = [
            [51.532771, -0.135772],
            [51.531520, -0.134192],
            [51.530631, -0.136358],
            [51.531963, -0.137895]
        ]; 

for(var i = 0; i <= 150; i++){
    L.Wrld.polygon(oPolygonPoints, {
        altitudeOffset: i,
        offsetFromSeaLevel: false
    }).setColor([1, 1, 0, 0]).addTo(map);
}

for(var i = 0; i <= 300; i++){
    L.Wrld.polygon(oPolygonPoints2, {
        altitudeOffset: i,
        offsetFromSeaLevel: false
    }).setColor([1, 1, 0, 0]).addTo(map);
}

// L.popup({ elevation: 160.0 })
//        .setLatLng([51.522771, -0.125772])
//        .setContent("160 Sacas")
//        .addTo(map);
