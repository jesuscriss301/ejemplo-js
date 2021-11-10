
	function leerInputs()
	{
	let url=new URLSearchParams(location.search);
	//Obtener los values
	let numeros=url.getAll("numeros");
	let nombre=url.get('nombre');
	let resultado=document.getElementById("resultado");

	resultado.innerHTML="<br>"+nombre+":"+analizar(numeros);

	}

	function analizar(numeros)
	{
		let sum=0;
		for (var i = 0; i<numeros.length; i++) {
			sum+=Number(numeros[i]);
		}
		return sum;

	}


	function leerURL()
	{

		let url=new URLSearchParams(location.search);
		//Obtiene el value:
		let numero=Number(url.get('numero'));
		let nombre=url.get('nombre');

		let resultado=document.getElementById("resultado");
		resultado.innerHTML=crearInput(numero)+inputHidden(nombre);
	}

	function inputHidden(nombre)
	{

		return "<br> <input type='hidden' name='nombre' value='"+nombre+"' />"; 
	}


	function crearInput(n)
	{

		let in2="\t <br> <input type='number' name='numeros' placeholder='Digite dato @@'/>";
		let inputs="";
		for (var i = 0; i <n; i++) {
			inputs+=in2.replace("@@",i);
		}

		return inputs;

	}

		function leer()
		{
		//let numero1=document.getElementsByName("numero1");
		let numero1=document.getElementById("numero1");
		let numero2=document.getElementById("numero2");
		let numero3=document.getElementById("numero3");
		let mensaje=document.getElementById("mensaje");
		let check=document.getElementsByName("operacion");
		let radio=document.getElementsByName("color");


		let msg="Los datos leídos fueron:"+numero1.value+","+numero2.value+","+numero3.value;
		msg+=leerCamposCheck(check,numero1,numero2,numero3);
		msg+="<br> El vector de radio tiene posiciones:"+radio.length;
		msg+="El color seleccionado fue:"+leerCamposRadio(radio);
		numero1.style.backgroundColor = 'yellow';
		numero1.value="";
		numero2.value="";
		numero3.value="";
		mensaje.innerHTML=msg;

		}



		function leerCamposRadio(radio)
		{
	 	for(let i=0;i<radio.length;i++)
			{
				if(radio[i].checked)
				{

					if(radio[i].value==1)
						return "red";
					else
						return "yellow";
				}

			}

			return "";
		}

		function leerCamposCheck(check,numero1,numero2,numero3)
		{
			let msg="<p>";
			let n1=Number(numero1.value);
			let n2=Number(numero2.value);
			let n3=Number(numero3.value);
			for(let i=0;i<check.length;i++)
			{
				if(check[i].checked)
				{

					if(check[i].value==1)
					{
						//let total=numero1.value+numero2.value+numero3.value;
						let total=n1+n2+n3;
						msg+="&nbsp; Sumando:"+total;
					}
					else
					{
						//let total=numero1.value-numero2.value-numero3.value;
						let total=n1-n2-n3;
						msg+="&nbsp; Restando:"+total;
					}
				}

			}
		return msg+"</p>";	
		}