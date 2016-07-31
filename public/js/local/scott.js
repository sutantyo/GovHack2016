console.log('scott.js loaded');

var distances_enabled = false;

var scottClickReceive = function(event) {

    var lat = event.latLng.lat();
    var lon = event.latLng.lng();


    var getdist = function(namelatlon) {
        var dist = Math.sqrt(((lat-namelatlon.lat)*(lat-namelatlon.lat)) + ((lon-namelatlon.lon)*(lon-namelatlon.lon)));
        
        return {'name' : namelatlon.name,
                'lat'  : parseFloat(namelatlon.lat),
                'lon'  : parseFloat(namelatlon.lon),
                'dist' : dist
        };
    };

    var comparedist = function(a,b){
        return a.dist - b.dist;
    };


    $.getJSON( 'data/stops/location',
      {'lat': lat, 'lon': lon} , 
      function(data) {
        var stops = data
                      .map(getdist)
                      .sort(comparedist)
                      .slice(0,3);

        var trains = stations
                      .map(getdist)
                      .sort(comparedist)
                      .slice(0,3);

        getWalk(trains, stops);
    });




    function getWalk(stations, stops) {
      all_places = stations.concat(stops);
      getWalkTime({lat: event.latLng.lat(), lng: event.latLng.lng()}, all_places, function(res){
        for (var i=0; i<res.rows[0].elements.length; i++) {
          all_places[i]['walktime'] = res.rows[0].elements[i];
        }
        // console.log(all_places);
        getDrive(all_places, stations.length);
      });
    }

    function getDrive(all_places, numstn) {
      getDriveTime({lat: event.latLng.lat(), lng: event.latLng.lng()}, all_places, function(res){
        for (var i=0; i<res.rows[0].elements.length; i++) {
          all_places[i]['drivetime'] = res.rows[0].elements[i];
        }
        showNearestStation(all_places.slice(0,numstn), all_places.slice(numstn));
      });
    }

    // drivefin = false;
    // walkfin  = false;
    // if (distances_enabled) {
    //     getWalkTime({lat: event.latLng.lat(), lng: event.latLng.lng()}, distances, function(res){
    //         for (var i=0; i<res.rows[0].elements.length; i++) {
    //             distances[i]['walktime'] = res.rows[0].elements[i];
    //         }
    //         if (drivefin)
    //             bothFinished();
    //         else walkfin = true;
    //     });
    //     getDriveTime({lat: event.latLng.lat(), lng: event.latLng.lng()}, distances, function(res){
    //         for (var i=0; i<res.rows[0].elements.length; i++) {
    //             distances[i]['drivetime'] = res.rows[0].elements[i];
    //         }
    //         if (walkfin)
    //             bothFinished();
    //         else drivefin = true;
    //     });
    // }
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