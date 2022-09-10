/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputNumber = document.getElementById('input-number')
let convertBtn = document.getElementById('convert-btn')
let feet = document.getElementById('feet') //
let meters = document.getElementById('meters')
let gallons = document.getElementById('gallons')
let liters = document.getElementById('liters')
let pounds = document.getElementById('pounds')
let kilos = document.getElementById('kilos')

inputNumber.addEventListener('click', function() {
    inputNumber.value = "" // input back to 0 on click
})

convertBtn.addEventListener('click', function () {
    let result = inputNumber.value // 22
    let feetResult = result * 3.281
    feet.textContent = `${result} meters = ${ feetResult.toFixed(2) } feet`
    let metersResult = result / 3.281
    meters.textContent = `${result} feet = ${ metersResult.toFixed(2) } meters`
    let gallonsResult = result * 0.264
    gallons.textContent = `${result} liters = ${ gallonsResult.toFixed(2) } gallons`
    let litersResult = result / 0.264
    liters.textContent = `${result} gallons = ${ litersResult.toFixed(2) } liters`
    let poundsResult = result * 2.204
    pounds.textContent = `${result} kilos = ${ poundsResult.toFixed(2) } pounds`
    let kilosResult = result / 2.204
    kilos.textContent = `${result} pounds = ${ kilosResult.toFixed(2) } kilos`
})
