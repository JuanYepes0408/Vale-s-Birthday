// =====================================
// CIELO DE ESTRELLAS
// =====================================

// -------------------------------------
// ELEMENTOS DE LA VENTANA
// -------------------------------------

const starMessage = document.getElementById("starMessage");

const starMessageText =
    document.getElementById("starMessageText");

const closeStarMessage =
    document.getElementById("closeStarMessage");


// -------------------------------------
// MENSAJES DE LAS ESTRELLAS
// -------------------------------------

const starMessages = {

    star1:
        "Contigo hasta los dias normales se sienten especiales. ❤️",

    star2:
        "Te amo, incluso en todas esas pequeñas cosas que quizá ni notas. ✨",

    star3:
        "Mi mayor deseo es siempre tenerte en mi vida. 💗",

    star4:
        "Eres siempre mi primer pensamiento cuando me levanto y mi ultimo pensamiento cuando me acuesto. 💕",

    star5:
        "Cuando estoy contigo me siento en paz. ❤️",

    star6:
        "Me gusta pensar que todavía nos quedan muchos momentos bonitos por vivir. ❤️",

    star7:
        "Me encanta mirarte cuando estás distraída y simplemente verte ser tú. ✨",

    star8:
        "Hay días en los que solo quiero un abrazo tuyo. 💖",

    star9:
        "Hoy también pensé en ti y sonreí (No importa cuando lo leas). ❤️",

    star10:
        "Se siente muy bien amarte y lo haré todos los dias de mi vida. 💗",

};


// -------------------------------------
// ABRIR UN MENSAJE
// -------------------------------------

function openStarMessage(starId) {

    const message = starMessages[starId];

    if (!message) {
        return;
    }

    starMessageText.textContent = message;

    setTimeout(() => {

        starMessage.classList.add("active");

    }, 250);

}


// -------------------------------------
// CONECTAR LAS 10 ESTRELLAS
// -------------------------------------

// -------------------------------------
// ESTRELLAS DESCUBIERTAS
// -------------------------------------

const discoveredStars = new Set();


// -------------------------------------
// ELEMENTOS DEL FINAL
// -------------------------------------

const starsComplete =
    document.getElementById("starsComplete");

const spotifyNextButton =
    document.getElementById("spotifyNextButton");


// -------------------------------------
// CONECTAR LAS 10 ESTRELLAS
// -------------------------------------

for (let i = 1; i <= 10; i++) {

    const star = document.getElementById(`star${i}`);

    if (star) {

        star.addEventListener("click", () => {

            // Animación de la estrella
            star.classList.remove("star-selected");

            void star.offsetWidth;

            star.classList.add("star-selected");


            // Guardamos la estrella como descubierta
            discoveredStars.add(`star${i}`);


            // Abrimos su mensaje
            openStarMessage(`star${i}`);


            // Comprobamos si ya descubrió las 10
            if (discoveredStars.size === 10) {

                setTimeout(() => {

                    starsComplete.classList.add("show");

                }, 700);

            }

        });

    }

}

// -------------------------------------
// IR A SPOTIFY
// -------------------------------------

if (spotifyNextButton) {

    spotifyNextButton.addEventListener("click", () => {

        const spotifySection =
            document.getElementById("spotify");

        // Hacemos desaparecer la invitación
        starsComplete.classList.remove("show");

        // Después vamos a Spotify
        if (spotifySection) {

            setTimeout(() => {

                spotifySection.scrollIntoView({
                    behavior: "smooth"
                });

            }, 300);

        }

    });

}


// -------------------------------------
// CERRAR MENSAJE
// -------------------------------------

if (closeStarMessage) {

    closeStarMessage.addEventListener("click", () => {

        starMessage.classList.remove("active");

    });

}


// -------------------------------------
// CERRAR TOCANDO FUERA
// -------------------------------------

if (starMessage) {

    starMessage.addEventListener("click", (event) => {

        if (event.target === starMessage) {

            starMessage.classList.remove("active");

        }

    });

}