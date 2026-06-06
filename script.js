```javascript
const dog = document.getElementById("dog");
const score = document.getElementById("score");
const message = document.getElementById("message");
const ending = document.getElementById("ending");

let points = 0;

const texts = [
    "🐶 Sorry!",
    "🩹 Here's a bandage!",
    "❤️ Get well soon!",
    "💕 Love you!",
    "😊 You're doing great!"
];

function moveDog() {
    let x = Math.random() * (window.innerWidth - 120);
    let y = Math.random() * (window.innerHeight - 180);

    dog.style.left = x + "px";
    dog.style.top = y + "px";
}

moveDog();

dog.onclick = function () {

    points++;
    score.innerHTML = points;

    message.innerHTML =
        texts[Math.floor(Math.random() * texts.length)];

    if (points >= 15) {
        ending.style.display = "block";
        dog.style.display = "none";
        return;
    }

    moveDog();
};
```
