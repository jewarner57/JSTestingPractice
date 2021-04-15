const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const { util } = require("chai")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function () {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area of a rectangle", function () {
  const area = utils.area(100, 5)
  expect(area).to.be.a("Number")
  expect(area).to.equal(500)
  expect(area).to.be.above(0)
})

it("should return the perimeter of a rectangle", function () {
  const perimeter = utils.perimeter(100, 5)
  expect(perimeter).to.be.a("Number")
  expect(perimeter).to.equal(210)
})

it("should return the area of a cicrcle from its radius", function () {
  const area = utils.circleArea(20)
  expect(area).to.be.a("Number")
  expect(area).to.equal(1256.64)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function () {
  const item = utils.createItem("apple", 0.99)

  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function () {
  const item = utils.createItem("apple", 1.99)
  const item2 = utils.createItem("Pasta", 0.99)

  utils.addItemToCart(item)
  utils.addItemToCart(item2)

  const result = utils.getShoppingCart()

  expect(result).to.be.a("Array")
  expect(result).to.contain(item, item2)
})

it("Should add a new item to the shopping cart", function () {
  const item = utils.createItem("apple", 1.99)

  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  const cartSize = utils.getNumItemsInCart()

  expect(cart).to.contain(item)
  expect(cartSize).to.equal(1)
})

it("Should return the number of items in the cart", function () {
  const item = utils.createItem("apple", 1.99)
  const item2 = utils.createItem("Pasta", 0.99)

  utils.addItemToCart(item)
  utils.addItemToCart(item2)

  const result = utils.getNumItemsInCart()

  expect(result).to.be.a("Number")
  expect(result).to.equal(2)
})

it("Should remove items from cart", function () {
  const item = utils.createItem("apple", 1.99)
  const item2 = utils.createItem("Pasta", 0.99)

  utils.addItemToCart(item)
  utils.addItemToCart(item2)

  utils.removeItemFromCart(item)
  utils.removeItemFromCart("Not an Item")

  const cart = utils.getShoppingCart()
  let cartSize = utils.getNumItemsInCart()

  expect(cart).to.contain(item2)
  expect(cartSize).to.equal(1)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function () {
  const item = utils.createItem("apple", 1.99)
  const item2 = utils.createItem("Pasta", 0.99)

  utils.addItemToCart(item)
  utils.addItemToCart(item2)
  utils.addItemToCart(item2)

  const cartSize = utils.getNumItemsInCart()

  expect(cartSize).to.equal(2)
})

it("Should validate that an empty cart has 0 items", function () {
  const item = utils.createItem("apple", 1.99)
  const item2 = utils.createItem("Pasta", 0.99)

  utils.addItemToCart(item)
  utils.addItemToCart(item2)

  utils.clearCart()
  const cartSize = utils.getNumItemsInCart()

  expect(cartSize).to.equal(0)
})

it("Should return the total cost of all items in the cart", function () {
  const item = utils.createItem("apple", 1.99)
  const item2 = utils.createItem("Pasta", 0.99)

  utils.addItemToCart(item)
  utils.addItemToCart(item2)
  utils.addItemToCart(item2)

  const cartTotal = utils.getCartCost()

  expect(cartTotal).to.be.a("Number")
  expect(cartTotal).to.equal(3.97)
})
