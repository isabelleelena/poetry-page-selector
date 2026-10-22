// Pages in Devotions: 442 
// Starts on: 3
// Exclude: 15, 16, 29, 30, 43, 44, 56, 57, 58, 66, 67, 68, 90, 91, 92, 98, 99, 100, 120, 121, 122, 142, 143, 144, 160, 161, 162, 169, 170, 188, 189, 190, 196, 197, 198, 207, 208, 224, 225, 226, 242, 243, 244, 260, 261, 262, 278, 279, 280, 311, 312, 340, 341, 342, 362, 363, 364, 391, 392, 400, 401, 402, 426, 427, 428, 432, 433, 434

// for every number between 3 and 442, excluding the listed numbers, add the numbers to an array
// then return the array so that it can be stored in local storage

export default function loop() {

    let excludedNumbers = [15, 16, 29, 30, 43, 44, 56, 57, 58, 66, 67, 68, 90, 91, 92, 98, 99, 100, 120, 121, 122, 142, 143, 144, 160, 161, 162, 169, 170, 188, 189, 190, 196, 197, 198, 207, 208, 224, 225, 226, 242, 243, 244, 260, 261, 262, 278, 279, 280, 311, 312, 340, 341, 342, 362, 363, 364, 391, 392, 400, 401, 402, 426, 427, 428, 432, 433, 434]

    let array = []

    for (let i = 3; i <= 442; i++) {

        if (!excludedNumbers.includes(i)) {
            array.push(i)
        }

    }

    return array
}