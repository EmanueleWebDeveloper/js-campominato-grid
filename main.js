// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

const buttonPlayHtml = document.getElementById("play-button")
const gridHtml = document.getElementById("grid")
let difficoltaHtml = document.getElementById("difficolta")

function play(number, className) {

    gridHtml.classList.remove("hidden")

    for (let i = 1; i <= number; i++) {

        let box = document.createElement("div")

        box.classList.add("box")

        box.innerHTML = `<span>${i}</span>`

        box.classList.add(className)


        box.addEventListener("click", function () {
            this.classList.toggle("clicked")
            console.log("Il numero del box cliccato è: " + i)
        })


        gridHtml.append(box)

    }
}

buttonPlayHtml.addEventListener("click", function () {

    gridHtml.innerHTML = ""

    let difficoltaScelta = difficoltaHtml.value

    if (difficoltaScelta === "easy") {
        play(100, "easy-box")
    } else if (difficoltaScelta === "normal") {
        play(81, "normal-box")
    } else if (difficoltaScelta === "hard") {
        play(49, "hard-box")
    }
})