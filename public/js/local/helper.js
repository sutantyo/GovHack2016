
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

var iconList = {};
iconList["Waste Bin Service Missed"] = "#road";
iconList["Waste Bin Stolen"] = "#greenbin";
iconList["Waste Bin Damaged"] = "#greenbin";
iconList["Illegally Dumped Rubbish"] = "#illegal";
iconList["Removal of Illegally Dumped - General Rubbish"] = "#illegal";
iconList["Drainage Pit or Pipe Blocked"] = "#hardhat";
iconList["Abandoned Vehicle"] = "#car";
iconList["Question"] = "#question";

var iconBorder = {};
iconBorder["Waste Bin Service Missed"] = "#7dca6f"
iconBorder["Waste Bin Stolen"] = "#7dca6f"
iconBorder["Waste Bin Damaged"] = "#7dca6f"
iconBorder["Illegally Dumped Rubbish"] = "#7dca6f";
iconBorder["Removal of Illegally Dumped - General Rubbish"] = "#7dca6f";
iconBorder["Drainage Pit or Pipe Blocked"] = "#f8ce00";
iconBorder["Abandoned Vehicle"] = "black";
iconBorder["Question"] = "#1f5197";
