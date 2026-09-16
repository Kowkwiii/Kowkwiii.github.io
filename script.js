let currentKid = 0;

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

function nextKid() {
    const kids = document.querySelectorAll(".kid-page");

    kids[currentKid].classList.remove("active");

    currentKid++;

    if (currentKid >= kids.length) {
        currentKid = kids.length - 1;
    }

    kids[currentKid].classList.add("active");
}
