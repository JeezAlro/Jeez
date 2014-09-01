$(function (){
var geo = navigator.geolocation;
console.log(geo);
var cosa={}
function mostrar(posicion){
	console.log(posicion);
	var lat = posicion.coords.latitude;
	var lon = posicion.coords.longitude;
	console.log(lat+" "+lon)
	var html = '<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d10983.908985226486!2d'+lon+'!3d'+lat+'!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2ses!4v1409535191066" width="100%" height="200" frameborder="0" style="border:0"></iframe>'
	$('#geo').append(html);

	obtenerUbicacion(lat,lon);
}
function  error(){
	console.log("error");


}
 geo.getCurrentPosition(mostrar,error,cosa)
});

