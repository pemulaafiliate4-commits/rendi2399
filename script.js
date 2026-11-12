// ==============================
// PASSWORD LOCK SCREEN
// ==============================

let password = "";
const correctPassword = "2012";

function pressNumber(number) {

    if (password.length >= 4) return;

    password += number;

    updatePasswordDisplay();

    if (password.length === 4) {

        setTimeout(() => {
            checkPassword();
        }, 300);

    }
}

function deleteNumber() {

    password = password.slice(0, -1);

    updatePasswordDisplay();

    document.getElementById("errorMessage").innerText = "";
}

function updatePasswordDisplay() {

    const display = document.querySelectorAll(
        "#passwordDisplay span"
    );

    display.forEach((dot, index) => {

        if (index < password.length) {
            dot.classList.add("active");
            dot.innerText = "●";
        } else {
            dot.classList.remove("active");
            dot.innerText = "○";
        }

    });

}

function checkPassword() {

    if (password === correctPassword) {

        document.getElementById("errorMessage").innerText = "";

        const lockScreen = document.getElementById("lockScreen");

        lockScreen.style.transition = "1s";
        lockScreen.style.opacity = "0";

        setTimeout(() => {

            lockScreen.style.display = "none";

            document.getElementById(
                "mainWebsite"
            ).style.display = "block";

            startFlowers();

        }, 1000);

    } else {

        document.getElementById(
            "errorMessage"
        ).innerText = "Password salah, coba lagi ya 💔";

        password = "";

        setTimeout(() => {
            updatePasswordDisplay();
        }, 300);

    }

}


// ==============================
// DIGITAL CLOCK
// ==============================

function updateClock() {

    const now = new Date();

    let hours = String(
        now.getHours()
    ).padStart(2, "0");

    let minutes = String(
        now.getMinutes()
    ).padStart(2, "0");

    document.getElementById(
        "clock"
    ).innerText = hours + ":" + minutes;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById(
        "date"
    ).innerText = now.toLocaleDateString(
        "id-ID",
        options
    );

}

updateClock();

setInterval(updateClock, 1000);


// ==============================
// FLOWER ANIMATION
// ==============================

function createFlower() {

    const container = document.getElementById(
        "flowerContainer"
    );

    const flower = document.createElement("div");

    const flowers = [
        "🌸",
        "🌷",
        "🌺",
        "🌼",
        "💮"
    ];

    flower.classList.add("flower");

    flower.innerText =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    flower.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    container.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);

}

let flowerInterval;

function startFlowers() {

    if (flowerInterval) return;

    flowerInterval = setInterval(
        createFlower,
        500
    );

}


// ==============================
// OPEN GALLERY
// ==============================

function showGallery() {

    document.getElementById(
        "gallery"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// ==============================
// CONSOLE MESSAGE
// ==============================

console.log(
    "Made with love ❤️"
);