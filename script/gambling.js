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



let money = 200;
const placeForMoney = document.getElementById('value-money');
placeForMoney.textContent = money + " €";


function spin() {
    if (money >= 30) {
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

                let result;
                if (index === 1) {
                    const probability = Math.random();
                    if (probability < 0.6) {
                        result = results[0];
                    } else {
                        result = images[Math.floor(Math.random() * images.length)];
                    }
                } else {
                    result = images[Math.floor(Math.random() * images.length)];
                }

                reel.innerHTML = `<div style="font-size:50px;text-align:center">${result}</div>`;
                results[index] = result;
                completedReels++;

                if (completedReels === reels.length) {
                    checkWin(results);
                }

            }, 1000 + index * 500);
        });
    }
    else{
        const message = document.getElementById("message");
        message.textContent = "Pas assez d'argent !"
        message.className = "not-enough-money";
    }

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

    setInterval(() => {
        money += 100
    }, 600000)

    const reels = [
        document.getElementById("reel1"),
        document.getElementById("reel2"),
        document.getElementById("reel3")
    ];

    const initialResults = [];
    reels.forEach((reel, index) => {
        let result;
        if (index === 1) {
            const probability = Math.random();
            if (probability < 0.6) {
                result = initialResults[0];
            } else {
                result = images[Math.floor(Math.random() * images.length)];
            }
        } else {
            result = images[Math.floor(Math.random() * images.length)];
        }
        initialResults[index] = result;
        reel.innerHTML = `<div style="font-size:50px;text-align:center">${result}</div>`;
    });

};

