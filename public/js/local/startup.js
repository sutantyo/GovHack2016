$(document).ready(function(){

  /*
  console.log(locations[10000]);
  console.log(locations[10001]);
  console.log(locations[10002]);
  console.log(locations[30002]);
  console.log(locations[30002]);
  console.log(locations[30002]);
  */


  google.maps.event.addListener(map, "click", function(event) {
      console.log('clicked map');
      var lat = event.latLng.lat();
      var lng = event.latLng.lng();
      // populate yor box/field with lat, lng
      //alert("Lat=" + lat + "; Lng=" + lng);
      var min_distance = 100;
      var best_address = "";
      for (i = 0; i < locations.length; i++){
        var distance = compute_distance(lat,lng,locations[i].latitude,locations[i].longitude);
        if (distance < min_distance){
          min_distance = distance;
          best_address = locations[i].address;
        }
      }
      console.log("closest address is " + best_address + " which is " + min_distance + " whatever away.");

  });



});// end jquery
