/* eslint-disable no-magic-numbers */
/* eslint-disable func-style */
/* eslint-disable no-empty-function */
/* eslint-disable lodash/prefer-noop */

import classes1 from "./index.css"
console.log("Classes from CSS:", classes1)

import classes2 from "./alternate.sss"
console.log("Classes from SSS:", classes2)

import url from "./logo.svg"
console.log("Logo URL:", url)

console.log("ES2016 Enabled:", 2 ** 2 === 4)

new Promise(function(resolve, reject) {
  resolve("resolved")
}).then(function(first) {
  console.log("Promise:", first)
})

const CONSTANT = 123
console.log("Constant:", CONSTANT)

var myArray = [ 1, 2, 3 ]
console.log("Supports Array.includes?:", myArray.includes && myArray.includes(2))

var mySet = new Set(myArray)
console.log("Supports Set:", mySet.add(4))

let x = "outer"
{
  let x = "inner"
  console.log("X Value from inner scope:", x)
}
console.log("X Value from outer scope:", x)

var source = { first: 1, second: 2 }
var destructed = { third: 3, ...source }
console.log("Destructed:", destructed)

class MyClass{
  constructor() {
    console.log("Called constructor")
    this.helper()
  }

  helper() {
    console.log("Called helper")
  }
}

console.log("Initialized class:", new MyClass())

var ReactTest = function() {}

var React = {
  createElement: function(TestClass) {
    return new TestClass()
  }
}

console.log("React Enabled:", <ReactTest>Hello</ReactTest> instanceof ReactTest)
