// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subTotal = product.querySelector('.subtotal span');

  //price.innerText = price
  //quantity.value = quantity

  let resultSubTotal = price.innerText * quantity.value;

  subTotal.innerText = resultSubTotal;

  //subTotal.append(resultSubTotal)
  return resultSubTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const product = document.querySelectorAll('.product');

  // ITERATION 2
 
  let result = 0
  product.forEach((product, index) => {
    result += updateSubtotal(product);
    
  });



  // ITERATION 3
  let totalDOM = document.querySelector('#total-value span');

  totalDOM.innerText = result;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  target.parentNode.remove()
  calculateAll() // Actualizar precio cada vez que se clica y se acciona el remove
  
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  let removeButton = document.querySelectorAll('.action')
  // No se si esta bien la direccion .btn
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeButton.forEach((eachButtonDOM) => {
    eachButtonDOM.addEventListener("click", removeProduct)
    
  })
  
});
