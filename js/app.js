window.addEventListener("load", function() {
	var contenTodo = document.getElementById("contieneTodo");
	var contenLista = document.getElementById("contenedorLista");
	var cajaLista = document.getElementById("nuevaLista");
	var formuLista = document.getElementById("formLista");
	var nombreLista = document.getElementById("nombreLista");
	var botonGuardar = document.getElementById("btnGuardar");

	var tarjeta = document.createElement("div");
	var nuevaLista = document.createElement("div");

	cajaLista.addEventListener("click", function(){
  		cajaLista.style.display = "none";
  		formuLista.style.display = "block";
  		nombreLista.focus();
	});

	botonGuardar.addEventListener("click", function(){
		formuLista.style.display = "none";
		agregarLista(nombreLista, this);
		agregaContenedor();
	});

	function agregarLista(nombre, btnGuardar){
		var padre = btnGuardar.parentElement.parentElement; 
		
		nuevaLista.innerText = nombre.value;
		padre.insertBefore(nuevaLista, padre.childNodes[0]);
		nuevaLista.classList.add("nomList");

		tarjeta.innerText = "Añadir una tarjeta..."
		padre.appendChild(tarjeta);
		tarjeta.classList.add("tarjeta");

		tarjeta.addEventListener("click", function(){
			tarjeta.style.display = "none";
			agregarTarjeta(padre);
		});
	}
	function agregaContenedor(){
		var nuevoContenedor = document.createElement("div");
		contenTodo.appendChild(nuevoContenedor);

		nuevoContenedor.insertBefore(cajaLista, nuevoContenedor.childNodes[0]);
		nuevoContenedor.insertBefore(formuLista, nuevoContenedor.childNodes[0]);
		
		nuevoContenedor.classList.add("nuevoConten");

		cajaLista.style.display = "block";
	}
	function agregarTarjeta(padre){
		var nuevaTarjeta = document.createElement("form");
		var rectangulo = document.createElement("textarea");
		var btnAnadir = document.createElement("button");

		nuevaTarjeta.insertBefore(rectangulo, nuevaTarjeta.childNodes[0]);
		nuevaTarjeta.insertBefore(btnAnadir, nuevaTarjeta.childNodes[1]);
		padre.appendChild(nuevaTarjeta);

		btnAnadir.type = "button";
		btnAnadir.innerText = "Añadir";

		nuevaTarjeta.classList.add("ntarjeta");
		rectangulo.classList.add("ntextarea");
		btnAnadir.classList.add("nboton");

		btnAnadir.addEventListener("click",function(){
			nuevaTarjeta.style.display = "none";
			guardarTarjeta(padre,rectangulo);
		});
	}
	function guardarTarjeta(padre,rectangulo){
		var nombreTarjeta = document.createElement("div");
		nombreTarjeta.innerText = rectangulo.value;
		nuevaLista.appendChild(nombreTarjeta);

		nombreTarjeta.classList.add("cadaTarjeta");
		tarjeta.style.display = "block";
	}
});