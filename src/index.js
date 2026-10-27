import "./styles.css";
import { greet } from "./greet";
import loop from "./01-loop-function/loop-function.js";
import { loader, waitHalfASecond } from "./02-asynchronous-code/loader.js";
import { containerMaker, svgCreator, textBoxMaker, buttonMaker, domElementAccessorFromClass, domElementAccessorFromType } from "./04-html-page-element-creators/html-page-element-functions.js";
import randomArrayItemSelector from "./05-random-selector/random-selector-script.js";
import { setInitialArrayInLocalStorage, getArrayFromLocalStorage, setManipulatedArrayInLocalStorage, setNameInLocalStorage, getNameFromLocalStorage, resetLocalStorage } from "./06-get-and-set-in-local-storage/get-and-set-function.js";
import removeSelectedItemFromArray from "./08-remove-item-from-array/remove-selected-item-from-array-function.js"

setInitialArrayInLocalStorage();

function getNewPageActionFlow() {

let arr = getArrayFromLocalStorage();

let randomValue = randomArrayItemSelector(arr);

console.log(randomValue);

let manipulatedArray = removeSelectedItemFromArray(randomValue, arr);

console.log(manipulatedArray);

setManipulatedArrayInLocalStorage(manipulatedArray);

}

getNewPageActionFlow()




