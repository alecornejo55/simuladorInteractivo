import { Registro } from "./Class.js";
const historial = [];
const init = () => {
    let precio, medioPago;
    let error = true
    while(error){
        precio = parseFloat(prompt("Ingrese un valor a calcular"));
        medioPago = parseInt(prompt(`Elija un medio de pago: \n1- Efectivo (10% de descuento)\n2- Tarjeta de crédito 1 cuota (10% de interés)\n3- Tarjeta de crédito 3 cuotas (20% de interés)\n4- Tarjeta de crédito 12 cuotas (30% de interés)`))
        if((isNaN(precio) || precio <= 0)){
            alert("Eliga un precio válido y mayor a 0");
            continue;
        }
        if(isNaN(medioPago) || (medioPago<1 || medioPago>4)){
            alert("Medio de pago incorrecto");
            continue;
        }
        const nuevoRegistro = new Registro(precio, medioPago);
        historial.push(nuevoRegistro);
        alert(`Precio: $${precio}\nMedio de pago: ${nuevoRegistro.nombreMedioPago}\nTotal: $${nuevoRegistro.total}`);
        error = false;
    }
}

let continuar = true;
while(continuar){
    init();
    if(!confirm("¿Desea calcular otro monto?")){
        continuar = false;
        if(historial.length===0){
            break;
        }
        if(confirm("Proceso terminado. ¿Desea ver el historial de precios?")){
            let textoMostrar = "Historial:\n";
            historial.map((row)=>textoMostrar += `• Precio: ${row.precio} - Medio de pago: ${row.nombreMedioPago} - Total: ${row.total}\n`);
            alert(textoMostrar);
        }
    }
}