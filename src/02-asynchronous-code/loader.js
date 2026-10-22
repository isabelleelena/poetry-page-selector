function waitASecond() {
    return new Promise((resolve) => {
        setTimeout(resolve(done), 1000)
    })
}

async function waitThreeSeconds() {

    await waitASecond().then(await waitASecond()).then(await waitASecond()).then(() => {
        console.log("You waited three seconds!")
    })

}

export { waitThreeSeconds };