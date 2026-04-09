const numberOfStars = 100;


for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(star);
}


const backButton = document.querySelector(".goBack");
backButton.addEventListener("click", () => {
    window.location = ("home.html");
})

function getsBiggerWhenAimed(){
    const spinButton = document.getElementById("spinButton");
    spinButton.style.transform = "scale(1.1)";
}

function getsSmallerWhenAimed(){
    const spinButton = document.getElementById("spinButton");
    spinButton.style.transform = "scale(1)";
}


const images = [
    "🍒",
    "🍋",
    "🍊",
    "⭐",
    "💎"
];



let money = 100;
const placeForMoney = document.getElementById('value-money');
placeForMoney.textContent = money + " €";


function spin() {
    const reels = [
        document.getElementById("reel1"),
        document.getElementById("reel2"),
        document.getElementById("reel3")
    ];

    const results = [];
    let completedReels = 0;
    const messageElement = document.getElementById("message");
    messageElement.textContent = "";
    messageElement.className = "";

    reels.forEach((reel, index) => {
        reel.classList.add("spin");

        setTimeout(() => {
            reel.classList.remove("spin");

            const result = images[Math.floor(Math.random() * images.length)];
            reel.innerHTML = `<div style="font-size:50px;text-align:center">${result}</div>`;
            results[index] = result;
            completedReels++;

            if (completedReels === reels.length) {
                checkWin(results);
            }

        }, 1000 + index * 500);
    });
}

function checkWin(results) {
    money -= 30;
    const messageElement = document.getElementById("message");
    if (results[0] === results[1] && results[1] === results[2]) {
        money += 100;
        messageElement.textContent = "Jackpot !!!";
        messageElement.className = "jackpot";
    }
    else if (results[0] === results[1] || results[1] === results[2] || results[0] === results[2]) {
        money += 50;
        messageElement.textContent = "Ok";
        messageElement.className = "ok";
    }
    else {
        messageElement.textContent = "Dommage. Essaie encore !";
        messageElement.className = "dommage";
    }
    placeForMoney.textContent = money + " €";
}

window.onload = () => {
    const reels = [
        document.getElementById("reel1"),
        document.getElementById("reel2"),
        document.getElementById("reel3")
    ];

    reels.forEach(reel => {
        const result = images[Math.floor(Math.random() * images.length)];
        reel.innerHTML = `<div style="font-size:50px;text-align:center">${result}</div>`;
    });

};

