var clearData = function(){
    $('h3#address').empty();
};

var showAddress = function(address) {
    $('#address').text(address);
}

var showNearestStation = function(stns) {
    var STATION_MAX_DIST = 0.02;

    var station_index = 0;
    console.log(stns);
    var out = '';


    while (station_index < 3 && stns[station_index] && (stns[station_index].dist < STATION_MAX_DIST) || station_index==0) {

        this_stn = stns[station_index];
        
        if (station_index == 0)
            out += 'Nearest station is <b>' + this_stn.name + '</b>';
        else
            out += 'Next nearest station is <b>' + this_stn.name + '</b>';
        out += '<br/>';
        out += '<span class="station_subinfo">' + this_stn.walktime.duration.text + ' walk (' + this_stn.walktime.distance.text + ')</span>';
        out += '<br/>';
        out += '<span class="station_subinfo">' + this_stn.drivetime.duration.text + ' drive (' + this_stn.drivetime.distance.text + ')</span>';
        out += '<br/>';

        station_index++;
    }


    $('#nearest_station').html(out);
}