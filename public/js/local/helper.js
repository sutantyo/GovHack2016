
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
iconList[""] = "img/greenbin.png";
iconList["Street Sweeping"] = "img/greenbin.png";
iconList["Waste Bin Service Missed"] = "img/greenbin.png";
iconList["Waste Bin Stolen"] = "img/greenbin.png";
iconList["Waste Bin Remove"] = "img/greenbin.png";
iconList["Waste Bin Damaged"] = "img/greenbin.png";
iconList["Kerbside Clean Up Missed"] = "img/greenbin.png";
iconList["Waste Bins Left Out"] = "img/greenbin.png";
iconList["Waste Management General Information"] = "img/greenbin.png";

iconList[""] = "img/garbage.png";
iconList["Kerbside Clean Up"] = "img/garbage.png";
iconList["Removal of Litter in the CBD"] = "img/garbage.png";
iconList["Remove of Illegally Dumped - Mattress"] = "img/garbage.png";
iconList["Illegally Dumped Rubbish"] = "img/garbage.png";
iconList["Removal of Illegally Dumped - Furniture/Household"] = "img/garbage.png";
iconList["Removal of Illegally Dumped - Hazardous Material"] = "img/garbage.png";
iconList["Removal of Illegally Dumped -Greenwaste"] = "img/garbage.png";
iconList["Removal of Illegally Dumped - General Rubbish"] = "img/garbage.png";
iconList["Request for Removal of Litter"] = "img/garbage.png";
iconList["Removal of Graffiti on Council Land"] = "img/garbage.png";

iconList["Public Health - General Complaint"] = "img/poison.png";
iconList["Food Borne Illness Report"] = "img/poison.png";
iconList["Food Foreign Matter"] = "img/poison.png";
iconList["Food Shop Hygiene & Handling"] = "img/poison.png";
iconList["Pollution Report - Land Contamination"] = "img/poison.png";
iconList["Pollution Report - Noise"] = "img/poison.png";
iconList["Pollution Report - Air"] = "img/poison.png";
iconList["OLD Pollution Report - Air"] = "img/poison.png";
iconList["Pollution Report - Water"] = "img/poison.png";

iconList[""] = "img/water.png";
iconList["Drainage Pit or Pipe Blocked"] = "img/water.png";
iconList["Drainage Investigation"] = "img/water.png";
iconList["Drainage Pit Requires Maintenance"] = "img/water.png";
iconList["Drainage Issues on Private Land"] = "img/water.png";
iconList["Sewerage Overflow Process"] = "img/water.png";

iconList["Abandoned Vehicle"] = "img/car.png";
iconList["Parking Offence"] = "img/car.png";
iconList["Request for Vehicle Access Crossing Inspection"] = "img/car.png";
iconList["Request for New Traffic Calming Device"] = "img/car.png";
iconList["Request for New Bus Stop Seat or Shelter"] = "img/car.png";
iconList[""] = "img/car.png";

iconList[""] = "img/repair.png";
iconList["Maintenance of Council's Parks & Reserves Building"] = "img/repair.png";
iconList["Maintenance of Park Play Equipment"] = "img/repair.png";
iconList["Maintenance of Information Sign"] = "img/repair.png";
iconList["Maintenance of Traffic or Parking Sign"] = "img/repair.png";
iconList["Request for New Traffic or Parking Sign"] = "img/repair.png";
iconList["Request for New Information Sign"] = "img/repair.png";
iconList["Manufacture and Maintain Street Name signs"] = "img/repair.png";

iconList[""] = "img/roadworks.png"
iconList["Repair of Existing Kerb & Gutter"] = "img/roadworks.png"
iconList["Road Restorations"] = "img/roadworks.png"
iconList["Repair of Multiple Potholes / Major Road Repairs"] = "img/roadworks.png";
iconList["Repair of Existing Footpath"] = "img/roadworks.png"
iconList["Repair of a Single Pothole"] = "img/roadworks.png"
iconList["Repair of existing Footpath ( Inspected by OLO's )"] = "img/roadworks.png";
iconList["Improvement of existing Street Lighting"] = "img/roadworks.png"
iconList["Request for New Line Marking"] = "img/roadworks.png"
iconList["Request for New Footpath"] = "img/roadworks.png"
iconList["Footpath Restorations"] = "img/roadworks.png"

iconList["Private Swimming Pool Complaints"] = "img/court.png";
iconList["Fire Safety & Essential Services Building"] = "img/court.png";
iconList["Dev (INTERNAL) - Not in Conformity (Council PCA)"] = "img/court.png";
iconList["OLD -Development - Not in Conformity (Private PCA)"] = "img/court.png";
iconList["Councillor Request - Outcomes"] = "img/court.png";
iconList["Councillor Request - City Services"] = "img/court.png";
iconList["Development - No Consent"] = "img/court.png";
iconList["OLD -Development - No Consent"] = "img/court.png";
iconList["Development - Not in Conformity (Private PCA)"] = "img/court.png";
iconList["Development - Not in Conformity (Council PCA)"] = "img/court.png";
iconList["Swimming Pool Fencing"] = "img/court.png";
iconList["General Obstruction on the Footpath"] = "img/court.png";
iconList["Overgrown Vegetation on Private Land"] = "img/court.png";
iconList["Private Pool Complaint"] = "img/court.png";
iconList["Private Swimming Pool Complaints"] = "img/court.png";
iconList["Breach of Tree Preservation Order on Private Land"] = "img/court.png";
iconList["Unauthorised Boarding Houses"] = "img/court.png";
iconList["Dangerous or Dilapidated Building"] = "img/court.png";
iconList["OLD - Dangerous or Dilapidated Building"] = "img/court.png";
iconList["Programmed Works 12 Months - City Services"] = "img/court.png";
iconList["Request for General Information"] = "img/court.png";
iconList["Request for New Park Facilities/Landscaping/Naming"] = "img/court.png";
iconList["Programmed Works 3 Month - Outcomes"] = "img/court.png";
iconList[""] = "img/court.png";


iconList[""] = "img/trees.png";
iconList["Request for New Tree"] = "img/trees.png";
iconList["Request for Tree Removal"] = "img/trees.png";
iconList["Overgrown Verge that Requires Mowing"] = "img/trees.png";
iconList["Overgrown Vegetation on Council Land"] = "img/trees.png";
iconList["OLD -Overgrown Vegetation on Private Land"] = "img/trees.png";
iconList["Request for Tree Pruning"] = "img/trees.png";
iconList["Request for Tree Stump Grinding"] = "img/trees.png";
iconList["Maintenance of Park Furniture"] = "img/trees.png";
iconList["Tree Investigation (Species Heritage Diseased)"] = "img/trees.png";
iconList["Parks Quarterly Inspections"] = "img/trees.png";
iconList["Noxious Weeds on Private Land"] = "img/trees.png";
iconList["Trees on Private Land Overhanging Council Land"] = "img/trees.png";
iconList["Request for Mowing in a Park"] = "img/trees.png";
iconList["Dangerous Trees on Private Land"] = "img/trees.png";
iconList["Collection of Tree Branches fallen on Council Land"] = "img/trees.png";
iconList["Bushland Maintenance (incl. Walking Tracks)"] = "img/trees.png";
iconList["Maintenance of Council's Parks & Reserves"] = "img/trees.png";

iconList[""] = "img/barking.png";
iconList["Restricted Dog"] = "img/barking.png";
iconList["Barking Dog"] = "img/barking.png";
iconList["Animal Noise/Animal Nuisance"] = "img/barking.png";
iconList["Micro Chipping Service"] = "img/barking.png";
iconList["Vicious Animal or Animal Attack"] = "img/barking.png";
iconList["Stray/Roaming Animal"] = "img/barking.png";
iconList["Animal Noise Complaint"] = "img/barking.png";
iconList["OLD - Animal Noise Complaint"] = "img/barking.png";
iconList["OLD _Stray/Roaming Animal"] = "img/barking.png";
iconList["OLD_ Animal Nuisance Complaint / Info Request"] = "img/barking.png";
iconList["OLD -Vicious Animal or Animal Attack"] = "img/barking.png";

iconList[""] = "img/possum.png";
iconList["Dead Animal on Council Land - Mobility Use Only"] = "img/possum.png";
iconList["Dead Animal on Council Land"] = "img/possum.png";
iconList["Feral Animal Complaint (eg Foxes)"] = "img/possum.png";


iconList[""] = "img/police.png";
iconList["Prohibited Activity"] = "img/police.png";
iconList["Unauthorised Brothels"] = "img/police.png";
iconList["Vandalism of Parks & Reserve"] = "img/police.png";
iconList["Vandalism of Parks & Reserves"] = "img/police.png";
iconList["Insurance Matters"] = "img/police.png";

iconList["Question"] = "img/question.png";
iconList["Map Marker"] = "img/marker.png";
