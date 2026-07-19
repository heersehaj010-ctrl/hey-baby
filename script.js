function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(pageId).classList.remove("hidden");

}

document.getElementById("openBtn").onclick = () => {
    showPage("page2");
};

document.getElementById("nextBtn").onclick = () => {
    showPage("page3");
};

document.getElementById("continueBtn").onclick = () => {
    showPage("page4");
};

document.getElementById("lastBtn").onclick = () => {
    showPage("page5");
};
