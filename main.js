const teks = [
    "Kamu Berharga Lebih Dari Yang Kau Pikirkan",
    "Ku Mengerti Perasaan Apa Yang Kau Rasakan",
    "Rasa Kasih Sayang Ini Begitu Ku Rasakan",
    "Sehingga Membuat Diriku Tak Terkendalikan",
    "Dalam Senyum-Mu Yang Sangat Menawan",
]

const play = document.getElementById("play");
const preloader = document.querySelector(".preloader");
const text = document.getElementById("text");
const bar = document.querySelector(".bar");

let progress = 0

play.addEventListener("click", function() {
    document.querySelector(".char").classList.add("active")
    preloader.style.opacity = "1";
    preloader.style.transition = ".3s";
    preloader.style.opacity = "0.2";
    setTimeout(() => {
        preloader.style.opacity = "0.1";
        preloader.style.display = "none";
        const music = new Audio();
        music.src = "asset/music.mp3";
        music.currentTime = 65;
        music.play();
        main()
    },100)
})

function main() {
    let current = 1;
    setInterval(() => {
        if(current < teks.length) {
            text.innerHTML = `<h1>${teks[current]}</h1>`;
            current ++
            progress += parseInt(100 / teks.length)
            bar.style.width = `${progress}%`
        } else {
            current = 0
            progress = 0
        }
    }, 3000)
}