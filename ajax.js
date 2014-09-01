$(function (){
	$.ajax('logos_footer.html #maestros',function(html){
		$('footer').prepend(html);
	})
	$.get('usuario.json', function(info){
		var avatar = new Image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+' '+info.apellido;
		$('#avatar').html(avatar).append(avatar.title)
	});
});
var base_url = "http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInfo(lat,lon){
	console.log(lat,lon);
	var query = 'select * from geo.placefinder where text="'+lat+','+lon+'" AND gflags ="R"';
	console.log(query);

	query = encodeURIComponent(query);

	$.ajax({
		url: base_url+'q='+query,
		dataType: 'jsonp',
		jsonpCallback: 'procesarGeoInfo',
		data:{
			format: 'json'
		}

	});
}

function obtenerClima(tiempo){
	console.log(tiempo);
	var query = 'select * from weather.forecast where woeid='+tiempo+' and u="c"';
	console.log(query);

	query = encodeURIComponent(query);

	$.ajax({
		url: base_url+'q='+query,
		dataType: 'jsonp',
		jsonpCallback: 'procesarClima',
		data:{
			format: 'json'
		}

	});
}


function procesarGeoInfo(datos){
	console.log(datos);
	var resulador = datos.query.results.Result;
	var barrio = resulador.county;
	var ciudad = resulador.city;
	var pasi = resulador.country;
	var tiempo = resulador.woeid;

	$('#geo').prepend('<p>'+pasi+'<br>'+barrio+'<br>'+ciudad+'</p>')
	obtenerClima(tiempo);
}
function procesarClima(tiempo){
console.log(tiempo)
	var clima = tiempo.query.results.channel;
	var temp = clima.item.condition.temp;
	var unit = clima.units.temperature;
	var cond = clima.item.condition.code;
	var img = new Image();
	img.src= 'http://l.yimg.com/a/i/us/we/52/'+cond+'.gif';

	$('#clima')
	.prepend('<p>'+temp+' '+unit+'°</p>')
}

