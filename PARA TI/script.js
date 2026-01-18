const scene = document.querySelector(".scene");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤";

    const x = window.innerWidth / 2 + (Math.random() * 100 - 50);
    heart.style.left = `${x}px`;

    scene.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 600);
