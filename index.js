//pointeur sur les caractéristiques
const vigueurClick = document.querySelector(".vigueur");
const agiliteClick = document.querySelector(".agilite");
const intelligenceClick = document.querySelector(".intelligence");
const ruseClick = document.querySelector(".ruse");
const volonteClick = document.querySelector(".volonte");
const presenceClick = document.querySelector(".presence");

//pointeur sur les listes de compétences
const brawn = document.querySelector("#brawn");
const agility = document.querySelector("#agility");
const intellect = document.querySelector("#intellect");
const ruse = document.querySelector("#ruse");
const willpower = document.querySelector("#willpower");
const presence = document.querySelector("#presence");

//affichage des skills brawn en cliquant sur vigueur

vigueurClick.addEventListener("click", function () {
    vigueurClick.classList.toggle("clickedbox");
    brawn.classList.toggle("visible");
    agiliteClick.classList.remove("clickedbox");
    intelligenceClick.classList.remove("clickedbox");
    ruseClick.classList.remove("clickedbox");
    volonteClick.classList.remove("clickedbox");
    presenceClick.classList.remove("clickedbox");
    agility.classList.remove("visible");
    intellect.classList.remove("visible");
    ruse.classList.remove("visible");
    willpower.classList.remove("visible");
    presence.classList.remove("visible");
});
//affichage des skills agility en cliquant sur agilité

agiliteClick.addEventListener("click", function () {
    agiliteClick.classList.toggle("clickedbox");
    agility.classList.toggle("visible");
    vigueurClick.classList.remove("clickedbox");
    intelligenceClick.classList.remove("clickedbox");
    ruseClick.classList.remove("clickedbox");
    volonteClick.classList.remove("clickedbox");
    presenceClick.classList.remove("clickedbox");
    brawn.classList.remove("visible");
    intellect.classList.remove("visible");
    ruse.classList.remove("visible");
    willpower.classList.remove("visible");
    presence.classList.remove("visible");
});
//affichage des skills intellect en cliquant sur intelligence

intelligenceClick.addEventListener("click", function () {
    intelligenceClick.classList.toggle("clickedbox");
    intellect.classList.toggle("visible");
    vigueurClick.classList.remove("clickedbox");
    agiliteClick.classList.remove("clickedbox");
    ruseClick.classList.remove("clickedbox");
    volonteClick.classList.remove("clickedbox");
    presenceClick.classList.remove("clickedbox");
    brawn.classList.remove("visible");
    agility.classList.remove("visible");
    ruse.classList.remove("visible");
    willpower.classList.remove("visible");
    presence.classList.remove("visible");
});
//affichage des skills ruse en cliquant sur ruse

ruseClick.addEventListener("click", function () {
    ruseClick.classList.toggle("clickedbox");
    ruse.classList.toggle("visible");
    vigueurClick.classList.remove("clickedbox");
    agiliteClick.classList.remove("clickedbox");
    intelligenceClick.classList.remove("clickedbox");
    volonteClick.classList.remove("clickedbox");
    presenceClick.classList.remove("clickedbox");
    brawn.classList.remove("visible");
    agility.classList.remove("visible");
    intellect.classList.remove("visible");
    willpower.classList.remove("visible");
    presence.classList.remove("visible");
});
//affichage des skills willpower en cliquant sur volonte

volonteClick.addEventListener("click", function () {
    volonteClick.classList.toggle("clickedbox");
    willpower.classList.toggle("visible");
    vigueurClick.classList.remove("clickedbox");
    agiliteClick.classList.remove("clickedbox");
    intelligenceClick.classList.remove("clickedbox");
    ruseClick.classList.remove("clickedbox");
    presenceClick.classList.remove("clickedbox");
    brawn.classList.remove("visible");
    agility.classList.remove("visible");
    intellect.classList.remove("visible");
    ruse.classList.remove("visible");
    presence.classList.remove("visible");
});
//affichage des skills presence en cliquant sur presence

presenceClick.addEventListener("click", function () {
    presenceClick.classList.toggle("clickedbox");
    presence.classList.toggle("visible");
    vigueurClick.classList.remove("clickedbox");
    agiliteClick.classList.remove("clickedbox");
    intelligenceClick.classList.remove("clickedbox");
    ruseClick.classList.remove("clickedbox");
    volonteClick.classList.remove("clickedbox");
    brawn.classList.remove("visible");
    agility.classList.remove("visible");
    intellect.classList.remove("visible");
    ruse.classList.remove("visible");
    willpower.classList.remove("visible");
});