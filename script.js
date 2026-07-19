function showPage(id) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

document.getElementById("openBtn").onclick = () => {
    showPage("apology");
};

document.getElementById("photoBtn").onclick = () => {
    showPage("photoPage");
};

document.getElementById("promiseBtn").onclick = () => {
    showPage("promisePage");
};

document.getElementById("finalBtn").onclick = () => {
    showPage("finalPage");
};

document.getElementById("restartBtn").onclick = () => {
    showPage("intro");
};
