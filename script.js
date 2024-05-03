$('.question-and-answer').click(function () {
    $(this).find(".answer").toggleClass("hidden")
    $(this).find(".question-chevron").toggleClass("hidden")
})
function closeTreactPopup() {
    document.querySelector(".treact-popup").classList.add("hidden");
}
function openTreactPopup() {
    document.querySelector(".treact-popup").classList.remove("hidden");
}
document.querySelector(".close-treact-popup").addEventListener("click", closeTreactPopup);
setTimeout(openTreactPopup, 3000)