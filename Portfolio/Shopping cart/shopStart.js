let productPrices = [7.5, 9.5, 8.5, 7.5];

let cartQty = [0, 0, 0, 0];
let rowTotals = [0, 0, 0, 0];

function addToCart(index) {
    cartQty[index]++;
    rowTotals[index] = cartQty[index] * productPrices[index];
    updateTable();
}

function removeFromCart(index) {
    if (cartQty[index] > 0) {
        cartQty[index]--;
        rowTotals[index] = cartQty[index] * productPrices[index];
    }
    updateTable();
}

function updateTable() {
    for (let i = 0; i < cartQty.length; i++) {
        document.getElementById("qty" + i).innerHTML = cartQty[i];
        document.getElementById("total" + i).innerHTML =
            "R" + rowTotals[i].toFixed(2);
    }
}

function checkout() {
    let total = 0;

    for (let i = 0; i < rowTotals.length; i++) {
        total += rowTotals[i];
    }

    document.getElementById("totalOutput").innerHTML =
        "Total: R" + total.toFixed(2);
}