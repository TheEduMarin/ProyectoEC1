import { calcularSubtotal } from '../src/orderCalculator';

test('Debe calcular correctamente el subtotal', () => {
    expect(calcularSubtotal(5, 10)).toBe(50);
});
