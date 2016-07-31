var clearData = function(){
    $('h3#address').empty();
};

var showAddress = function(address) {
    $('div#toptext')
        .empty()
        .append($('<div style="font-size: 16pt;">').text(address));
}

var showNearestStation = function(stns, stops) {
    var STATION_MAX_DIST = 0.02;

    var station_index = 0;
    var out = '';
    while (station_index < 3 && stns[station_index] && (stns[station_index].dist < STATION_MAX_DIST) || station_index==0) {

        this_stn = stns[station_index];
        
        if (station_index == 0)
            out += '<p>Nearest train station is <b>' + this_stn.name + '</b>';
        else
            out += '<p>Next nearest train station is <b>' + this_stn.name + '</b>';
        out += '<br/>';
        console.log(this_stn);
        out += '<span class="station_subinfo">' + this_stn.walktime.duration.text + ' walk (' + this_stn.walktime.distance.text + ')</span>';
        out += '<br/>';
        out += '<span class="station_subinfo">' + this_stn.drivetime.duration.text + ' drive (' + this_stn.drivetime.distance.text + ')</span>';
        out += '</p>';

        station_index++;
    }
    $('#nearest_station').html(out);

    var station_index = 0;
    var out = '';
    while (station_index < 3 && stops[station_index] && (stops[station_index].dist < STATION_MAX_DIST) || station_index==0) {

        this_stn = stops[station_index];
        
        if (station_index == 0)
            out += '<p>Nearest bus stop is <b>' + this_stn.name + '</b>';
        else
            out += '<p>Next nearest bus stop is <b>' + this_stn.name + '</b>';
        out += '<br/>';
        console.log(this_stn);
        out += '<span class="station_subinfo">' + this_stn.walktime.duration.text + ' walk (' + this_stn.walktime.distance.text + ')</span>';
        out += '<br/>';
        out += '<span class="station_subinfo">' + this_stn.drivetime.duration.text + ' drive (' + this_stn.drivetime.distance.text + ')</span>';
        out += '</p>';

        station_index++;
    }
    $('#nearest_stop').html(out);
}