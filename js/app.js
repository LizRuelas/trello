window.addEventListener("load" , cargarPagina);
	var contador = 0;
	var span = document.getElementById("span");
	var boton = document.getElementById("boton");
	var texto = document.getElementById("texto");
	var box = document.getElementById("box");
	var contenedor = document.getElementById("contenedor");
function cargarPagina(){
	span.addEventListener("click", añadirLista); 
	boton.addEventListener("click", mostrarSpan);
	boton.addEventListener("click", crearLista);
}
function añadirLista(e){
	e.preventDefault();
	box.style.display = "inline-block";
	span.style.display = "none";
	form.style.display = "inline-block";
	texto.focus();
}
function mostrarSpan(e){
	e.preventDefault();
	box.style.display = "none";
	span.style.display = "inline-block";
}
function crearLista(){
	var lista = document.createElement("div");
	lista.textContent = texto.value;
	lista.classList.add("lista");
	contenedor.insertBefore(lista,span.previousSibling);
	texto.value = "";
	var nuevaTarjeta = document.createElement("a");
	nuevaTarjeta.href= "#";
	var nodoTarjeta =document.createTextNode("Añadir una tarjeta ...")
	nuevaTarjeta.appendChild(nodoTarjeta);
	lista.appendChild(nuevaTarjeta);
	nuevaTarjeta.classList.add("tarjeta");
	nuevaTarjeta.addEventListener("click" , añadirNuevaTarjeta);
	lista.addEventListener("drop" , soltar);
	lista.addEventListener("dragover", dragover);
	lista.addEventListener("dragleave" , dragleave);
	lista.addEventListener("dragend" , dragend);
}
function añadirNuevaTarjeta(e){
	e.preventDefault();
	this.style.display = "none";
	var form = document.createElement("form");
	var area = document.createElement("textArea");
	area.classList.add("areaTexto");
	area.setAttribute("type" , "text");
	var nuevoBoton = document.createElement("button");
	var nodoBoton = document.createTextNode("Añadir");
	nuevoBoton.classList.add("nuevoBoton");
	nuevoBoton.setAttribute("type" , "submit");
	nuevoBoton.appendChild(nodoBoton);
	var x = document.createElement("i");
	x.setAttribute("class" , "material-icons");
	x.classList.add("icono");
	x.innerHTML = "delete";
	x.addEventListener("click" , eliminar);
	form.appendChild(area);
	form.appendChild(nuevoBoton);
	form.appendChild(x);
	this.parentElement.insertBefore(form,this.nextSibling)
	nuevoBoton.addEventListener("click" , crearNuevaTarjeta)
	area.focus();
}
function eliminar(){
	this.style.display = "none";
	this.parentElement.style.display = "none";
	this.parentElement.previousSibling.style.display = "block";
}
function crearNuevaTarjeta(e){
	e.preventDefault();
	this.parentElement.style.display = "none";
	this.parentElement.previousSibling.style.display = "block";
	var textoTarjeta = document.createElement("div");
	textoTarjeta.classList.add("areaTarjeta");
	textoTarjeta.textContent = this.previousSibling.value;
	this.parentElement.parentElement.insertBefore(textoTarjeta,this.parentElement.previousSibling);
	textoTarjeta.draggable="true";
	textoTarjeta.id = "id" + contador;
	contador +=1;
	textoTarjeta.addEventListener("dragstart" , empiezaArrastrar);
}
function empiezaArrastrar(e){
	e.dataTransfer.setData("text", this.id);
	console.log("empieza");
	this.classList.add("opacity");
}
function soltar(e){
	var elementoArrastrado = document.getElementById(e.dataTransfer.getData("text"));
	this.insertBefore(elementoArrastrado , this.children[0]);
	this.children[0].classList.remove("opacity");
	this.classList.remove("bcolor");
	this.classList.remove("animated" , "tada");
}
function dragover(e){
	e.preventDefault();
	this.classList.add("bcolor");
	
}
function dragleave(e){
	e.preventDefault();
	this.classList.remove("bcolor");
}
function dragend(e){
	this.classList.add("animated" , "tada");
}







