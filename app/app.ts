import {randomRecipe, ID} from "./model.js";

function main() {
    let recipes = randomRecipe();
    for (let i = 0; i < recipes.length; i++) {
        console.log(recipes[i])
    }
    return;
}

main();