
//created by: moussa djassir fadoul reg 25/30699 role javascript interaction engeneering

const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const total = document.getElementById("total");

function calculateTotal() {
    const q = parseFloat(quantity.value) || 0;
    const p = parseFloat(price.value) || 0;
    total.textContent = q * p;
}

quantity.addEventListener("input", calculateTotal);
price.addEventListener("input", calculateTotal);