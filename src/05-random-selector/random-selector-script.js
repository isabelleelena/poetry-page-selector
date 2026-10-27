export default function randomArrayItemSelector(array) {

    let arrayLength = array.length;

    let randomNumber = Math.floor(Math.random() * (arrayLength + 1));

    let arrayItem = array[randomNumber];

    return arrayItem
}