// =====================================
// BOTÓN DE BIENVENIDA
// =====================================

const startButton = document.getElementById("startButton");
const letterSection = document.getElementById("letter");

if (startButton && letterSection) {

    startButton.addEventListener("click", () => {

        letterSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


// =====================================
// ELEMENTOS DE LA CARTA
// =====================================

const envelope = document.getElementById("envelope");
const typedText = document.getElementById("typedText");
const clickHint = document.getElementById("clickHint");

const memoryVideo =
    document.getElementById("memoryVideo");

const videoNext =
    document.getElementById("videoNext");

const starsButton =
    document.getElementById("starsButton");

// =====================================
// CUANDO TERMINA EL VIDEO
// =====================================

if (memoryVideo && videoNext) {

    memoryVideo.addEventListener("ended", () => {

        videoNext.classList.add("show");

    });

}

if (starsButton) {

    starsButton.addEventListener("click", () => {

        const starsSection =
            document.getElementById("stars");

        if (starsSection) {

            starsSection.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

}

// =====================================
// TEXTO DE LA CARTA
// =====================================

const message = `Feliz cumpleaños, Rollito de canela. ❤️

Hoy quería hacer algo diferente para ti.

Quería crear algo que estuviera hecho especialmente para ti,
algo que tuviera un poquito de magia y muchisimo amor.

Espero que cuando recorras esta página puedas sentir
todo el amor con el que la preparé.

Te amo. 💗`;


// =====================================
// VARIABLES DE LA CARTA
// =====================================

let letterOpened = false;
let letterIndex = 0;


// =====================================
// ABRIR EL SOBRE
// =====================================

if (envelope) {

    envelope.addEventListener("click", () => {

        if (letterOpened) {
            return;
        }

        letterOpened = true;

        envelope.classList.add("open");

        if (clickHint) {

            clickHint.textContent =
                "Una pequeña sorpresa para ti... 💗";

        }

        // Esperamos a que la hoja salga
        // antes de comenzar a escribir.

        setTimeout(() => {

            typeLetter();

        }, 1300);

    });

}


// =====================================
// EFECTO MÁQUINA DE ESCRIBIR
// =====================================

function typeLetter() {

    if (!typedText) {
        return;
    }

    if (letterIndex < message.length) {

        typedText.textContent +=
            message.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 35);

    } else {

        // La carta terminó de escribirse.

        setTimeout(() => {

            if (videoButton) {

                videoButton.classList.add("show");

            }

        }, 500);

    }

}


// =====================================
// IR AL VIDEO
// =====================================

if (videoButton) {

    videoButton.addEventListener("click", () => {

        const videoSection =
            document.getElementById("video");

        if (videoSection) {

            videoSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}

// =====================================
// ANIMACIÓN DEL VIDEO
// =====================================

const videoSection = document.getElementById("video");

if (videoSection) {

    const videoObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    videoSection.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.25
        }
    );

    videoObserver.observe(videoSection);

}

// =====================================
// INTERACCIÓN DE ORIÓN
// =====================================

const orionImage = document.getElementById("orionImage");
const orionFeedButton = document.getElementById("orionFeedButton");
const orionReaction = document.getElementById("orionReaction");

const orionDescription =
    document.querySelector(".orion-description");

if (orionFeedButton && orionImage && orionReaction) {

    orionFeedButton.addEventListener("click", () => {

        // Evitamos que pueda pulsarse varias veces
        orionFeedButton.disabled = true;

        // Animación de la imagen
        orionImage.classList.add("orion-changing");

        // Esperamos un poco antes de cambiar la foto
        setTimeout(() => {

            orionImage.src = "assets/images/orion-feliz.jpg";

            orionImage.classList.remove("orion-changing");
            orionImage.classList.add("orion-happy");

            // Ocultamos el botón de comida
            orionFeedButton.style.display = "none";

            // Mostramos la reacción
            orionReaction.classList.add("show");

            // Creamos corazones
            createOrionHearts();

        }, 500);

    });

}

// =====================================
// CORAZONES DE ORIÓN
// =====================================

function createOrionHearts() {

    const container =
        document.querySelector(".orion-image-container");

    if (!container) {
        return;
    }

    for (let i = 0; i < 7; i++) {

        const heart = document.createElement("span");

        heart.classList.add("orion-heart");

        heart.textContent = "💗";

        heart.style.setProperty(
            "--heart-x",
            `${Math.random() * 180 - 90}px`
        );

        heart.style.setProperty(
            "--heart-delay",
            `${Math.random() * 0.5}s`
        );

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 1800);

    }

}

// =====================================
// MENSAJE FINAL DE ORIÓN
// =====================================

const orionMessageButton =
    document.getElementById("orionMessageButton");

const orionFinal =
    document.getElementById("orionFinal");


if (orionMessageButton && orionFinal) {

    orionMessageButton.addEventListener("click", () => {

        // Ocultar el botón
        orionMessageButton.style.display = "none";

        // Ocultar el texto:
        // "Creo que ahora sí quiere hablar contigo..."
        orionReaction.querySelector("p").style.display = "none";

        // Ocultar el texto inicial:
        // "Pero primero creo que necesita un poquito de amor."
        if (orionDescription) {
            orionDescription.style.display = "none";
        }

        // Mostrar el mensaje final
        orionFinal.classList.add("show");

        // Animación final de Orión
        orionImage.classList.remove("orion-happy");

        void orionImage.offsetWidth;

        orionImage.classList.add("orion-final-pet");

        // Corazones finales
        createOrionHearts();

    });

}

// =====================================
// IR DE SPOTIFY A ORIÓN
// =====================================

const orionNextButton =
    document.getElementById("orionNextButton");

if (orionNextButton) {

    orionNextButton.addEventListener("click", () => {

        const orionSection =
            document.getElementById("orion");

        if (orionSection) {

            orionSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}

// =====================================
// ESTRELLA FINAL
// =====================================

const finalStar =
    document.getElementById("finalStar");

const finalVideoSection =
    document.getElementById("finalVideoSection");


if (finalStar && finalVideoSection) {

    finalStar.addEventListener("click", () => {

        // Evitamos múltiples clics
        finalStar.disabled = true;

        // Ejecutamos la animación
        finalStar.classList.add("final-star-open");

        // Esperamos un poco para que
        // la estrella desaparezca
        setTimeout(() => {

            finalVideoSection.scrollIntoView({
                behavior: "smooth"
            });

        }, 600);

    });

}

// =====================================
// MENSAJE FINAL
// =====================================

const finalMemoryVideo =
    document.getElementById("finalMemoryVideo");

const goodbyeSection =
    document.getElementById("goodbye");


if (finalMemoryVideo && goodbyeSection) {

    finalMemoryVideo.addEventListener("ended", () => {

        // Bajamos suavemente hasta el mensaje final
        goodbyeSection.scrollIntoView({
            behavior: "smooth"
        });

        // Activamos la animación de aparición
        setTimeout(() => {

            goodbyeSection.classList.add("visible");

        }, 500);

    });

}

// =====================================
// DE ORIÓN A LA PANTALLA FINAL
// =====================================

const orionFinalButton =
    document.getElementById("orionFinalButton");

const finalSection =
    document.getElementById("final");


if (orionFinalButton && finalSection) {

    orionFinalButton.addEventListener("click", () => {

        finalSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}