var imagenes = [];
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";

class Billete
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
		this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
	}
}

var caja = [];
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 25) );
caja.push( new Billete(10, 50) );

contar();

var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);

function entregarDinero()
{
	var dibujado = [];
	var dinero = document.getElementById("dinero");
	dinero = parseInt(dinero.value);
	if (total >= dinero)
	{
		for(billetes of caja)
		{
			if (dinero > 0)
			{
				divivision = Math.floor(dinero/billetes.valor);
				if (divivision > billetes.cantidad)
				{
					papeles = billetes.cantidad;
				}
				else
				{
					papeles = divivision;
				}
					billetes.cantidad += -  papeles;
				for (var i = 0; i < papeles; i++)
				{
					dibujado.push ( new Billete(billetes.valor, 1) );
				}
				dinero = dinero - (billetes.valor * papeles);
			}
		}
		if (dinero == 0)
		{
			resultado.innerHTML += "Se ha retirado: <br />";
			for(var e of dibujado)
			{
				resultado.innerHTML += "<img src=" + e.imagen.src + " />";
			}
			resultado.innerHTML += "<hr />";
		contar();
		}
		else
		{
			resultado.innerHTML += "No tengo los billetes para esa suma, intenta otro valor <hr />";
		}

	}
	else
	{
		resultado.innerHTML += "Soy un cajero pobre y no tengo dinero :( <hr />";
	}
}

function contar()
{
	total = 0
	for (var total_caja of caja)
	{
		total = total + total_caja.valor * total_caja.cantidad;
	}
  console.log(total)
}
