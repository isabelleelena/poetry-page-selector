import "./styles.css";
import { greet } from "./greet";
import loop from "./01-loop-function/loop-function.js"
import { waitThreeSeconds } from "./02-asynchronous-code/loader.js"

let array = loop();
console.log(array);

waitThreeSeconds();