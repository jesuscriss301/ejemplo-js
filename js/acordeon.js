function cargarUniversidades()
{
	let url="https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?country=colombia";
	let m="";
	let table="<div class='accordion accordion-flush' id='accordionFlushExample'>";

	let fila= "<div class='accordion-item'>"+
    "\n <h2 class='accordion-header' id='flush-headingOne'>" +
    "\n <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' aria-expanded='false' aria-controls='flush-collapseOne'>" +
    "@@" +
    "\n </button>" +
    "\n </h2>" +
    "\n <div id='flush-collapseOne' class='accordion-collapse collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>" +
    "\n <div class='accordion-body'>" +"\n &&"+ "\n </div>" +
    "\n </div>" +
    "\n </div>"
	fetch(url, {method:"GET", headers: { origin:"dominio.com" }}).then(response=>response.json()).then(response=>{

		for (var i = 0; i < response.length; i++) {
			m+=fila.replace("@@",response[i].name).replace("&&",response[i].web_pages[0]).replaceAll("flush-collapseOne","flush-collapse"+i).replaceAll("flush-headingOne","flush-heading"+i);
		}

		m=table+m+"\n</div>";
		document.getElementById("universidades").innerHTML=m;

	});


}
