// The idea behind a module is that it'safile of reusable code
// We can import sections of pre-written code to use whenever
// Great for any general utility values and functions
// Helps to make your code more reusable and maintanable
// Think of modules as seperate chapters ofabook

//import {PI, getCircumference, getArea, getCircumference} from "./math_util.js"

import * as MathUtil from "./math_util.js"
console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);