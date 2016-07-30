console.log('scott.js loaded');

var distances_enabled = false;

var scottClickReceive = function(event) {
    
    var lat = event.latLng.lat();
    var lon = event.latLng.lng();

    // var max_dist = 0.05;

    var distances = stations.map(function(stn){
        var dist = Math.sqrt(((lat-stn.lat)*(lat-stn.lat)) + ((lon-stn.lon)*(lon-stn.lon)));
        
        return {'name' : stn.name,
                'lat'  : stn.lat,
                'lon'  : stn.lon,
                'dist' : dist
        };
    });

    distances.sort(function(a,b){
        return a.dist - b.dist;
    });

    distances = distances.slice(0,3);

    function bothFinished() {
        showNearestStation(distances);
    }

    drivefin = false;
    walkfin  = false;
    if (distances_enabled) {
        getWalkTime({lat: event.latLng.lat(), lng: event.latLng.lng()}, distances, function(res){
            for (var i=0; i<res.rows[0].elements.length; i++) {
                distances[i]['walktime'] = res.rows[0].elements[i];
            }
            if (drivefin)
                bothFinished();
            else walkfin = true;
        });
        getDriveTime({lat: event.latLng.lat(), lng: event.latLng.lng()}, distances, function(res){
            for (var i=0; i<res.rows[0].elements.length; i++) {
                distances[i]['drivetime'] = res.rows[0].elements[i];
            }
            if (walkfin)
                bothFinished();
            else drivefin = true;
        });
    }
}

var stations = [];

var mapscallback = function() {

    $.getJSON( 'data/stations/all', function(data) {
      $.each( data, function( key, val ) {
        stations.push({'name': val.name,
                       'lat': parseFloat(val.lat),
                       'lon': parseFloat(val.lon)});
      });
    });

    var service = new google.maps.DistanceMatrixService;

    getDriveTime = function(origin, stations, callback) {
        var stn_dests = stations.map(function(stn){
            return {'lat': stn.lat, 'lng':stn.lon};
        });
        service.getDistanceMatrix({
          origins: [origin],
          destinations: stn_dests,
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, function(response, status) {
          if (status !== 'OK') {
            alert('Error was: ' + status);
          } else {
            callback(response);
          }
        });
    }

    getWalkTime = function(origin, stations, callback) {
        var stn_dests = stations.map(function(stn){
            return {'lat': stn.lat, 'lng':stn.lon};
        });
        service.getDistanceMatrix({
          origins: [origin],
          destinations: stn_dests,
          travelMode: 'WALKING',
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, function(response, status) {
          if (status !== 'OK') {
            alert('Error was: ' + status);
          } else {
            callback(response);
          }
        });
    }
      
}