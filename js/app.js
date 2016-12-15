; (function(){
	window.addEventListener("load", cargaPagina);

	var contenTodo = document.getElementById("contieneTodo");
	var contenLista = document.getElementById("contenedorLista");
	var cajaLista = document.getElementById("nuevaLista");
	var formuLista = document.getElementById("formLista");
	var nombreLista = document.getElementById("nombreLista");
	var botonGuardar = document.getElementById("btnGuardar");
	var botonCerrar = document.getElementById("btnCerrar");
	var conta = 1;

	function cargaPagina(){
		cajaLista.addEventListener("click", apareceFormulario);
	}
	function apareceFormulario(){
		cajaLista.classList.add("desaparece");
		formuLista.classList.remove("desaparece");
		nombreLista.value = "";
		nombreLista.focus();
		contenLista.classList.add("p-7","estiloLista");

		botonCerrar.addEventListener("click", cerrar);	
		botonGuardar.addEventListener("click", agregar);
	}
	function cerrar(){
		formuLista.classList.add("desaparece");
		cajaLista.classList.remove("desaparece");
	}
	function agregar(e){
		e.preventDefault();
		if (nombreLista.value != "") {
			formuLista.classList.add("desaparece");
			agregarLista(nombreLista, this);
			agregaContenedor();
			nombreLista.value = "";
		}	
	}
	function agregarLista(nombre, btnGuardar){
		var padre = btnGuardar.parentElement.parentElement; 
		var tarjeta = document.createElement("div");
		var nuevaLista = document.createElement("div");

		nuevaLista.innerText = nombre.value;
		nuevaLista.classList.add("nomList");
		padre.insertBefore(nuevaLista, padre.childNodes[0]);

		tarjeta.innerText = "Añadir una tarjeta...";
		tarjeta.classList.add("tarjeta");
		padre.appendChild(tarjeta);

		tarjeta.addEventListener("click", apareceFormuTarjeta);
		padre.addEventListener("dragover", arrastraSobre);
		padre.addEventListener("drop", soltar);
	}
	function agregaContenedor(){
		cajaLista.classList.remove("desaparece");

		var nuevoContenedor = document.createElement("div");
		nuevoContenedor.classList.add("nuevoConten");
		nuevoContenedor.classList.add("p-7", "estiloLista");
		
		nuevoContenedor.insertBefore(cajaLista, nuevoContenedor.childNodes[0]);
		nuevoContenedor.insertBefore(formuLista, nuevoContenedor.childNodes[0]);
		contenTodo.appendChild(nuevoContenedor);
	}
	function apareceFormuTarjeta(){
		this.classList.add("desaparece");
		agregarTarjeta(this.parentElement);
	}
	function agregarTarjeta(padre){
		var nuevaTarjeta = document.createElement("form");
		var rectangulo = document.createElement("textarea");
		var btnAnadir = document.createElement("button");
		var btnClose = document.createElement("button");

		nuevaTarjeta.classList.add("ntarjeta");
		rectangulo.classList.add("ntextarea");
		btnAnadir.classList.add("boton");
		btnClose.classList.add("boton", "cerrar");

		btnAnadir.type = "submit";
		btnAnadir.innerText = "Añadir";
		btnClose.type = "button";
		btnClose.innerText = "X";

		nuevaTarjeta.insertBefore(rectangulo, nuevaTarjeta.childNodes[0]);
		nuevaTarjeta.insertBefore(btnAnadir, nuevaTarjeta.childNodes[1]);
		nuevaTarjeta.insertBefore(btnClose, nuevaTarjeta.childNodes[2]);
		padre.appendChild(nuevaTarjeta);
		
		rectangulo.focus();

		btnAnadir.addEventListener("click", anade)
		btnClose.addEventListener("click", noAnade);
	}
	function anade(e){
		e.preventDefault();

		guardarTarjeta(this.parentElement.parentElement, this.previousSibling);
		this.parentElement.remove();
	}
	function noAnade(){
		this.parentElement.previousSibling.classList.remove("desaparece");
		this.parentElement.remove();
	}
	function guardarTarjeta(padre,rectangulo){
		var nombreTarjeta = document.createElement("div");
		nombreTarjeta.classList.add("cadaTarjeta");
		nombreTarjeta.innerText = rectangulo.value;
		nombreTarjeta.setAttribute("draggable", "true");
		nombreTarjeta.setAttribute("id","tarjeta"+conta);
		
		padre.insertBefore(nombreTarjeta, padre.lastChild);
		padre.appendChild(nombreTarjeta.previousSibling);

		padre.lastChild.classList.remove("desaparece");

		nombreTarjeta.addEventListener("dragstart", empiezaArrastrar);
		nombreTarjeta.addEventListener("dragend", terminaArrastrar);
		nombreTarjeta.addEventListener("dragleave", salioContenedor);

		conta++;
	}
	function empiezaArrastrar(e){
	 	e.dataTransfer.setData("text", this.id);
	 	this.classList.add("estiloArrastrando");
	 	var estilos = document.getElementsByClassName("estiloLista");
	 	for(var i = 0; i < estilos.length; i++){
	 		estilos[i].classList.remove("animated", "bounce", "swing");
	 	}
	}
	function arrastraSobre(e){
	  	e.preventDefault();
	  	this.classList.add("animated", "bounce");
	}
	function salioContenedor(e){
		var estilos = document.getElementsByClassName("estiloLista");
	 	for(var i = 0; i < estilos.length; i++){
	 		estilos[i].classList.remove("animated", "bounce", "swing");
	 	}
	}
	function soltar(e){
		var elementArrastrado = e.dataTransfer.getData("text");
		this.insertBefore(document.getElementById(elementArrastrado), this.lastElementChild);
		this.classList.add("animated", "swing");
	} 
	function terminaArrastrar(e){
		this.classList.remove("estiloArrastrando");
	}
})();