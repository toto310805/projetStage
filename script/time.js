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
