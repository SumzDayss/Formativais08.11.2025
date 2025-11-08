console.log("Hello world!")

const inputNumber = document.getElementById("firstNumber")
const inputNumber2 = document.getElementById("secondNumber")
const FirstOutput = document.getElementById("mainOutput")
const FirstButton = document.getElementById("mainButton")
const SecondButton = document.getElementById("notMainButton")

mainButton.addEventListener("click", Reiz)
notMainButton.addEventListener("click",Dala)

function Reiz(){
    let number = firstNumber.value
    let number2 = secondNumber.value
    mainOutput.innerText = firstNumber.value * secondNumber.value
    console.log("Reiznat: " + firstNumber.value * secondNumber.value)
}
function Dala(){
    let number = firstNumber.value
    let number2 = secondNumber.value
    mainOutput.innerText = firstNumber.value / secondNumber.value
    console.log("Dalit: " + firstNumber.value / secondNumber.value)
}

