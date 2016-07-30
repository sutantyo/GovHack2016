
var compute_distance = function(lat1,lon1,lat2,lon2){
  var R = 6371; // km
  //has a problem with the .toRad() method below.
  var x1 = lat2-lat1;
  var dLat = to_rad(x1);
  var x2 = lon2-lon1;
  var dLon = to_rad(x2);
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(to_rad(lat1)) * Math.cos(to_rad(lat2)) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;

  return d;
};

var to_rad = function(x){
  return x * Math.PI / 180;
};
