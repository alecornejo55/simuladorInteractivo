import { Registro } from "./Class.js";
const historial = [];

const calcularMonto = (precio, medioPago) => {
    let valorInteres = 1.3;
    if(medioPago == 1){
        valorInteres = 0.9;        
    }
    if(medioPago == 2){
        valorInteres = 1.1;        
    }
    if(medioPago == 3){
        valorInteres = 1.2;        
    }
    return (precio * valorInteres).toFixed(2);
}
const init = () => {
    let precio, medioPago;
    let error = true
    while(error){
        let total;
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
        total = calcularMonto(precio, medioPago);
        historial.push(new Registro(precio, medioPago, total));
        alert(`Precio: $${precio}\nMedio de pago: ${medioPago}\nTotal: $${total}`);
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
            historial.map((row)=>textoMostrar += `• Precio: ${row.precio} - Medio de pago: ${row.medioPago} - Total: ${row.total}\n`);
            alert(textoMostrar);
        }
    }
}