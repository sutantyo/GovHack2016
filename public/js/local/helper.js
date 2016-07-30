
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
iconList["Waste Bin Service Missed"] = "img/greenbin.png";
iconList["Waste Bin Stolen"] = "img/greenbin.png";
iconList["Waste Bin Damaged"] = "img/greenbin.png";
iconList["Kerbside Clean Up Missed"] = "img/greenbin.png";
iconList["Waste Bins Left Out"] = "img/greenbin.png";

iconList["Illegally Dumped Rubbish"] = "img/garbage.png";
iconList["Removal of Illegally Dumped - General Rubbish"] = "img/garbage.png";
iconList["Request for Removal of Litter"] = "img/garbage.png";

iconList["Food Shop Hygiene & Handling"] = "img/poison.png";
iconList["Pollution Report - Land Contamination"] = "img/poison.png";
iconList["Pollution Report - Noise"] = "img/poison.png";


iconList["Drainage Pit or Pipe Blocked"] = "img/water.png";
iconList["Drainage Investigation"] = "img/water.png";
iconList["Drainage Pit Requires Maintenance"] = "img/water.png";
iconList["Drainage Issues on Private Land"] = "img/water.png";

iconList["Abandoned Vehicle"] = "img/car.png";
iconList["Parking Offence"] = "img/car.png";
iconList["Request for New Traffic Calming Device"] = "img/car.png";

iconList["Maintenance of Traffic or Parking Sign"] = "img/repair.png";
iconList["Request for New Traffic or Parking Sign"] = "img/repair.png";

iconList["Repair of Multiple Potholes / Major Road Repairs"] = "img/roadworks.png";
iconList["Repair of Existing Footpath"] = "img/roadworks.png"
iconList["Repair of a Single Pothole"] = "img/roadworks.png"
iconList["Repair of existing Footpath ( Inspected by OLO's )"] = "img/roadworks.png";
iconList["Request for New Line Marking"] = "img/roadworks.png"

iconList["OLD -Development - Not in Conformity (Private PCA)"] = "img/court.png";
iconList["Councillor Request - Outcomes"] = "img/court.png";
iconList["Development - No Consent"] = "img/court.png";
iconList["Development - Not in Conformity (Private PCA)"] = "img/court.png";
iconList["Development - Not in Conformity (Council PCA)"] = "img/court.png";
iconList["Swimming Pool Fencing"] = "img/court.png";


iconList["Noxious Weeds on Private Land"] = "img/trees.png";
iconList["Trees on Private Land Overhanging Council Land"] = "img/trees.png";
iconList["Request for Mowing in a Park"] = "img/trees.png";
iconList["Dangerous Trees on Private Land"] = "img/trees.png";
iconList["Collection of Tree Branches fallen on Council Land"] = "img/trees.png";

iconList["Barking Dog"] = "img/barking.png";
iconList["Micro Chipping Service"] = "img/barking.png";
iconList["Vicious Animal or Animal Attack"] = "img/barking.png";

iconList["OLD_ Animal Nuisance Complaint / Info Request"] = "img/possum.png";
iconList["Dead Animal on Council Land"] = "img/possum.png";
iconList["Stray/Roaming Animal"] = "img/possum.png";


iconList["Prohibited Activity"] = "img/police.png";

iconList["Question"] = "img/question.png";
