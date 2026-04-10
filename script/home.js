const numberOfStars = 100;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(star);
}

const weatherButton = document.querySelector("#weatherButton");
weatherButton.addEventListener("click", (e) => {
    window.location = ("weather.html");
})

const funButton = document.querySelector("#funButton");
funButton.addEventListener("click", (e) => {
    window.location = ("gambling.html");
})

const recordsButton = document.querySelector("#recordsButton");
recordsButton.addEventListener("click", (e) => {
    window.location = ("records.html");
})

const timeButton = document.querySelector("#timeButton");
timeButton.addEventListener("click", (e) => {
    window.location = ("time.html");
})

const saveButton = document.querySelector("#saveButton");

function getsBiggerWhenAimed(){
    const btn = document.getElementById("saveButton");
    if (btn) btn.style.transform = "scale(1.05)";
}

function getsSmallerWhenAimed(){
    const btn = document.getElementById("saveButton");
    if (btn) btn.style.transform = "scale(1)";
}