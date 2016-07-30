$(document).ready(function(){

  google.maps.event.addListener(map, "click", function(event) {


      console.log('clicked map');
      clearData();
      d3.selectAll('circle').remove();
      scottClickReceive(event);
      var lat = event.latLng.lat();
      var lon = event.latLng.lng();

      var locations = [];
    	$.getJSON('data/locations?lat='+lat+'&lon='+lon, function(data){
				$.each(data, function(key,val){
					locations.push(val);
				});
      // populate yor box/field with lat, lon
      //alert("Lat=" + lat + "; Lng=" + lon);
        var min_distance = 100;
        var best_address = locations[0].address;
        for (i = 0; i < locations.length; i++){
          var distance = compute_distance(lat,lon,locations[i].latitude,locations[i].longitude);
          if (distance  < min_distance){
            min_distance = distance;
            best_address = locations[i].address;
          }
        }
        console.log("closest address is " + best_address + " which is " + min_distance + " whatever away.");
        showAddress(best_address);
      });

			var incidents = [];
			$.getJSON('data/service/location?lat='+lat+'&lon='+lon, function(data){
				$.each(data, function(key,val){
					incidents.push(val);
				});
        var object_to_draw = [];
				for(i = 0; i < incidents.length/2; i++){
          console.log(i);
          //console.log(incidents[i].latitude + " " + incidents[i].longitude +  " " + incidents[i].address + incidents[i].request_type);
          console.log(incidents[i].request_type);
          object_to_draw.push({ id: i, x: incidents[i].latitude, y: incidents[i].longitude, type: incidents[i].request_type});
          overlay.drawIncidents(object_to_draw);
					//console.log(incidents[i].latitude + " " + incidents[i].longitude);
				}
			});





  });



});// end jquery
