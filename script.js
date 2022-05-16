const calcularMonto = (precio, medioPago) => {
    let total=0;
    switch(medioPago){
        case 1:
            total = precio * 0.9;
            break;
        case 2:
            total = precio * 1.1;
            break;
        case 3:
            total = precio * 1.2;
            break;
        case 4:
            total = precio * 1.3;
            break;
    }
    return total;
}
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
        alert(`Precio: $${precio}\nMedio de pago: ${medioPago}\nTotal: $${calcularMonto(precio, medioPago)}`);
        error = false;
    }
}

let continuar = true;
while(continuar){
    init();
    if(!confirm("¿Desea calcular otro monto?")){
        continuar = false;
    }
}