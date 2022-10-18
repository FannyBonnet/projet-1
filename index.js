//pointeur sur les boutons equipement ou competences
const competencesClick = document.querySelector("#comp");
const equipementClick = document.querySelector("#equipement");

//pointeur sur les asides
const compDisplay1 = document.querySelector("#charac1");
const compDisplay2 = document.querySelector("#charac2")
const equipementDisplay1 = document.querySelector("#equip1");
const equipementDisplay2 = document.querySelector("#equip2");

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

//pointeur sur les types d'équipement
const poingClick = document.querySelector(".armes-poing");
const distanceClick = document.querySelector(".armes-distance");
const armureClick = document.querySelector(".armure");
const ameliorationsClick = document.querySelector(".ameliorations");
const objetClick = document.querySelector(".objets");
const medicalClick = document.querySelector(".medical");

//pointeur sur les listes d'équipement
const contact = document.querySelector("#contact-weapon");
const ranged = document.querySelector("#ranged-weapon");
const armor = document.querySelector("#armor");
const attachement= document.querySelector("#attachement");
const medic = document.querySelector("#medic");
const gears = document.querySelector("#gears");

//affichage des compétences en cliquant sur le bouton compétence
competencesClick.addEventListener("click",function(){
    console.log("click1");
    competencesClick.classList.toggle("clicked-nav");
    equipementClick.classList.remove("clicked-nav");
    compDisplay1.classList.toggle("visible");
    compDisplay2.classList.toggle("visible");
    equipementDisplay1.classList.remove("visible");
    equipementDisplay2.classList.remove("visible");
    poingClick.classList.remove("clickedbox");
    distanceClick.classList.remove("clickedbox");
    armureClick.classList.remove("clickedbox");
    ameliorationsClick.classList.remove("clickedbox");
    objetClick.classList.remove("clickedbox");
    medicalClick.classList.remove("clickedbox");
    contact.classList.remove("visible");
    ranged.classList.remove("visible");
    armor.classList.remove("visible");
    attachement.classList.remove("visible");
    medic.classList.remove("visible");
    gears.classList.remove("visible");
});

//affichage des équipements en cliquant sur le bouton équipement
equipementClick.addEventListener("click",function(){
    console.log("click2");
    equipementClick.classList.toggle("clicked-nav");
    competencesClick.classList.remove("clicked-nav");
    equipementDisplay1.classList.toggle("visible");
    equipementDisplay2.classList.toggle("visible");
    compDisplay1.classList.remove("visible");
    compDisplay2.classList.remove("visible");
    brawn.classList.remove("visible");
    agility.classList.remove("visible");
    intellect.classList.remove("visible");
    ruse.classList.remove("visible");
    willpower.classList.remove("visible");
    presence.classList.remove("visible");
    vigueurClick.classList.remove("clickedbox");
    agiliteClick.classList.remove("clickedbox");
    intelligenceClick.classList.remove("clickedbox");
    ruseClick.classList.remove("clickedbox");
    volonteClick.classList.remove("clickedbox");
    presenceClick.classList.remove("clickedbox");
});

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

//affichage de la liste contact-weapon en cliquant sur armes de poing
poingClick.addEventListener("click", function () {
    poingClick.classList.toggle("clickedbox");
    contact.classList.toggle("visible");
    distanceClick.classList.remove("clickedbox");
    armureClick.classList.remove("clickedbox");
    ameliorationsClick.classList.remove("clickedbox");
    objetClick.classList.remove("clickedbox");
    medicalClick.classList.remove("clickedbox");
    ranged.classList.remove("visible");
    armor.classList.remove("visible");
    attachement.classList.remove("visible");
    medic.classList.remove("visible");
    gears.classList.remove("visible");
});

//affichage de la liste ranged-weapon en cliquant sur armes à distance
distanceClick.addEventListener("click", function () {
    distanceClick.classList.toggle("clickedbox");
    ranged.classList.toggle("visible");
    poingClick.classList.remove("clickedbox");
    armureClick.classList.remove("clickedbox");
    ameliorationsClick.classList.remove("clickedbox");
    objetClick.classList.remove("clickedbox");
    medicalClick.classList.remove("clickedbox");
    contact.classList.remove("visible");
    armor.classList.remove("visible");
    attachement.classList.remove("visible");
    medic.classList.remove("visible");
    gears.classList.remove("visible");
});

//affichage de la liste armor en cliquant sur armures
armureClick.addEventListener("click", function () {
   armureClick.classList.toggle("clickedbox");
    armor.classList.toggle("visible");
    poingClick.classList.remove("clickedbox");
    distanceClick.classList.remove("clickedbox");
    ameliorationsClick.classList.remove("clickedbox");
    objetClick.classList.remove("clickedbox");
    medicalClick.classList.remove("clickedbox");
    contact.classList.remove("visible");
    ranged.classList.remove("visible");
    attachement.classList.remove("visible");
    medic.classList.remove("visible");
    gears.classList.remove("visible");
});

//affichage de la liste attachement en cliquant sur ameliorations
ameliorationsClick.addEventListener("click", function () {
    ameliorationsClick.classList.toggle("clickedbox");
     attachement.classList.toggle("visible");
     poingClick.classList.remove("clickedbox");
     distanceClick.classList.remove("clickedbox");
     armureClick.classList.remove("clickedbox");
     objetClick.classList.remove("clickedbox");
     medicalClick.classList.remove("clickedbox");
     contact.classList.remove("visible");
     ranged.classList.remove("visible");
     armor.classList.remove("visible");
     medic.classList.remove("visible");
     gears.classList.remove("visible");
 });

 //affichage de la liste gears en cliquant sur objet
 objetClick.addEventListener("click", function () {
     objetClick.classList.toggle("clickedbox");
     gears.classList.toggle("visible");
     poingClick.classList.remove("clickedbox");
     distanceClick.classList.remove("clickedbox");
     armureClick.classList.remove("clickedbox");
     ameliorationsClick.classList.remove("clickedbox");
     medicalClick.classList.remove("clickedbox");
     contact.classList.remove("visible");
     ranged.classList.remove("visible");
     armor.classList.remove("visible");
     medic.classList.remove("visible");
     attachement.classList.remove("visible");
 });

 //affichage de la liste medic en cliquant sur medical
 medicalClick.addEventListener("click", function () {
     medicalClick.classList.toggle("clickedbox");
     medic.classList.toggle("visible");
     poingClick.classList.remove("clickedbox");
     distanceClick.classList.remove("clickedbox");
     armureClick.classList.remove("clickedbox");
     objetClick.classList.remove("clickedbox");
     ameliorationsClick.classList.remove("clickedbox");
     contact.classList.remove("visible");
     ranged.classList.remove("visible");
     armor.classList.remove("visible");
     attachement.classList.remove("visible");
     gears.classList.remove("visible");
 });
