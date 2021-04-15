// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  return w * h
}

const perimeter = (w, h) => {
  // should return the perimeter
  return (2 * w) + (2 * h)
}

const circleArea = r => {
  // should return the area of the circle
  return parseFloat((Math.PI * (r * r)).toFixed(2));
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

let shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  if (shoppingCart.includes(item)) {
    index = shoppingCart.indexOf(item)
    shoppingCart[index].quantity = shoppingCart[index].quantity + 1
  }
  else {
    shoppingCart.push(item)
  }
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const index = shoppingCart.indexOf(item)

  if (index !== -1) {
    if (shoppingCart[index].quantity > 1) {
      shoppingCart[index].quantity = shoppingCart[index].quantity - 1
    }
    else {
      shoppingCart.splice(index, 1)
    }
  }
}

const getCartCost = () => {
  let totalCost = 0
  shoppingCart.map((item, index) => {
    totalCost += item.price * item.quantity
  })

  return parseFloat(totalCost.toFixed(2))
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, getCartCost
}
