let currentKid = 0;
let confettiInterval = null;
let bgm = null;

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

function startFinalSlideEffects() {
    // Prevent multiple timers from being created
    if (confettiInterval !== null) {
        return;
    }

    // Start the music
    if (!bgm) {
        bgm = new Audio("bgm.mp3");
        bgm.loop = true;
    }

    bgm.currentTime = 0;

    bgm.play().catch(error => {
        console.log("Audio could not play:", error);
    });

    // Confetti immediately
    fireConfetti();

    // Then every 5 seconds
    confettiInterval = setInterval(() => {
        fireConfetti();
    }, 5000);
}

function fireConfetti() {
    confetti({
        particleCount: 600,
        spread: 900,
        origin: { x: 1, y: 0.1 }
    });

    confetti({
        particleCount: 600,
        spread: 900,
        origin: { x: 0, y: 0.1 }
    });
}

function nextKid() {
    const kids = document.querySelectorAll(".kid-page");

    // Don't go past the final slide
    if (currentKid >= kids.length - 1) {
        return;
    }

    kids[currentKid].classList.remove("active");

    currentKid++;

    kids[currentKid].classList.add("active");

    // Start everything when the final slide appears
    if (currentKid === kids.length - 1) {
        startFinalSlideEffects();
    }
}