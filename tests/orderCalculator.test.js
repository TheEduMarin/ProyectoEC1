import { calcularSubtotal, calcularImpuesto, calcularDescuento, calcularPrecioFinal } from '../src/orderCalculator';

test('Debe calcular correctamente el subtotal', () => {
    expect(calcularSubtotal(5, 10)).toBe(50);
});

test('Debe calcular el impuesto correcto para CA (8.25%)', () => {
    expect(calcularImpuesto(1000, 'CA')).toBe(82.5);
});

test('Debe aplicar 5% de descuento para una orden de $3000', () => {
    expect(calcularDescuento(3000)).toBe(150);
});

test('Debe calcular el precio final correctamente', () => {
    expect(calcularPrecioFinal(5, 100, 'CA')).toBeCloseTo(541.25, 2); 
});