export default function removeSelectedItemFromArray(item, array) {

    let itemIndex = array.indexOf(item);

    array.splice(itemIndex, 1);

    console.log(array)

}