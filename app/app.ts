import * as model from "./model.js";

function main() {
    let tools = [699, 700, 701, 702, 703];
    let id = model.randomCraftableItem();
    console.log(id);
}

main();