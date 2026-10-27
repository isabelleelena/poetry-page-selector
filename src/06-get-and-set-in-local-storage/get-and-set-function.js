import loop from "../01-loop-function/loop-function.js"

function setInitialArrayInLocalStorage() {

    let fullArray = loop();

    localStorage.setItem("devotions-pages", fullArray);


}

function getArrayFromLocalStorage() {

    let stringedArray = localStorage.getItem("devotions-pages");
    let array = stringedArray.split(',')

    return array;

}

function setManipulatedArrayInLocalStorage(newArray) {

    localStorage.setItem("devotions-pages", newArray);

}

function setNameInLocalStorage(username) {

    localStorage.setItem("username", username)

}

function getNameFromLocalStorage() {

    let username = localStorage.getItem("username");
    
    return username;

}

function resetLocalStorage() {

    localStorage.clear();

}

export { setInitialArrayInLocalStorage, getArrayFromLocalStorage, setManipulatedArrayInLocalStorage, setNameInLocalStorage, getNameFromLocalStorage, resetLocalStorage }