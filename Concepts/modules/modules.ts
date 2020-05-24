// es6 way
import rectangleArea from "./rectangle";
import { circleArea as circle } from "./circle";

// commonjs way
const { cubeArea } = require("./cube");

console.log(rectangleArea(4, 5));
console.log(circle(7));
console.log(circle(45));
console.log(cubeArea(5));
