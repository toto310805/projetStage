const numberOfStars = 100;

let money = 100;

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

function createReel(reel) {
    reel.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        const div = document.createElement("div");
        div.textContent = images[Math.floor(Math.random() * images.length)];
        div.style.fontSize = "50px";
        div.style.textAlign = "center";
        reel.appendChild(div);
    }
}

function spin() {
    const reels = [
        document.getElementById("reel1"),
        document.getElementById("reel2"),
        document.getElementById("reel3")
    ];

    reels.forEach((reel, index) => {
        reel.classList.add("spin");

        setTimeout(() => {
            reel.classList.remove("spin");
            createReel(reel);

            const result = images[Math.floor(Math.random() * images.length)];
            reel.innerHTML = `<div style="font-size:50px;text-align:center">${result}</div>`;

        }, 1000 + index * 500);
    });
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

    const results = [];

    reels.forEach((reel) => {
        results.push(reel.textContent);
    });

    if (results[0] === results[1] && results[1] === results[2]) {
        alert("Jackpot !!!");
    }
};

