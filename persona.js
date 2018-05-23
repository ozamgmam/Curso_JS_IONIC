function Dni (numero1) //función constructora, función tipo
{
    this.numero = numero1;
}

Dni.prototype =
{
    calcularLetra : function()
    {
        var letra= '';
        const SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";
    
        letra = SECUENCIA_DNI.charAt(this.numero%23);
    
        return letra;
    }
}

//defino un método estático, es decir que promuevo que responda si o no
Dni.esValido = function (cadena)
{
    var valido = false;

        valido = !isNaN(cadena)&&(cadena>0);

    return valido;
}



var dni = new Dni (8831618);
console.log (dni.numero);
console.log ("proto dni");
console.log (dni__proto__);
dni.calcularLetra = dni.calcularLetra();
console.log (letra);

/*var micadena = new String("value");
var micadenamayus = micadena.toUpperCase();
var micadena2 = new String("jose");
var micadenamayus2 = micadena2.toUpperCase();

console.log(micadena);*/