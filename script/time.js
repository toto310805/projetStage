const backButton = document.querySelector("#backButton");
backButton.addEventListener("click", () => {
    window.location.href = "home.html";
})


const numberOfStars = 100;


for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(star);
}

function time() {
    const now = new Date();

    const optionsDate = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const date = now.toLocaleDateString('fr-FR', optionsDate);
    const heure = now.toLocaleTimeString('fr-FR');

    document.getElementById('time').textContent = `${date} - ${heure}`;
}

time();

setInterval(time, 1000);


const startButton = document.querySelector("#time-start");
const display = document.querySelector("#display");

let intervalId = null
let seconds = 0;
let minutes = 0;
let heures = 0;
startButton.addEventListener("click", () => {
    if(intervalId === null) {
        intervalId = setInterval(() => {
            seconds ++;
            display.textContent = `${seconds} s`;
            if (seconds === 60) {
                minutes ++;
                seconds = 0
            }
            if (minutes === 60) {
                heures ++;
                minutes = 0;
            }

            if (heures >= 1) {
                display.textContent = `${heures} h ${minutes} min ${seconds} s`;
            } else if (minutes >= 1) {
                display.textContent = `${minutes} min ${seconds} s`;
            }

        }, 1000);
        startButton.textContent = "Arrêter";
    } else{
        clearInterval(intervalId);
        intervalId = null
        startButton.textContent = "Démarrer"
    }
});

const resetButton = document.getElementById('time-reset');

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    display.textContent = `${seconds} s`;
    startButton.textContent = 'Démarrer';
});
