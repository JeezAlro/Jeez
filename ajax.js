$(function(){

	

});
var url_base='https://query.yahooapis.com/v1/public/yql?q=';

function obtenerUbicacion(lat,lon){
		console.log(lat+"y"+lon); 
		var query= 'select * from geo.placefinder where text="'+lat+', '+lon+'" and gflags="R"';
		console.log(query);
		query= encodeURIComponent(query);
		console.log(query);
		$.ajax({
			url: url_base+query,
			dataType: 'jsonp',
			jsonpCallback: 'procesar',
			data:{
				format:'json'
			}
		})
	};	
function procesar(datos){
	console.log(datos)
	var ubicacion= datos.query.results.Result;
	var pais = ubicacion.country;
	var estado = ubicacion.county

	$('#clima').append('<br>'+pais+' '+estado);
	obtenerClima(ubicacion);
};
function obtenerClima(ubicacion){
	console.log(ubicacion)
	var idclima = ubicacion.woeid;
	console.log(idclima);
	var query= 'select * from weather.forecast where woeid="'+idclima+'" and u="c"';
	console.log(query);
	query= encodeURIComponent(query);
	console.log(query)
	$.ajax({
		url: url_base+query,
		dataType: 'jsonp',
		jsonpCallback: 'procesarClima',
		data:{
			format: 'json'
		}

	})
};
function procesarClima(datos){
	console.log(datos)
	var infoC= datos.query.results.channel.item;
	var temp= infoC.condition.temp;
	var code = infoC.condition.code;
	var img = new Image()
	 img.src= 'http://l.yimg.com/a/i/us/we/52/'+code+'.gif'
	console.log(temp+" "+code)
	$('#clima').prepend(temp+"°").prepend(img)
};