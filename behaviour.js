var acak= Math.floor(Math.random()*3)
var acak2= Math.floor(Math.random()*3)

var gambarPlayer1 = ""
var gambarPlayer2 = ""

gambarPlayer1 = [
    "images/batu-kiri.png",
    "images/gunting-kiri.png",
    "images/kertas-kiri.png"
]

gambarPlayer2 = [
    "images/batu-kanan.png",
    "images/gunting-kanan.png",
    "images/kertas-kanan.png"
]


document.querySelector("#player1").setAttribute("src", gambarPlayer1[acak])
document.querySelector("#player2").setAttribute("src", gambarPlayer2[acak2])

var player1Batu = (acak == 0)
var player1Gunting = (acak == 1)
var player1Kertas = (acak == 2)

var player2Batu = (acak2 == 0)
var player2Gunting = (acak2 == 1)
var player2Kertas = (acak2 == 2)

// kondisi player 1 menang
if ((player1Batu && player2Gunting) || (player1Gunting && player2Kertas) || (player1Kertas && player2Batu)){
    document.querySelector("#pesan_p1").innerHTML = "Kamu Menang"
    document.querySelector("#pesan_p2").innerHTML = "Kamu Kalah"
    document.querySelector("#pesan_p1").classList.add("menang")
    document.querySelector("#pesan_p2").classList.add("kalah")
} // kondisi player 2 menang
if ((player2Batu && player1Gunting) || (player2Gunting && player1Kertas) || (player2Kertas && player1Batu)){
    document.querySelector("#pesan_p1").innerHTML = "Kamu Kalah"
    document.querySelector("#pesan_p2").innerHTML = "Kamu Menang"
    document.querySelector("#pesan_p1").classList.add("kalah")
    document.querySelector("#pesan_p2").classList.add("menang")
} // seri
if (acak == acak2){
    document.querySelector("#pesan_p1").innerHTML = "Seri"
    document.querySelector("#pesan_p2").innerHTML = "Seri"
    document.querySelector("#pesan_p1").classList.add("seri")
    document.querySelector("#pesan_p2").classList.add("seri")
}