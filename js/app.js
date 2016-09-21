window.addEventListener("load", function() {
	var cajaLista = document.getElementById("contenedorLista");
	var formuLista = document.getElementById("formLista");

	cajaLista.addEventListener("click", function(){
  		formuLista.style.display = "block";
  		cajaLista.style.display = "none";
	});
});