const celebrateButton =
    document.getElementById("celebrate");

const music =
    document.getElementById("birthdayMusic");

const finalMessage =
    document.getElementById("finalMessage");


celebrateButton.addEventListener("click", function () {

    /*
       Music starts after the user
       interacts with the page.
    */

    music.play().catch(function () {

        console.log("Music could not start.");

    });


    /*
       Show final message
    */

    finalMessage.style.opacity = "1";

    finalMessage.style.transform =
        "translateY(0)";


    /*
       Create confetti
    */

    createConfetti(120);

});


function createConfetti(amount) {

    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            ["🎉", "✨", "💖", "⭐", "🎈"]
            [Math.floor(Math.random() * 5)];


        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-50px";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex =
            "100";


        const duration =
            Math.random() * 3 + 2;


        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)",

                    opacity: 0
                }
            ],

            {

                duration:
                    duration * 1000,

                easing:
                    "linear"
            }

        );


        document.body.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, duration * 1000);

    }

}