var i =0;
var pagina =0;
function cargarUniversidades()
{
	let url="https://programacion-web---i-sem-2019.gitlab.io/persistencia/json_web/json/universidades.json";
	let m="";
	let table="<div class='accordion accordion-flush' id='accordionFlushExample'>";

	let fila= "<div class='accordion-item'>"+
    "\n <h2 class='accordion-header' id='flush-headingOne'>" +
    "\n <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' aria-expanded='false' aria-controls='flush-collapseOne'>" +
    "@@" +
    "\n </button>" +
    "\n </h2>" +
    "\n <div id='flush-collapseOne' class='accordion-collapse collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>" +
    "\n <div class='accordion-body'>" +
    "<div class='container'>"+
    "<div class='row align-items-start'>"+
    "<div class='col-9'>"+
    "<a href='&&'> &&</a>"+
		administrador() +
    "</div>"+
    "<div class='col-3'>"+
    "<img src='https://api.qrserver.com/v1/create-qr-code/?size=150x50&data=&&' />"+
    "</div>"+
    "</div>"+
    "</div>" +
    "\n </div>" +
    "\n </div>" +
    "\n </div>";


	fetch(url, {method:"GET", headers: { origin:"dominio.com" }}).then(response=>response.json()).then(response=>{


		for (i; i < response.length; i++) {

			//if (i==response.length) {break;}
			m+=fila.replace("@@",response[i].name).
							replaceAll("&&",response[i].web_pages[0]).
							replaceAll("flush-collapseOne","flush-collapse"+i).
							replaceAll("flush-headingOne","flush-heading"+i);
		}

		m=table+m+"\n</div>";
		document.getElementById("universidades").innerHTML=m;
		//pagination(response);
	});


}


function administrador(){

let msg=""
msg ="\n <div class='card'>" +
		 "\n <div class='container'>" +
		 "\n <div class='row align-items-start'>" +
		 "\n <div class='col-9'>" +
		 "\n <ul>" +
				"\n <li> Administrador: name </li>" +
				"\n <li> email: leer_email </li>" +
				"\n <li> ciudad: leerciudad </li>" +
				"\n <li> estado: leer_estado </li>" +
				"\n <li> pais: leerPais </li>" +
		 "\n </ul>" +
		 "\n </div>" +
		 "\n <div class='col-3'>" +
		 "\n <img src='photo' />" +
		 "\n </div>" +
		 "\n </div>" +
		 "\n </div>" +
		 "\n </div>"
		 let data;
		 var nombre="";
		 var email="";
		 var city= "";
		 var state="";
		 var country="";
		 var photo="";
		 fetch("https://randomuser.me/api/",{method:"GET", headers: { origin:"dominio.com" }}).then(response=>response.json()).then(response=>{
			 data=response;
			 nombre=data.results[0].name.first+"&nbsp;"+data.results[0].name.last;
			 email=data.results[0].email;
			 city=data.results[0].location.city;
			 state=data.results[0].location.state;
			 country=data.results[0].location.country;
			 photo=data.results[0].picture.large;
			console.log(nombre);
			console.log(email);
			console.log(city);
			console.log(state);
			console.log(country);
			console.log(photo);

			
		msg.replace("name", nombre)
		msg=msg.replace("leer_email",email)
		.replace("leerciudad",city)
		.replace("leer_estado",state)
		.replace("leerPais",country)
		.replace("photo","https://randomuser.me/api/portraits/women/60.jpg");
		 return msg;


		});


}
