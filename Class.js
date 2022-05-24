class Registro {
    constructor(precio, medioPago, total){
        this.precio = precio;
        this.medioPago = medioPago;
        this.total = this.calcularMonto(this.precio, this.medioPago);
        this.nombreMedioPago = this.obtenerMedioPago(this.medioPago);
    }
    obtenerMedioPago (valor) {
        let medioPago = 'Efectivo (10% de descuento)';
        if(valor == 2){
            medioPago = 'Tarjeta de crédito 1 cuota (10% de interés)';
        }
        if(valor == 3){
            medioPago = 'Tarjeta de crédito 3 cuotas (20% de interés)';
        }
        if(valor == 4){
            medioPago = 'Tarjeta de crédito 12 cuotas (30% de interés)';
        }
        return medioPago;
    }
    calcularMonto = (precio, medioPago) => {
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
    
}
export { Registro }