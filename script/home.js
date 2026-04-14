import { setBackground } from "./background.js";

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

window.onload = () => {
    setBackground();
};