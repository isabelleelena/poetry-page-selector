import { containerMaker, svgCreator, textBoxMaker, buttonMaker, domElementAccessorFromClass, domElementAccessorFromType } from "../04-html-page-element-creators/html-page-element-functions.js"

function waitHalfASecond(svgString) {

    let container = domElementAccessorFromClass("container");

    return new Promise((resolve) => {
        setTimeout(() => {
            let svg = svgCreator(`${svgString}`)
            container.replaceChildren();
            container.appendChild(svg)
            console.log("step 1", Date.now())
            resolve("done");
        }, 500)

    })
}

function loader() {

waitHalfASecond(`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`)
.then(function (result) {
    result = `<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" d="M36,0C20.535,0,8,12.535,8,28v22.344l-6.828,6.828c-1.562,1.562-1.562,4.094,0,5.656 C1.953,63.609,2.977,64,4,64s2.047-0.391,2.828-1.172L13.656,56H36c15.465,0,28-12.535,28-28V0H36z M50.828,18.828L37.652,32.004H44 c2.211,0,4,1.789,4,4s-1.789,4-4,4H29.652l-2.824,2.824C26.047,43.609,25.023,44,24,44s-2.047-0.391-2.828-1.172 c-1.562-1.562-1.562-4.094,0-5.656L24,34.344V20c0-2.211,1.789-4,4-4s4,1.789,4,4v6.344l13.172-13.172 c1.562-1.562,4.094-1.562,5.656,0S52.391,17.266,50.828,18.828z"></path> </g></svg>`;
    return waitHalfASecond(result)
})
.then(function (result) {
    result = `<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M191.179 273.824C240.235 297.511 305.516 282.723 327.848 235.07C343.653 201.345 294.142 174.478 268.869 180.597C249.795 185.215 238.443 210.424 226.139 201.065C216.677 165.605 199.9 119.51 135.192 107.37C114.091 103.412 83.5311 110.64 102.336 135.815C116.496 154.766 137.36 163.983 158.442 173.765C164.792 176.714 169.78 183.842 176.581 185.72C178.199 186.166 181.717 185.007 181.525 186.671C181.105 190.238 113.899 155.977 108.125 179.498C103.955 196.484 152.426 206.208 162.693 208.177C163.338 208.3 167.696 208.583 167.631 209.126C167.291 212.044 128.996 205.366 122.548 219.126C113.925 237.519 146.169 239.099 156.097 238.053C164.394 237.176 172.809 236.947 180.889 235.438C181.156 235.389 194.153 233.997 169.23 238.769C147.16 242.995 90.4779 253.756 88.9641 262.487C87.4503 271.218 95.0462 273.682 99.275 281.556C103.504 289.429 106.52 291.001 110.939 295.051C115.357 299.1 142.753 259.14 172.051 268.915M323.418 199.974C348.126 209.727 352.589 199.404 329.977 213.31M291.997 210.007C291.781 209.411 291.563 208.813 291.345 208.215" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
    return waitHalfASecond(result)
})
.then(function (result) {
    result = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 19C9.49345 19 7.91806 17.6547 6.86651 16.3888C6.42721 15.8599 5.58617 15.867 5.20168 16.4323C4.50078 17.4629 3.68402 18.4127 2 18.7859M22 18.7859C20.4123 18.4341 19.5955 17.5697 18.9199 16.6083C18.4965 16.0059 17.5655 16.0425 17.1055 16.6208C16.6953 17.1365 16.2063 17.6119 15.6148 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 9C14.5065 9 16.0819 7.65471 17.1335 6.38877C17.5728 5.85991 18.4138 5.86697 18.7983 6.43233C19.4992 7.46288 20.316 8.41274 22 8.78594M2 8.78594C3.58767 8.4341 4.40448 7.56969 5.08009 6.60834C5.50345 6.00591 6.43454 6.04252 6.89447 6.62076C7.30467 7.13646 7.79373 7.6119 8.38519 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 13.7859C20.4123 13.4341 19.5955 12.5697 18.9199 11.6083C18.4965 11.0059 17.5655 11.0425 17.1055 11.6208C16.0541 12.9427 14.4844 14 12 14C9.49345 14 7.91806 12.6547 6.86651 11.3888C6.42721 10.8599 5.58617 10.867 5.20168 11.4323C4.50078 12.4629 3.68402 13.4127 2 13.7859" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
    return waitHalfASecond(result)
})
.then(function (result) {
    result = `<svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5054 9.89526C5.55475 9.66558 5.72029 9.47825 5.94216 9.40102C6.16403 9.3238 6.41011 9.36785 6.5914 9.51726L7.9354 10.4173C8.11049 10.5229 8.32272 10.5475 8.51733 10.4848C8.71194 10.4221 8.86989 10.2782 8.9504 10.0903C11.4544 5.05926 17.6994 6.56326 19.4634 11.7773C19.512 11.922 19.512 12.0786 19.4634 12.2233C17.6994 17.4373 11.4544 18.9413 8.9504 13.9103C8.86953 13.7224 8.71124 13.5787 8.51641 13.5164C8.32158 13.4541 8.10931 13.4792 7.9344 13.5853L6.5904 14.4853C6.40884 14.6342 6.16278 14.6777 5.94115 14.6001C5.71952 14.5225 5.55438 14.3349 5.5054 14.1053C5.49312 14.0207 5.50348 13.9345 5.5354 13.8553L6.0994 12.2513C6.1558 12.0894 6.1558 11.9132 6.0994 11.7513L5.5364 10.1513C5.50306 10.0703 5.49235 9.98183 5.5054 9.89526Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4994 12.0002C16.4994 12.5525 16.0517 13.0002 15.4994 13.0002C14.9471 13.0002 14.4994 12.5525 14.4994 12.0002C14.4994 11.448 14.9471 11.0002 15.4994 11.0002C15.7646 11.0002 16.019 11.1056 16.2065 11.2931C16.394 11.4807 16.4994 11.735 16.4994 12.0002Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
    return waitHalfASecond(result)
})

};

export { waitHalfASecond, loader };