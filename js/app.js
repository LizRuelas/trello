window.addEventListener("load",function(){
	var span = document.getElementById("span");
	var boton = document.getElementById("boton");
	var texto = document.getElementById("texto");
	var box = document.getElementById("box");
	var form = document.getElementById("form");
	var contenedor = document.getElementById("contenedor");



	span.addEventListener("click",function(e){
		e.preventDefault();
		mostrarFormulario();

	});

	

	function mostrarFormulario(){
		box.style.display = "inline-block";
		span.style.display = "none";
		form.style.display = "inline-block";
	}
	
	
});