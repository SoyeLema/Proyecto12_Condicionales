//PARTE 1
const image = document.querySelector("#click")
const none = "transparent"
const gold = "3px solid gold"


image.addEventListener("click", function cambiaColor() {
    if (image.style.border != gold) {
        image.style.border = gold
        image.style.transition = ".5s"

    } else {
        image.style.border = none
    }
})


//PARTE 2
let input1 = document.querySelector("#sticker-1")
let input2 = document.querySelector("#sticker-2")
let input3 = document.querySelector("#sticker-3")
let result = document.querySelector("#result")

const verify = document.querySelector(".verify")

verify.addEventListener("click", function verificar() {
    let a = Number(input1.value)
    let b = Number(input2.value)
    let c = Number(input3.value)
    let total = Number(a + b + c)

    if (a < 0 || b < 0 || c < 0) {
        result.innerHTML = "Por favor introduce un número válido del 0 al 10"
        result.style.color = "black"
        result.style.backgroundColor = "#cba467"
    } else if (total > 10) {
        result.innerHTML = "No puedes llevar tantos!"
        result.style.color = "white"
        result.style.backgroundColor = "#9d3532"
    } else if (total > 0) {
        result.innerHTML = `Perfecto! Te llevas ${total} stickers!`
        result.style.color = "white"
        result.style.backgroundColor = "#048c6c"
    } else {
        result.innerHTML = "No has seleccionado stickers para llevar"
        result.style.color = "black"
        result.style.backgroundColor = "#e28743"
    }
})

//PARTE 3
let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
let pass3 = document.querySelector("#pass3")
let access = document.querySelector("#access")

const enter = document.querySelector("#enter")

enter.addEventListener("click", function ingresar() {
    let x = pass1.value
    let y = pass2.value
    let z = pass3.value
    let password = x + y + z

    if (x == 4 && y == 4 && z == 7) {
        access.innerHTML = "¡ACERTASTE! ACCESO CONCEDIDO :D"
        access.style.color = "white"
        access.style.backgroundColor = "#048c6c"
    } else if (x < 0 || y < 0 || z < 0) {
        access.innerHTML = "NOP! INTENTA USAR NÚMEROS POSITIVOS"
        access.style.color = "black"
        access.style.backgroundColor = "#e28743"
    } else if (x == 4 || y == 4 || z == 7) {
        access.innerHTML = "UFF! ESTÁS CERCA! ACERTASTE UNO O MÁS NÚMEROS!!"
        access.style.color = "black"
        access.style.backgroundColor = "#cba467"
    } else if (x == 0 && y == 0 && z == 0) {
        access.innerHTML = "NO ESTÁS INTENTANDO UNA CONTRASEÑA"
        access.style.color = "black"
        access.style.backgroundColor = "#cba467"
    } else {
        access.innerHTML = "FALLASTE :( ACCESO DENEGADO"
        access.style.color = "white"
        access.style.backgroundColor = "#9d3532"

    }


})