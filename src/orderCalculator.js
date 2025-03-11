export function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}

const impuestos = { UT: 0.0665, NV: 0.08, TX: 0.0625, AL: 0.04, CA: 0.0825 };

export function calcularImpuesto(total, estado) {
    return total * (impuestos[estado] || 0.0825);
}
