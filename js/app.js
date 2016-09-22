window.addEventListener("load", function() {
	var contenTodo = document.getElementById("contieneTodo");
	var contenLista = document.getElementById("contenedorLista");
	var cajaLista = document.getElementById("nuevaLista");
	var formuLista = document.getElementById("formLista");
	var nombreLista = document.getElementById("nombreLista");
	var botonGuardar = document.getElementById("btnGuardar");

	cajaLista.addEventListener("click", function(){
  		cajaLista.style.display = "none";
  		formuLista.style.display = "block";
	});

	botonGuardar.addEventListener("click", function(){
		formuLista.style.display = "none";
		agregarLista(nombreLista, this);
		agregaContenedor();
	});

	function agregarLista(nombre, btnGuardar){
		var padre = btnGuardar.parentElement.parentElement; 
		var nuevaLista = document.createElement("div");
		nuevaLista.innerText = nombre.value;
		padre.insertBefore(nuevaLista, padre.childNodes[0]);
		nuevaLista.classList.add("nomList");

		var tarjeta = document.createElement("div");
		tarjeta.innerText = "Añadir una tarjeta..."
		padre.insertBefore(tarjeta, padre.childNodes[1]);
		tarjeta.classList.add("tarjeta");
	}
	function agregaContenedor(){
		var nuevoContenedor = document.createElement("div");
		contenTodo.appendChild(nuevoContenedor);

		nuevoContenedor.insertBefore(cajaLista, nuevoContenedor.childNodes[0]);
		nuevoContenedor.insertBefore(formuLista, nuevoContenedor.childNodes[0]);
		
		nuevoContenedor.classList.add("nuevoConten");

		cajaLista.style.display = "block";
	}
});