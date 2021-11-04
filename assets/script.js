const cartCheckout = document.querySelector('.cart-checkout')
const quantityAddButton = document.querySelector('#quantity-up')
const quantityRemoveButton = document.querySelector('#quantity-down')
const totalQuantity = document.querySelector('.total-quantity')
const checkoutButton = document.querySelector('.btn-checkout')

let totalCostOnPage = document.querySelector('.product-info').children[1].textContent.split(' ', 1)[0].replace('$', '')
let quantity = parseInt(totalQuantity.textContent.split(' ', 2)[1])
let totalCost = parseFloat(totalCostOnPage)
let checkoutTotalPrice = (totalCost * quantity)

cartCheckoutTotalDisplay = document.createElement('p')
cartCheckout.append(cartCheckoutTotalDisplay)

quantityAddButton.addEventListener('click', function(e) {
    quantity++
    checkoutTotalPrice = (totalCost * quantity)
    totalQuantity.textContent = `Quantity: ${quantity}`;

})

quantityRemoveButton.addEventListener('click', function(e) {
    if (!quantity == 0) {
        quantity--
        checkoutTotalPrice = (totalCost * quantity)
        totalQuantity.textContent = `Quantity: ${quantity}`;
    }
})

checkoutButton.addEventListener('click', function(e) {
    cartCheckoutTotalDisplay.textContent = `Your total to pay: $${checkoutTotalPrice.toFixed(2)}`
})