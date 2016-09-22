window.addEventListener("load",function(){
	var span = document.getElementById('span');
	var boton = document.getElementById("boton");
	var lista = document.getElementById("lista");
	var box = document.getElementById("box")


	span.addEventListener("click",function(e){
		e.preventDefault();
		mostrarBoton();

	});

	function mostrarBoton(){
		boton.style.cssText = "display:block";
		span.style.cssText = "display:none";
		lista.style.cssText = "display:block";
		box.style.cssText = "display:block"
	}
});