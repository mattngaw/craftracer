const MCData = require("minecraft-data")("1.18.2");

type ID = number;

const ID_MIN = 0;
const ID_MAX = 1101;

function isCraftable(id : ID) : Boolean {
    return MCData.recipes[id] !== undefined;
}

function randomID() : ID {
    return Math.floor(Math.random() * (ID_MAX - ID_MIN)) + ID_MIN;
}

export function randomCraftableItem() : ID  {
    let id: ID;
    do { id = randomID(); } while (isCraftable(id));
    return id;
}