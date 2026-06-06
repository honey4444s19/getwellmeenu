document.addEventListener("DOMContentLoaded", () => {

    const dog = document.getElementById("dog");
    const scoreText = document.getElementById("score");
    const message = document.getElementById("message");
    const ending = document.getElementById("ending");

    let score = 0;

    const texts = [
        "🐶 Sorry!",
        "🩹 Bandage for you!",
        "❤️ Get well soon!",
        "😊 You're amazing!"
    ];

    function moveDog(){
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 150);
        dog.style.left = x + "px";
        dog.style.top = y + "px";
    }

    moveDog();

    dog.addEventListener("click", () => {

        score++;
        scoreText.innerText = score;

        message.innerText =
            texts[Math.floor(Math.random() * texts.length)];

        if(score >= 15){
            ending.style.display = "block";
            dog.style.display = "none";
            return;
        }

        moveDog();
    });

});
