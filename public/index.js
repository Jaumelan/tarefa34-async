const url = "https://rickandmortyapi.com/api/character/";
const buttonRequisition = document.getElementById("firstRequisition");
let characterId = JSON.stringify(getRandomIntInclusive(1,826));
const nameArray = [];
const printSection = document.getElementById("answer");
const characterImage = document.getElementById("characterImage");
const characterName = document.querySelector("h2");

async function rick() {
    let characterData;
    let second;
    try {
        characterData = await fetch(url + characterId).then(data => {return data.json()});
        console.log(characterData.name);
        nameArray.push(characterData.name);
        second = await fetch(url + "?name=" + nameArray[nameArray.length - 1]).then(data => {return data.json()});
        console.log(second);
        characterName.innerText = "";
        characterImage.src = "";
        characterName.innerText = second.results[0].name;
        characterImage.src = second.results[0].image;
    }
    finally {
        return second
    }
   
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

buttonRequisition.addEventListener("click",() => {
    rick()

})