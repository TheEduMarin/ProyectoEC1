import { calcularSubtotal, calcularImpuesto } from '../src/orderCalculator';

test('Debe calcular correctamente el subtotal', () => {
    expect(calcularSubtotal(5, 10)).toBe(50);
});

test('Debe calcular el impuesto correcto para CA (8.25%)', () => {
    expect(calcularImpuesto(1000, 'CA')).toBe(82.5);
});
