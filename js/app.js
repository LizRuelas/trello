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
		texto.focus();
	});

	boton.addEventListener("click",function(e){
		e.preventDefault();
		mostrarLista();
		texto.value = "";
	});

	function mostrarFormulario(){
		box.style.display = "inline-block";
		span.style.display = "none";
		form.style.display = "inline-block";
	}
	function mostrarLista(){
		box.style.display = "none";
		span.style.display = "inline-block";
		var lista = document.createElement("div");
		var nodo = document.createTextNode(texto.value);
		lista.classList.add("textBold");
		lista.appendChild(nodo);
		lista.classList.add("lista");
		contenedor.insertBefore(lista,span.previousSibling);
		lista.style.display = "inline-block";
		lista.style.cssFloat = "left";

		var nuevaTarjeta = document.createElement("a");
		nuevaTarjeta.href= "#";
		var nodoTarjeta =document.createTextNode("Añadir una tarjeta ...")
		nuevaTarjeta.appendChild(nodoTarjeta);
		lista.appendChild(nuevaTarjeta);
		nuevaTarjeta.classList.add("tarjeta");

		nuevaTarjeta.addEventListener("click", function(){
			nuevaTarjeta.style.display = "none";

			var area = document.createElement("textarea");
			area.classList.add("areaTexto");
			lista.appendChild(area);
			lista.insertBefore(area,nodo.nextSibling);

			var nuevoBoton = document.createElement("button");
			var nodoBoton = document.createTextNode("Añadir");
			nuevoBoton.classList.add("nuevoBoton");
			nuevoBoton.appendChild(nodoBoton);
			lista.appendChild(nuevoBoton);
			lista.insertBefore(nuevoBoton,area.nextSibling);

		nuevoBoton.addEventListener("click",function(){
			area.style.display= "none";
			nuevoBoton.style.display="none";
			nuevaTarjeta.style.display="block"
			var listaTarjeta = document.createElement("textarea");
			var nodoListTarjeta = document.createTextNode(area.value);
			listaTarjeta.classList.add("areaTarjeta");
			listaTarjeta.appendChild(nodoListTarjeta);
			lista.appendChild(listaTarjeta);
			lista.insertBefore(listaTarjeta,nodo.nextSibling);
		}); 

		});
	}
});