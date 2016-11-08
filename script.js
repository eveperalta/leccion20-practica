setTimeout(segundero(),6000);

function segundero(){
	var tiempo = setInterval(alertFunction(), 6000);
	alert("cambio el texto");
}
function alertFunction(){
	alert(document.getElementById("titulo").innerHTML =("5"));

}
var retornoTxt = setInterval(segundero(), 2000);
function stopAlert(){

	clearInterval(retornoTxt);
}