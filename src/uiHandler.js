// src/uiHandler.js

import { calcularPrecioFinal } from './orderCalculator.js';

window.calcular = function() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);
    const estado = document.getElementById("estado").value;
    
    const total = calcularPrecioFinal(cantidad, precio, estado);
    document.getElementById("resultado").textContent = `Total: $${total.toFixed(2)}`;
};
