$(function(){
	var geo = navigator.geolocation,
		opciones= {};

	function geo_error(){
		console.log('HHmm no puedo saber tu ubicacions')
	}
	function geo_exito(posicion){
		var lat = posicion.coords.latitude;
		var lon = posicion.coords.longitude;
		var mapa = new Image();
		mapa.src="http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=200x200&sensor=false&center="+lat+","+lon;
		$('#geo').prepend(mapa);

		obtenerGeoInfo(lat,lon);
	}

	geo.getCurrentPosition(geo_exito,geo_error,opciones);
})