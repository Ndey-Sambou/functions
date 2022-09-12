'sue script';
const humus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
    
    console.log(`${ingredient} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.12, "cup", "tahini");
    ingredient(0,25, "can", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
}; 

// Functions as values
let launchMissiles = function() {
    missileSystem.launch("now");
}
if (safeMode) {
    launchMissiles = function() {/* do nohing*/};
}
//function declaration

function square(x) {
    return x * x;
}
console.log("The future says:", future());
function future() {
    return "You'll never be flying cars";
}