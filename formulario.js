var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();
	$postu =$('.item').children(1);

if(localStorage.getItem('autosave')){
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));

};
var id= setInterval(function(){
	localStorage.autosave ="2";
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());

},0);

function mostrarFormulario(e){
	$form.slideToggle();
	return false;
}

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();
	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);
	$clone.hide();
	mostrarFormulario();
	$list.prepend($clone);
	$clone.fadeIn();
	$titulo.val("");
	$url.val("");
	$postu.fadeOut();
	return false;

}

//Eventos
$button.click(mostrarFormulario)
$form.on('submit', agregarPost);
$(document).keydown(function(data) {
if(data.which==38){
	console.log("hola");
}	
  console.log(data.which);
})		
	