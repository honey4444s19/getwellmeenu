document.addEventListener("DOMContentLoaded", () => {

    const dog = document.getElementById("dog");
    const scoreText = document.getElementById("score");
    const messageBox = document.getElementById("messageBox");

    let score = 0;

    function moveDog(){
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        dog.style.left = x + "px";
        dog.style.top = y + "px";
    }

    moveDog();

    dog.addEventListener("click", () => {

        score++;
        scoreText.innerText = score;

        moveDog();

        if(score >= 15){
            dog.style.display = "none";
            messageBox.style.display = "flex";
        }

    });

});
