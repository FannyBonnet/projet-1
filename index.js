//affichage des skills brawn en cliquant sur vigueur
const vigueurClick = document.querySelector(".vigueur");
vigueurClick.addEventListener("click", function () {
    const list = document.querySelector("#brawn");
    list.classList.toggle("visible");
});
//affichage des skills agility en cliquant sur agilité
const agiliteClick = document.querySelector(".agilite");
agiliteClick.addEventListener("click", function () {
    agiliteClick.style.backgroundColor="yellow";
    const list = document.querySelector("#agility");
    list.classList.toggle("visible");
});
//affichage des skills intellect en cliquant sur intelligence
const intelligenceClick = document.querySelector(".intelligence");
intelligenceClick.addEventListener("click", function () {
    const list = document.querySelector("#intellect");
    list.classList.toggle("visible");
});
//affichage des skills ruse en cliquant sur ruse
const ruseClick = document.querySelector(".ruse");
ruseClick.addEventListener("click", function () {
    const list = document.querySelector("#ruse");
    list.classList.toggle("visible");
});
//affichage des skills willpower en cliquant sur volonte
const volonteClick = document.querySelector(".volonte");
volonteClick.addEventListener("click", function () {
    const list = document.querySelector("#willpower");
    list.classList.toggle("visible");
});
//affichage des skills presence en cliquant sur presence
const presenceClick = document.querySelector(".presence");
presenceClick.addEventListener("click", function () {
    const list = document.querySelector("#presence");
    list.classList.toggle("visible");
});