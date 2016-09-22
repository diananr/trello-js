window.addEventListener("load", function() {
	var cajaLista = document.getElementById("contenedorLista");
	var formuLista = document.getElementById("formLista");
	var nombreLista = document.getElementById("nombreLista");
	var botonGuardar = document.getElementById("btnGuardar");
	var contenLista = document.getElementById("contenedor");

	cajaLista.addEventListener("click", function(){
  		cajaLista.style.display = "none";
  		formuLista.style.display = "block";
	});

	botonGuardar.addEventListener("click", function(){
		formuLista.style.display = "none";
		agregarLista(nombreLista);
	});

	function agregarLista(nombre){
		var nuevaLista = document.createElement("div");
		nuevaLista.innerText = nombre.value;
		contenLista.insertBefore(nuevaLista, contenLista.childNodes[0]);
		nuevaLista.classList.add("newList");

		var tarjeta = document.createElement("div");
		tarjeta.innerText = "Añadir una tarjeta..."
		contenLista.insertBefore(tarjeta, contenLista.childNodes[1]);
		tarjeta.classList.add("tarjeta");
	}
});