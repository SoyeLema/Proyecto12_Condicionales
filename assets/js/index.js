//PARTE 1
const image = document.querySelector("#click")

image.addEventListener("click", function cambiaColor() {

    if (image.style.border == "none") {
        image.style.border = "3px solid gold"
        image.style.transition = ".5s"

    } else {
        image.style.border = "none"
    }
})


//PARTE 2
const input1 = document.querySelector("#sticker-1")
const input2 = document.querySelector("#sticker-2")
const input3 = document.querySelector("#sticker-3")
const result = document.querySelector("#result")

const verify = document.querySelector(".verify")

verify.addEventListener("click", function verificar() {
    const a = Number(input1.value)
    const b = Number(input2.value)
    const c = Number(input3.value)
    const total = (a + b + c)

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
const pass1 = document.querySelector("#pass1")
const pass2 = document.querySelector("#pass2")
const pass3 = document.querySelector("#pass3")
const access = document.querySelector("#access")

const enter = document.querySelector("#enter")

enter.addEventListener("click", function ingresar() {
    const x = pass1.value
    const y = pass2.value
    const z = pass3.value
    const password = x + y + z

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