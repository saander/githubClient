
$('input').keyup(function(e)){

	var nombre = $(this).val();
	if (nombre && e. keyCode === 13){
		var promesa = $.get('http://api.github.com/users/'+nombre);
		var link = 'http//api.github.com/users'+nombre;
	promesa.done(x=>console.log(location.href=link))
	 .fail(x=>console.log(error));
	}
})