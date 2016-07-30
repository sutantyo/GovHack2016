// This class extends Google Maps' OverlayView class
OverlayView.prototype = new google.maps.OverlayView();

// Some functions of the OverlayView class are redefined below
function OverlayView(){

	var _projection;
	var _main_layer;
	this.main_svg

	var x_padding = 62;
	var y_padding = -56;
	var boundary_points = [];

	var offset;
	var transition_time;

	this.show_labels = false;
	this.show_edges = true;

	this.incidents = [];
	this.edges = [];

	this.show

	this.setTransitionTime = function(input){
		transition_time = input;
	};

	this.setBoundaries = function(input){
		boundary_points = input;
	};

	this.onAdd = function() {
		console.log('onAdd');
		_main_layer  = d3.select(this.getPanes().overlayMouseTarget).append('div').attr('id','main-layer');
		this.main_svg	=	_main_layer.append('svg').style('position','absolute')
	};

	this.onRemove = function() {
		_main_layer.remove();
	};

	this.drawIncidents = function(incidents) {
		this.incidents = incidents;
		this.main_svg.selectAll('image').data(this.incidents,function(d){return d.id}).enter().append('svg:image')
			.attr({
				'class' : 'iconpic',
				'x' : function(d){return find_pixel_position_of(d).x - offset.x - 20},
				'y' : function(d){return find_pixel_position_of(d).y - offset.y - 20},
				'width' : '36px',
				'height' : '36px',
				'xlink:href' : function(d){if (iconList[d.type]) return iconList[d.type]; else return iconList["Question"];}
			})
			.append("svg:title")
			.text(function(d){return d.type + "\n" + d.address + "\n" + d.date_received})

	}

	this.draw = function() {
		console.log("called draw");
		_projection = this.getProjection();
		var _NW_point = find_pixel_position_of(boundary_points[0]);
		offset = {x : _NW_point.x, y : _NW_point.y};

		//this.main_svg.selectAll("rect#redrect").remove()
		this.main_svg
			.style('left', offset.x + 'px')
			.style('top', offset.y + 'px')
			.attr({
				'height': distance_in_pixels_between(boundary_points[0],boundary_points[3]),
				'width': distance_in_pixels_between(boundary_points[0],boundary_points[1])
				})
				/*
				.append('rect')
			.attr({
				'id':'redrect',
				'height':'100%',
				'width':'100%',
				'fill':'red',
				'fill-opacity':0.1
			})

				*/
		//this.incidents.each(this.drawIncidents);
		//console.log("incidents is " + incidents[0]);
		//incidents.each(update_circle_position2);

		var incidents = this.main_svg.selectAll('image.iconpic').data(this.incidents,function(d){return d.id});
		incidents.each(update_circle_position2);

		/*
		var labels = this.main_svg.selectAll('text').data(this.incidents,function(d){return d.id});
		labels
			.attr({
				'x': function(d){return find_pixel_position_of(d).x - offset.x + 7},
				'y': function(d){return find_pixel_position_of(d).y - offset.y + 5},
				'fill': function(d){ return d.color}
			})
			.text(function(d){ return d.id })
			.style('fill-opacity',1)
			*/

	};

	var lineFunction = d3.svg.line()
		.x(function(d) {return find_pixel_position_of(d).x - offset.x;})
		.y(function(d) {return find_pixel_position_of(d).y - offset.y;})
		.interpolate('linear');

	function find_pixel_position_of(d){
		var LatLng = new google.maps.LatLng(d.x, d.y);
		var position = _projection.fromLatLngToDivPixel(LatLng);
		return position;
	}
	function distance_in_pixels_between(d1,d2){
		d1 = find_pixel_position_of(d1);
		d2 = find_pixel_position_of(d2);
		var distance = Math.sqrt((d2.x-d1.x)*(d2.x-d1.x)+(d2.y-d1.y)*(d2.y-d1.y));
		return distance;
	};

	function update_circle_position(d){
		console.log(d);
		var position = find_pixel_position_of(d);
		return d3.select(this)
			.transition().duration(transition_time*1.00)
			.style('fill-opacity',1)
			.attr({
				'cx': function(d){return position.x - offset.x},
				'cy': function(d){return position.y - offset.y},
				'r': 6,
				'fill': function(d){return d.color},
				'stroke': 'white'
			})
	}
	function update_circle_position2(d){
		var position = find_pixel_position_of(d);
		return d3.select(this)
			.style('fill-opacity',1)
			.attr({
				'x' : function(d){return position.x-offset.x-20},
				'y' : function(d){return position.y-offset.y-20},
				'width' : '36px',
				'height' : '36px',
				'xlink:href' : function(d){if (iconList[d.type]) return iconList[d.type]; else return iconList["Question"];}
			})
			.append("svg:title")
			.text(function(d){return d.type})
	}
	function set_circle_position(d){
		var position = find_pixel_position_of(d);
		return d3.select(this)
			.style('fill-opacity',1)
			.style('position','absolute')
			.attr({
				'cx': function(d){return position.x - offset.x},
				'cy': function(d){return position.y - offset.y},
				'r':6,
				'fill': function(d){return d.color},
				'stroke': 'white'
			})
			.append("svg:title")
			.text(function(d){return d.type})
	}


}// end class
