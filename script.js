console.log("Hello world!")

const inputNumber = document.getElementById("mainInput")
const firstButton = document.getElementById("mainButton")
const mainOutput = document.getElementById("Output")
const SecondOutput = document.getElementById("OutputLaukums")

mainButton.addEventListener("click", handelClicks)

function handelClicks(){
    let radiuss = mainInput.value
    mainOutput.innerText = 2 * 3.14 * mainInput.value
    SecondOutput.innerText = 3.14 * mainInput.value * mainInput.value
}

