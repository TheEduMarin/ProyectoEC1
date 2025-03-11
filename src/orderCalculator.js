export function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}

const impuestos = { UT: 0.0665, NV: 0.08, TX: 0.0625, AL: 0.04, CA: 0.0825 };

export function calcularImpuesto(total, estado) {
    return total * (impuestos[estado] || 0.0825);
}

const descuentos = [{ limite: 30000, tasa: 0.15 }, { limite: 10000, tasa: 0.10 },
    { limite: 7000, tasa: 0.07 }, { limite: 3000, tasa: 0.05 },
    { limite: 1000, tasa: 0.03 }];

export function calcularDescuento(total) {
for (const descuento of descuentos) {
if (total >= descuento.limite) return total * descuento.tasa;
}
return 0;
}
